<template>
  <transition name="fade">
    <div class="v-drawer-wrapper" v-show="visible" :style="drawerMaskBgColor" @click.self="handleMaskClick">
      <transition name="move">
        <div class="drawer-box" :style="{'width':width}" v-show="visible">
          <div class="header">
            <div class="front">
              <span class="el-icon-edit-outline"></span>
              <span class="title">{{ title }}</span>
            </div>
            <div class="close">
              <span class="el-icon-close" @click="close()"></span>
            </div>
          </div>
          <div class="body">
            <b-scrollbar style="height: 100%;">
              <slot>
              </slot>
            </b-scrollbar>
          </div>
          <div class="footer">
            <el-button size="small" v-waves type="info" plain @click="close()">取 消</el-button>
            <slot name="footer">
              <el-button v-waves size="small" v-if="status==='create'" type="primary"
                         @click="createData" :loading="btnStatus">
                {{ addText }}
              </el-button>
              <el-button v-waves size="small" v-if="status==='update'" type="primary"
                         @click="updateData" :loading="btnStatus">
                {{ updateText }}
              </el-button>
            </slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      },
      status: {
        type: String,
        default: 'check' // create,update,check
      },
      label: {
        type: String,
        default: null
      },
      btnStatus: {
        type: Boolean,
        default: false
      },
      creatBtnTxt: {
        type: String,
        default: '新 增'
      },
      updateBtnTxt: {
        type: String,
        default: '保 存'
      },
      width: {
        type: String,
        default: '100%'
      },
      maskClose: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        visible: this.value
      }
    },
    computed: {
      title () {
        const map = {
          check: '查看',
          update: '编辑',
          create: '新增'
        }
        return this.label || map[this.status] || '编辑'
      },
      drawerMaskBgColor () {
        return { backgroundColor: this.width !== '100%' ? 'rgba(55, 55, 55, .6)' : 'none' }
      },
      addText () {
        return this.btnStatus ? '提交中' : this.creatBtnTxt
      },
      updateText () {
        return this.btnStatus ? '提交中' : this.updateBtnTxt
      }
    },
    methods: {
      close () {
        this.visible = false
        this.$emit('input', false)
        this.$emit('on-close')
      },
      handleMaskClick () {
        if (this.maskClose) {
          this.close()
        }
      },
      createData () {
        this.$emit('on-create')
      },
      updateData () {
        this.$emit('on-update')
      }
    },
    watch: {
      value (val) {
        this.visible = val
      }
    }
  }
</script>

<style lang="scss">
  .v-drawer-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 2000;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;

    &.fade-enter-active, &.fade-leave-active {
      transition: all .4s ease;
    }

    &.fade-enter, &.fade-leave-to {
      opacity: 0.3;
    }

    .drawer-box {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      background: #ffffff;

      &.move-enter-active, &.move-leave-active {
        transition: all .4s ease;
      }

      &.move-enter, &.move-leave-to {
        transform: translateX(100%);
      }

      .header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-size: 14px;
        padding: 10px 12px;
        border-bottom: 1px solid #f0f0f0;
        color: #596b77;
        background: #fff;

        .iconfont {
          display: inline-block;
          vertical-align: middle;
        }

        .close {
          span {
            margin-left: 0;
            cursor: pointer;
          }
        }

        span {
          font-weight: 700;
          display: inline-block;
          vertical-align: middle;
          margin-left: 4px;
        }
      }

      .body {
        flex: 1;
        overflow: auto;
        font-size: 14px;
        color: #515a6e;
        line-height: 1.5;

        h2 {
          line-height: 1.5;
          margin: 0 0 12px 0;
        }

        .el-input, .el-select {
          width: 100%;
        }
      }

      .footer {
        border-top: 1px solid #f0f0f0;
        padding: 5px 0;
        text-align: center;

        .el-button {
          min-width: 80px;
        }

        .el-button--primary {
          color: #fff;
          background-color: #3d97f5;
          border-color: #3d97f5;
        }

        .el-button--primary:hover {
          background-color: #409eff;
          border-color: #3d97f5;
        }

        .el-button--info {
          color: #1a1a1a;
          background-color: #f0f0f0;
          border-color: #f0f0f0;
        }

        .el-button--info:hover {
          background-color: #f5f5f5;
          border-color: #f0f0f0;
          color: #1a1a1a;
        }
      }
    }
  }
</style>
