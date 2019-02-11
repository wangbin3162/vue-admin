<template>
  <span :class="classes" :style="styles">
    <slot></slot>
  </span>
</template>

<script>
  const prefixCls = 'v-label'
  export default {
    props: {
      blod: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: '#515a6e'
      },
      width: {
        type: String,
        default: '140'
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-blod`]: this.blod
          }
        ]
      },
      styles () {
        return {
          color: this.color,
          flex: this.blod ? this.width.length > 0 ? `0 0 ${this.width}px` : '1' : '1'
        }
      }
    }
  }
</script>

<style lang="scss">
  .v-label {
    &.v-label-blod {
      font-weight: bold;
    }
  }
</style>
