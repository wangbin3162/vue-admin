<template>
  <div :class="classes" :style="styles">
    <slot></slot>
    <div v-if="!!this.$slots.display" class="display">
      <slot name="display"></slot>
    </div>
  </div>
</template>

<script>
  const prefixCls = 'v-drawer-box'
  export default {
    props: {
      type: {
        type: String,
        default: 'view'
      },
      width: {
        type: String,
        default: '80%'
      },
      top: {
        type: Number,
        default: 12
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`, `${prefixCls}-${this.type}`
        ]
      },
      styles () {
        return {
          width: this.width,
          marginTop: this.top + 'px'
        }
      }
    }
  }
</script>

<style lang="scss">
  .v-drawer-box {
    padding: 12px;

    &.v-drawer-box-view {
      margin: 0 auto;

      .display {
        border-top: 1px solid #d5d9de;

        .el-row {
          border-left: 1px solid #d5d9de;

          .el-col {
            display: flex;
            line-height: 40px;
            font-size: 14px;
            color: #606266;

            .v-label {
              padding: 0 10px;
              border-bottom: 1px solid #d5d9de;
              border-right: 1px solid #d5d9de;
              overflow-y: hidden;

              a {
                display: inline-block;
                margin-top: 10px;

                img {
                  max-width: 80%;
                }
              }

              pre {
                margin: 0;
                line-height: 1.8;
              }

              &.v-label-blod {
                text-align: center;
                background: #fafafa;
              }
            }
          }
        }
      }
    }

    &.v-drawer-box-edit {
      margin: 0 auto;
    }
  }
</style>
