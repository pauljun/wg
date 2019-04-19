import React from 'react';
import {
    Form, Icon, Input, Button
} from 'antd';
import { withRouter } from 'react-router-dom';
import { businessService } from '../../service/index';
import logo from '../../assets/images/logo.png';
import nav from '../../assets/images/login/nav.png';
import './index.less';

@withRouter
@Form.create({ name: 'login' })
class Login extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                businessService('userlogic', {
                    type: 'login',
                    ...values
                }).then(res => {
                    if(res.code === 0){
                        this.props.history.push('/index');
                    }
                })
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-wrapper">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <div className="login-title">
                        <img src={logo} width="53" />
                        视频结构化平台
                        <div className="hr">
                            <img src={nav} />
                        </div>
                    </div>

                    <Form.Item>
                        {getFieldDecorator('userAccount', {
                            rules: [{ required: true, message: '请输入用户名' }],
                        })(
                            <Input
                                prefix={<Icon type="user" />}
                                placeholder="请输入用户名"
                                size="large"
                                auto-complete="off"
                            />
                        )}
                    </Form.Item>
                    <Form.Item style={{ marginTop: '28px' }}>
                        {getFieldDecorator('userPassword', {
                            rules: [{ required: true, message: '请输入密码' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" />}
                                type="password"
                                placeholder="请输入密码"
                                size="large"
                                auto-complete="off"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Login;