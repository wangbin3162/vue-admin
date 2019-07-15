import Vue from 'vue'
import VueRouter from 'vue-router'
// 路由数据
import routes from './routes'

import BinUI from 'bin-ui'

Vue.use(BinUI)

Vue.use(VueRouter)

// 导出路由 在 main.js 里使用
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 权限白名单 no redirect whitelist
const whiteList = ['/login', '/home', '/404', '/401', '/403', '/500']

/**
 * 当前路由是否有权限
 * @param route
 * @returns {boolean}
 */
function hasPermission (route) {
  return whiteList.indexOf(route.path) !== -1
}

router.beforeEach((to, from, next) => {
  BinUI.LoadingBar.start()
  // 暂时不做权限处理
  next()
})
router.afterEach(() => {
  BinUI.LoadingBar.done()
})

export default router
