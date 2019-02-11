<template>
  <div class="btn-bar">
    <div class="btn-bar-left">
      <slot>
        <el-button size="mini" type="primary" icon="el-icon-circle-plus-outline" v-if="optCode.add"
                   plain v-waves @click="handleCreate">新增
        </el-button>
        <el-button size="mini" type="success" icon="el-icon-edit" v-if="optCode.modify"
                   plain v-waves @click="handleEdit">编辑
        </el-button>
        <el-button size="mini" type="info" icon="el-icon-search" v-if="showCheck"
                   plain v-waves @click="handleCheck">查看
        </el-button>
        <el-button size="mini" type="danger" icon="el-icon-circle-close-outline" v-if="optCode.remove"
                   plain v-waves @click="handleDelete">删除
        </el-button>
      </slot>
    </div>
    <div class="btn-bar-right">
      <slot name="right">
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      optCode: {
        type: Object,
        default: function () {
          return {}
        }
      },
      showCheck: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      handleCreate () {
        this.$emit('handleCreate')
      },
      handleEdit () {
        this.$emit('handleEdit')
      },
      handleCheck () {
        this.$emit('handleCheck')
      },
      handleDelete () {
        this.$emit('handleDelete')
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .btn-bar {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;

    .btn-bar-right {
      .download {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        color: #fff;
        border: 1px solid #409EFF;
        background-color: #409EFF;
        text-align: center;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        padding: 7px 10px;
        font-size: 12px;
        border-radius: 3px;
        margin-right: 10px;
      }
    }
  }
</style>
