import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import store from '../../store';
import AppRoutes from '../../router';
import IntlUniversal from '../../components/IntlUniversal';

@IntlUniversal
class LayoutView extends Component {
	render() {
		return (
			<Provider {...store}>
				<HashRouter>
						<Switch>
							{AppRoutes.map(v =>
								(
									<Route
										key={v.id}
										path={v.path}
										component={v.component}
										exact={v.path === '/' ? true : false}
									/>
								)
							)}
						</Switch>
				</HashRouter>
			</Provider>
		);
	}
}

export default LayoutView;
