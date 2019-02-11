import request from './api_request'

// 初始化树节点
export function initTreeData () {
  return request({
    url: 'https://easy-mock.com/mock/5a93b9748be1e80aa1c9293e/kingdee/table/tree',
    method: 'get'
  })
}

// 查询列表
export function getListData () {
  return request({
    url: 'https://easy-mock.com/mock/5a93b9748be1e80aa1c9293e/kingdee/table/list',
    method: 'get'
  })
}
