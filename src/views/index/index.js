import React from 'react';
import { Button, DatePicker, Pagination } from 'antd';
import intl from 'react-intl-universal';
import './index.less';
const { RangePicker } = DatePicker;

class IndexView extends React.Component {
    render() {
        return (
            <div className="index-container">
                <Button type="primary">{intl.get('test')}</Button>
                <div style={{margin: "20px 0"}}>
                    <RangePicker
                        showTime={{ format: 'HH:mm' }}
                        format="YYYY-MM-DD HH:mm"
                        placeholder={['开始时间', '结束时间']}
                        onChange={this.onChange}
                        onOk={this.onOk}
                    />
                </div>
                <div>
                    <Pagination defaultCurrent={1} total={50} showSizeChanger />
                </div>
            </div>
        );
    }
}

export default IndexView;