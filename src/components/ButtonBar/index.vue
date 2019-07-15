<template>
  <div class="btn-bar">
    <div class="btn-bar-left">
      <slot>
        <b-button size="mini" type="primary" v-if="optCode.add" v-waves @click="handleCreate" plain>
          <i class="el-icon-circle-plus-outline"></i> 新增
        </b-button>
        <b-button size="mini" type="success" v-if="optCode.modify" v-waves @click="handleEdit" plain>
          <i class="el-icon-edit-outline"></i> 编辑
        </b-button>
        <b-button size="mini" type="info" v-if="showCheck" v-waves @click="handleCheck" plain>
          <i class="el-icon-search"></i> 查看
        </b-button>
        <b-button size="mini" type="danger" v-if="optCode.remove" v-waves @click="handleDelete" plain>
          <i class="el-icon-remove-outline"></i> 删除
        </b-button>
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
        this.$emit('on-create')
      },
      handleEdit () {
        this.$emit('on-edit')
      },
      handleCheck () {
        this.$emit('on-check')
      },
      handleDelete () {
        this.$emit('on-delete')
      }
    }
  }
</script>

<style scoped lang="scss">
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
        transition: .1s;
        font-weight: 500;
        padding: 7px 10px;
        font-size: 12px;
        border-radius: 3px;
      }
    }
  }
</style>
