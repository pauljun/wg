import React from 'react';
import { Tabs } from 'antd';
import tabsList from './tab';
import './index.less';

const TabPane = Tabs.TabPane;

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabKey: '0'
        }
    }
    render() {
        return (
            <div className="test-wrapper">
                <Tabs 
                    activeKey={this.state.tabKey} 
                    onChange={key => this.setState({ tabKey: key })}
                >
                    {tabsList.map(v => (
                        <TabPane 
                            tab={v.title} 
                            key={v.id}
                        >
                            {<v.component />}
                        </TabPane>
                    ))}
                </Tabs>
            </div>
        )
    }
}