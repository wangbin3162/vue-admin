import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import tagsView from './modules/tagsView'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    sidebar: state => state.app.sidebar,
    user: state => state.app.user,
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews
  },
  modules: {
    app,
    tagsView
  }
})
