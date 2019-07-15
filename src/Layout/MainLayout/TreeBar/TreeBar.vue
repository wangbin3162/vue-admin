<template>
  <el-tree ref="tree" :data="treeData" @current-change="handTreeCurrentChange"
           :empty-text="emptyText" node-key="id"
           :default-expand-all="expandAll" :accordion="accordion" :props="defaultProps"
           :highlight-current="true" :expand-on-click-node="false">
  </el-tree>
</template>

<script>
  export default {
    props: {
      emptyText: {
        type: String,
        default: 'loading...'
      },
      accordion: {
        type: Boolean,
        default: false
      },
      expandAll: {
        type: Boolean,
        default: false
      },
      treeData: {
        type: Array,
        default: function () {
          return []
        }
      },
      defaultProps: {
        type: Object,
        default: function () {
          return { label: 'name', children: 'children' }
        }
      }
    },
    methods: {
      // 当前选中节点改变状态
      handTreeCurrentChange (node) {
        this.$emit('current-change', node)
      },
      // 设置当前选中节点
      setCurrentNode (node) {
        this.$refs.tree.setCurrentNode(node)
      }
    }
  }
</script>
