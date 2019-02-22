# 介绍

[![An image](./img/vue-2.5.10-brightgreen.svg)](https://github.com/vuejs/vue)
[![An image](./img/element--ui-2.5.4-brightgreen.svg)](http://element-cn.eleme.io/#/zh-CN/component/installation)

本项目是基于 Vue2.5，配合使用 [Element UI](http://element-cn.eleme.io/#/zh-CN/component/installation)组件库来进行搭建wcm后台管理系统，
项目开发的过程中主要参考了`panjiachen`[vue-element-admin](https://panjiachen.github.io/vue-element-admin-site/zh/guide/#%E5%AE%89%E8%A3%85),在此基础上自己
构建了一套符合自公司开发规范的项目目录结构，按照公司设计要求，配合实现了一套后台样式。

## 功能概述

    - 全局功能
      - 动态侧边栏（支持多级路由嵌套）
      - 动态面包屑
      - 快捷导航(标签页)
      - 阿里iconfont图标嵌入
      - Easy-Mock数据
      - 自适应收缩侧边栏
    
    - 编辑器
      - 富文本
    
    - 错误页面
      - 401
      - 403
      - 404
      - 500
    
    - 組件
      - 按钮组
      - ECharts 图表
      - Divider 分割线
      - Drawer 抽屉
      - 标题栏、文本栏
      - SplitPane 分隔区块
      - Tinymce 富文本封装
      
 注：仅列举部分组件和功能
      
## 环境搭建

需要在本地安装 node 和 vue-cli3。本项目技术栈基于
[ES6](http://es6.ruanyifeng.com/)、
[vue](https://cn.vuejs.org/index.html)、
[vuex](https://vuex.vuejs.org/zh/guide/)、
[vue-router](https://router.vuejs.org/zh/)、
[axios](https://github.com/axios/axios)、
[element-ui](https://github.com/ElemeFE/element)
学习相关内容在开发项目时将会很有帮助。

此外，为实现图表、加载进度，请求参数转换，数字累加等功能，本项目还安装依赖了一些辅助库， 如
[echarts](https://echarts.baidu.com/index.html)、
[nprogress](https://www.npmjs.com/package/nprogress)、
[qs](https://www.npmjs.com/package/qs)、
[vue-count-to](https://www.npmjs.com/package/vue-count-to)
[good-storage](https://www.npmjs.com/package/good-storage)、等。

还有一些常用的第三方库如图片懒加载，better-scroll滚动等会在最后进行列举和说明。

所有的请求数据都使用[Easy-Mock](https://easy-mock.com/)模拟

## 目录结构

整个项目的目录结构如下，具体包含内容后续会进行详细介绍和解释

    ├── docs                       // 文档目录
    ├── public                     // 公共资源，第三方,不打包资源
    │   └── Tinymce                // 富文本
    ├── src                        // 源代码
    │   ├── api                    // 所有请求
    │   ├── assets                 // 静态资源，会打包的资源
    │   ├── common                 // 公共的js、工具包等
    │   ├── components             // 全局公用组件,抽屉，富文本，按钮组，layout等
    │   ├── directive              // 全局指令,这里暂时只包含一个水波纹指令
    │   ├── plugin                 // 自定义插件，注入指令，全局mixin
    │   ├── router                 // 路由
    │   ├── store                  // 全局 store 管理
    │   ├── views                  // views 所有页面
    │   ├── App.vue                // 入口页面
    │   └── main.js                // 入口文件 加载组件 初始化等
    ├── .eslintrc.js               // eslint 配置项
    ├── .gitignore                 // git 忽略项
    ├── babel.config.js            // babel 配置项
    ├── vue.config.js              // vue-cli3集成配置项
    └── package.json               // package.json
    
## 安装

```bash
# 克隆项目
git clone https://github.com/wangbin3162/vue-admin.git

# 安装依赖
npm install

# 本地开发 启动项目
npm run serve
# OR vue ui 图形化界面启动
vue ui
```

实际工作中可直接克隆在此基础包中进行开发，如果希望了解项目是如何从零开始搭建的，请继续往下看~
