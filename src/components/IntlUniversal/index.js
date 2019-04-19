/**
 * @desc 国际化注入
 */

import React from 'react';
import { LocaleProvider } from 'antd';
import intl from 'react-intl-universal';
import moment from 'moment';
import 'moment/locale/zh-cn';
import eventEmitter from '../../libs/eventEmitter';

const antdLocals = {
    'zh-CN': require('antd/lib/locale-provider/zh_CN')
} 

const locales = {
    'zh-CN': require('../../locales/zh_CN').default,
    'en-US': require('../../locales/en_US').default
}

const IntlUniversal = WrapperComponent => {
    return class extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                local: 'zh-CN'
            }
        }

        componentWillMount(){
            this.intlSetOptions(this.state.local);
        }
        
        componentDidMount() {
            // 切换皮肤
            eventEmitter.on('language', value => {
                moment.locale(value);
                this.setState({
                    local: value
                })
                this.intlSetOptions(value);
            })
        }

        /**
         * @desc 变量皮肤切换
         * @param {String} value 皮肤切换code
         */
        intlSetOptions = value => {
            intl.init({
                currentLocale: value,
                locales
            });
        }

        render() {
            return (
                <LocaleProvider locale={antdLocals[this.state.local]}>
                    <WrapperComponent />
                </LocaleProvider>
            )
        }
    }
}

export default IntlUniversal;