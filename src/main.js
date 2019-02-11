import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/index.scss'

import './router/routeInterceptor'
import MyPlugin from './plugin/MyPlugin'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(MyPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
