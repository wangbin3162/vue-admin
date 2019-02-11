import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'// progress bar style
// const debug = process.env.NODE_ENV !== 'production'
NProgress.configure({ showSpinner: false })// NProgress Configuration

// 权限白名单 no redirect whitelist
const whiteList = ['/home', '/404', '/401', '/403', '/500']

/**
 * 当前路由是否有权限
 * @param 当前路由名称
 * @returns {boolean}
 */
function hasPermission (route) {
  if (whiteList.indexOf(route.path) !== -1) { // 在免登录白名单，直接进入
    return true
  }
  return false
}

router.beforeEach((to, from, next) => {
  NProgress.start()
  // 如果有权限判断则进行筛选并跳转不同的权限页面
  next()
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
