## 技术选型

基于`creact-react-app` 构建项目, 目前架构已经支持懒加载， 皮肤切换， 语言切换，`dll`包构建，暂时不支持多入口多路由打包模式, 如果后续有技术要求，再实现此方案。

- `react` 16.8.5

- `react-dom` 16.8.5

- `react-intl-universal`1.15.5

- `react-router` 5.0.0

- `react-router-dom` 5.0.0

- `antd` 3.11.0

- `axios` 0.18.0

- `lodash` 4.17.11

- `mobx` 5.9.0

- `mobx-react`5.4.3

- `moment` 2.24.0


## 项目运行

```
# 检查本地仓库地址
npm get register

# 安装依赖
npm i --verbose

# 启动项目
npm start

# 打包
npm run build

# dll打包
npm run build:dll
```



## 项目目录

```
├─build		//打包生成文件
│  └─static
│      ├─css
│      ├─js
│      └─media
├─config	//webpack配置文件
│  └─jest
├─doc		//文档说明
├─public	//静态资源
├─scripts	//命令工具
├─src		//项目开发目录
│  ├─assets		//静态资源存放
│  │  ├─font	//字体库
│  │  ├─images	//图片资源
│  │  │  └─login	
│  │  ├─styles	//层叠样式
│  │  └─theme	//自定义皮肤
│  ├─businessComponents		//业务组件
│  ├─components				//基础组件
│  │  └─IntlUniversal
│  ├─dict					//字典
│  ├─libs					//常用类库
│  ├─locales				//国际化
│  ├─router					//路由
│  ├─service				//服务层
│  ├─store					//数据状态管理
│  │  └─user
│  ├─utils					//工具类
│  └─views					//视图
│      ├─404
│      ├─App
│      ├─flowAnalysis
│      ├─index
│      ├─layout
│      │  └─components
│      ├─login
│      └─test

```



##  皮肤切换

皮肤切换基于`antd` 官方推荐`antd-theme-generator` , 执行`npm run color`初始化皮肤,  暂时不支持less变量皮肤切换功能。



## 语言切换

目前只支持中英文切换，可自行添加第三种语言， locales目录下放置了语言包，可支持变量配置。

