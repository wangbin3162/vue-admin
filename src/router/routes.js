import Main from '../Layout/Main'

/**
 * router自定义配置项
 * hidden: true                   如果设置true则左侧路由菜单隐藏
 * name:'router-name'             <keep-alive>使用必须设置 (must set!!!)
 * meta : {
    role: true                   设置是否有权限
    title: 'title'                当前路由的中文名称
    noCache: true                 如果fasle，页面将不会被缓存(默认为false)
    icon: 'icon-file-text'        当前菜单的图标样式，使用阿里iconfont
  }
 **/
// 基础路映射
const _401 = () => import(/* webpackChunkName: "errorPage" */ '../pages/errorPage/401.vue')
const _403 = () => import(/* webpackChunkName: "errorPage" */ '../pages/errorPage/403.vue')
const _404 = () => import(/* webpackChunkName: "errorPage" */ '../pages/errorPage/404.vue')
const _500 = () => import(/* webpackChunkName: "errorPage" */ '../pages/errorPage/500.vue')
const _home = () => import(/* webpackChunkName: "main" */ '../pages/home/index.vue')
// 业务路由映射
const _keyBoard = () => import(/* webpackChunkName: "charts" */ '../pages/charts/KeyBoard.vue')
const _lineMarker = () => import(/* webpackChunkName: "charts" */ '../pages/charts/LineMarker.vue')
const _mixChart = () => import(/* webpackChunkName: "charts" */ '../pages/charts/MixChart.vue')
const _tableExample = () => import(/* webpackChunkName: "example" */ '../pages/example/TableExample.vue')
const _richText = () => import(/* webpackChunkName: "example" */ '../pages/example/RichText.vue')
const _splitPanel = () => import(/* webpackChunkName: "example" */ '../pages/example/SplitPanel.vue')

export const constantRouterMap = [
  {path: '/404', component: _404, hidden: true},
  {path: '/401', component: _401, hidden: true},
  {path: '/403', component: _403, hidden: true},
  {path: '/500', component: _500, hidden: true},
  {
    path: '',
    component: Main,
    redirect: 'home',
    meta: {title: '首页', icon: 'icon-ios-home'},
    children: [{
      path: 'home',
      component: _home,
      name: 'home',
      meta: {title: '首页', icon: 'icon-ios-home', noCache: true}
    }]
  }
]
export const asyncRouterMap = [
  // 组件实例
  {
    path: '/example',
    component: Main,
    redirect: 'noRedirect',
    meta: {title: '演示案例', icon: 'icon-ios-apps'},
    children: [
      {path: 'tableExample', component: _tableExample, name: 'TableExample', meta: {title: '综合演示'}},
      {path: 'richText', component: _richText, name: 'RichText', meta: {title: '富文本'}},
      {path: 'splitPanel', component: _splitPanel, name: 'SplitPanel', meta: {title: '分隔区块'}}
    ]
  },
  // 图表演示
  {
    path: '/charts',
    component: Main,
    redirect: 'noRedirect',
    meta: {title: '图表示例', icon: 'icon-ios-stats'},
    children: [
      {path: 'keyBoard', component: _keyBoard, name: 'KeyBoard', meta: {title: '键盘图'}},
      {path: 'lineMarker', component: _lineMarker, name: 'LineMarker', meta: {title: '折线图'}},
      {path: 'mixChart', component: _mixChart, name: 'MixChart', meta: {title: '混合图'}}
    ]
  },
  // 错误页面
  {
    path: '/errorPage',
    component: Main,
    redirect: 'noRedirect',// 表示面包屑不需要重定向
    meta: {title: '错误页面', icon: 'icon-ios-information-circle'},
    children: [
      {path: 'page401', component: _401, name: 'Page401', meta: {title: '401'}},
      {path: 'page403', component: _403, name: 'Page403', meta: {title: '403'}},
      {path: 'page404', component: _404, name: 'Page404', meta: {title: '404'}},
      {path: 'page500', component: _500, name: 'Page500', meta: {title: '500'}}
    ]
  },
  {path: '*', redirect: '/404'}
]

let routes = constantRouterMap.concat(asyncRouterMap)

export default routes
