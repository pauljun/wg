import React from 'react';
import { Menu, Layout } from 'antd';
import LocalChange from './Local';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
import UserBase from './UserBase';

const SubMenu = Menu.SubMenu;

export default ({
    data = [],
    activeKey,
    setActiveKey
}) => {
    return (
        <Layout.Header>
            <div className="logo">
                <img src={Logo} />
            </div>
            <Menu
                theme="dark"
                mode="horizontal"
                onClick={e => setActiveKey(e.key)}
                selectedKeys={activeKey}
            >
                {data && data.map(v =>
                    !!!v.children.length ?
                        <Menu.Item key={v.attributes.menuPath}>
                            <Link to={v.attributes.menuPath}>
                                {v.attributes.menuName}
                            </Link>
                        </Menu.Item> :
                        <SubMenu
                            title={v.attributes.menuName}
                        >
                            {v.children.map(item =>
                                <Menu.Item key={item.attributes.menuPath}>
                                    <Link to={item.attributes.menuPath}>
                                        {item.attributes.menuName}
                                    </Link>
                                </Menu.Item>
                            )}
                        </SubMenu>

                )}
                {process.env.NODE_ENV !== 'production'
                    && <Menu.Item key='test'>
                        <Link to='/test'>
                            组件测试
                        </Link>
                    </Menu.Item>
                }
            </Menu>
            <LocalChange />
            <UserBase />
        </Layout.Header>
        
    )
}