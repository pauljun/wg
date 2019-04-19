import React, { Suspense } from 'react';
import { Layout, Spin } from 'antd';
import { Route, Switch } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from '../../router/layout';
import ErrorPage from '../404/index';
import { businessService } from '../../service';
import './index.less';

const { Content } = Layout;

@withRouter
@inject('menu', 'user')
@observer
class LayoutView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
	}

	componentDidMount() {
		const { menu, history, user } = this.props;
		// 获取用户信息
		Promise.all([
			businessService('userlogic', {
				type: 'isLogin'
			}),
			businessService('menulogic')
		]).then(res => {
			if (res[0].code === 0 && res[1].code === 0) {
				user.setUserInfo(res[0].userInfo[0]);
				menu.setMenuList(res[1].data[0].children);
				this.setState({ loading: false });
				this.computedMenu(this.props);
			} else {
				history.push('/login');
			}
		})
	}

	componentWillReceiveProps(nextProps) {
		this.computedMenu(nextProps);
	}

	/**
	 * @desc 检测路由变化
	 */
	computedMenu = (props) => {
		const { menu, location, history } = props;
		const activeKey = location.pathname.split('/')[1];
		if (activeKey && activeKey !== menu.activeKey) {
			menu.setMenuActiveKey(activeKey);
		}
	}

	/**
	 * @desc 切换导航栏
	 */
	setActiveKey = key => {
		this.props.menu.setMenuActiveKey(key);
	}

	render() {
		const { MenuList, activeMenuKey } = this.props.menu;
		const { loading } = this.state;
		return (
			<Spin spinning={loading} size="large" wrapperClassName="layout-spin">
				<Layout className="layout">
					<Header
						data={MenuList}
						setActiveKey={this.setActiveKey}
						activeKey={activeMenuKey}
					/>
					<Content>
						<Suspense fallback={<Spin spinning={true} wrapperClassName="layout-spin" size="large" />}>
							<Switch>
								{AppRoutes.map(v =>
									(
										<Route
											path={v.path}
											key={v.id}
											component={v.component}
										/>
									)
								)}
								<Route component={ErrorPage} />
							</Switch>
						</Suspense>
					</Content>
				</Layout>
			</Spin>
		)
	}
}

export default LayoutView;