import request from './api_request'

// 根据是否使用mock.js来设置基础url
// let baseUrl = 'https://easy-mock.com/mock/5a93b9748be1e80aa1c9293e/vue-admin'
let baseUrl = '/mock'


// 初始化树节点
export function initTreeData () {
  return request({
    url: `${baseUrl}/table/tree`,
    method: 'get'
  })
}

// 查询列表
export function getListData () {
  return request({
    url: `${baseUrl}/table/list`,
    method: 'get'
  })
}
