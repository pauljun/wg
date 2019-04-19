import { observable, action, configure } from 'mobx';

// 严格模式
configure({ enforceActions: true });

class User {
    @observable userInfo = {
        userName: '管理员'
    };

    /**
     * @desc 设置用户信息
     * @param {Object} userInfo 
     */
    @action
    setUserInfo(userInfo) {
        this.userInfo = userInfo;
    }
}

export default User;