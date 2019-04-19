# 1. Seemmo 前端文档规范

## 1.1. 技术选型

目前公司主要技术栈`Vue`,  项目都是基于`Vue-cli`3.0脚手架搭建, 后续可能会使用react构建。

以下是相关`Vue`学习资源:

 - [vue Github地址](https://github.com/vuejs) (里面包含了vue, vuex, vue-cli等源码)
 - [vue-cli 官网](https://cli.vuejs.org/zh/)
 - [vue 中文官网](https://cn.vuejs.org/)
 - [vuex 官网](https://vuex.vuejs.org/zh/)
 - [Element-ui Api](http://element-cn.eleme.io/#/zh-CN/component/installation)
 - [vue-router](https://router.vuejs.org/zh/)
 - [echarts](https://echarts.baidu.com/)
 - [axios](https://github.com/axios/axios)
 - [@seemmo/map 公司地图框架](http://192.168.2.4:4873/#/detail/@seemmo/map)



## 1.2. 开发环境

建议统一使用VSCode编译器，进行代码开发。

公司项目主要运用于公安项目专网使用，第三包打包到本地, 切勿使用 “CDN” 模式引入第三方包, `@seemmo/map`本地gis包。

代码存放地址 http://192.168.2.3/

```
# 克隆代码
git clone object-name http: //xxxx

cd object-name

# 检查本地npm仓库地址
npm get registry

# 设置npm仓库地址
npm set registry http://192.168.2.4:4873

# 启动项目
npm start or npm run dev

# 打包
npm run build
```



## 1.3. 目录结构


```
│ package-lock.json
│ package.json		//依赖等相关配置文件
│ .eslintrc.js		//eslint检查规则，项目统一
├─config		//webpack配置文件
├─build		//webpack打包配置
├─dist		//项目打包成品目录
├─public		//项目静态不编译资源
  favicon.ico
  index.html		//整个项目的index.html页面
└─src		//源码目录
  │ App.vue		//项目根vue
  │ main.js		//项目入口js
  │ router.js		//项目路由
  | minxin		//高阶组件
  ├─assets		//静态资源
    ├─images		//图片资源
    ├─style		//样式基础库
    ├─font		//iconfont字体
    ......
  ├─components		//基础组件
    ├─Gis
      ├─components		
      index.vue
    ├─Menu
    ...
  ├─businessComponents		//公共业务组件
    ├─FormItem
      ├─components
      index.vue
  ├─@types		//ts类定义
  ├─libs		//自定义类库
  ├─service		//service层
  ├─store		//vuex数据状态管理
    ├─modules		//多模块数据管理
    index.js		//store入口文件
  └─views		//分模块的页面vue，即component中根据设计的合计界面
    login.vue
    ......
```



## 1.4. 样式规范
为了方便做皮肤切换，建议统一使用`less`或者`scss`变量，使用`sass-resources-loader`包, 适用于`sass`, `less`等引入全局文件, 可调用全部`less`，`scss`变量。

目前公司所有`ui`组件`element-ui`, 皮肤定制化是基于`scss`实现，




## 1.5. 编码规范



## 1.6. 组件规范