import React from 'react';
import { Select, message } from 'antd';
import themes from '../../../assets/theme/index';
import eventEmitter from '../../../libs/eventEmitter';

const Option = Select.Option;
const languageGroup = [
    { label: '中文', value: 'zh-CN' },
    { label: 'English', value: 'en-US' }
]

class LocalView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorValue: 'theme1',
            languageValue: 'zh-CN'
        }
    }

    /**
     * @desc 皮肤切换
     */
    onChange = value => {
        window.less
            .modifyVars(themes.filter(v => v.name === value)[0].value)
            .then(res => {
                message.success('皮肤切换成功');
            })
        this.setState({ colorValue: value });
    }

    /**
     * @desc 语言切换
     */
    changeLanguage = value => {
        eventEmitter.emit('language', value);
        this.setState({
            languageValue: value
        })
    }

    render() {
        const { colorValue, languageValue } = this.state;
        return (
            <div className="local-model">
                <Select value={colorValue} onChange={this.onChange}>
                    {themes.map(v => (
                        <Option
                            key={v.name}
                            value={v.name}
                        >
                            {v.label}
                        </Option>)
                    )}
                </Select>
                <Select value={languageValue} onChange={this.changeLanguage}>
                    {languageGroup.map(v => (
                        <Option
                            key={v.value}
                            value={v.value}
                        >
                            {v.label}
                        </Option>
                    ))}
                </Select>
            </div>
        )
    }
}

export default LocalView;