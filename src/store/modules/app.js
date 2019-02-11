import { getSidebarStatus, setSidebarStatus } from '../../common/js/cache'

const app = {
  state: {
    sidebar: {
      opened: getSidebarStatus()
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        setSidebarStatus(false)
      } else {
        setSidebarStatus(true)
      }
      state.sidebar.opened = !state.sidebar.opened
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    }
  }
}

export default app
