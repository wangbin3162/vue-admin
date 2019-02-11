import storage from 'good-storage'

// 左侧菜单栏打卡状态
const SIDEBAR_KEY = '__sidebarStatus__'

export function getSidebarStatus () {
  let some = storage.get(SIDEBAR_KEY, true)
  return some
}

export function setSidebarStatus (status) {
  let some = storage.set(SIDEBAR_KEY, status)
  return some
}
