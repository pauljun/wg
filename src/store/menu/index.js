import { observable, action, configure } from 'mobx';

// 严格模式
configure({ enforceActions: true });

class Menu {
    // 菜单栏列表
    @observable MenuList = []

    // 菜单栏默认选中列表
    @observable activeMenuKey = ''

    /**
     * @desc 设置菜单栏列表数据
     * @param {Object} userInfo 
     */
    @action
    setMenuList(list) {
        this.MenuList = list;
    }

    /**
     * @desc 设置菜单栏选中id
     */
    @action
    setMenuActiveKey(key){
        this.activeMenuKey = key;
    }
}

export default Menu;