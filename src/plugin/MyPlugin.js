import waves from '../directive/waves'

let MyPlugin = {}
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('waves', waves)// 全局注册水波纹指令

  // 3. 添加实例方法
  /**
   * 自定义打印功能 调试模式打印
   * @param message
   */
  Vue.prototype.$cLog = function (message) {
    if (process.env.NODE_ENV !== 'production') {
      console.log(message)
    }
  }
}
export default MyPlugin
