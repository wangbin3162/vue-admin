export default [
  // tree
  {
    url: '/table/tree',
    type: 'get',
    response: config => {
      return {
        data:
          [{
            label: '一级 1',
            children: [{
              label: '二级 1-1',
              children: [{
                label: '三级 1-1-1'
              }]
            }]
          }, {
            label: '一级 2',
            children: [{
              label: '二级 2-1',
              children: [{
                label: '三级 2-1-1'
              }]
            }, {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1'
              }]
            }]
          }, {
            label: '一级 3',
            children: [{
              label: '二级 3-1',
              children: [{
                label: '三级 3-1-1'
              }]
            }, {
              label: '二级 3-2',
              children: [{
                label: '三级 3-2-1'
              }]
            }]
          }]
      }
    }
  },
  // list
  {
    url: '/table/list',
    type: 'get',
    response: config => {
      return {
        'rows|10': [{
          'id|+1': 1,
          'name|+1': ['蛋奶小方', '胡萝卜奶酪棒', '全麦面包', '椰蓉蛋糕', '草莓慕斯', '蔓越莓面包', '香草蛋糕'],
          'category|+1': ['零食', '日用品'],
          desc: '荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店 @integer(0, 75)',
          shopId: '@integer(0, 75)'
        }]
      }
    }
  }
]
