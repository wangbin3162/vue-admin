<template>
  <div :class="classes">
    <span v-if="hasSlot" :class="slotClasses">
        <slot></slot>
    </span>
  </div>
</template>

<script>

  const prefixCls = 'v-divider'
  export default {
    name: 'Divider',
    props: {
      type: {
        type: String,
        default: 'horizontal'// 'horizontal', 'vertical'
      },
      orientation: {
        type: String,
        default: 'center'// 'left', 'right', 'center'
      },
      dashed: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      hasSlot () {
        return !!this.$slots.default
      },
      classes () {
        return [
          `${prefixCls}`,
          `${prefixCls}-${this.type}`,
          {
            [`${prefixCls}-with-text-${this.orientation}`]: this.hasSlot,
            [`${prefixCls}-dashed`]: !!this.dashed
          }
        ]
      },
      slotClasses () {
        return [
          `${prefixCls}-inner-text`
        ]
      }
    }
  }
</script>

<style lang="scss">
  .v-divider {
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, \\5FAE\8F6F\96C5\9ED1, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #515a6e;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    background: #e8eaec;
  }

  .v-divider, .v-divider-vertical {
    margin: 0 8px;
    display: inline-block;
    height: .9em;
    width: 1px;
    vertical-align: middle;
    position: relative;
    top: -.06em;
  }

  .v-divider-horizontal {
    display: block;
    height: 1px;
    width: 100%;
    margin: 24px 0;
    clear: both;
  }

  .v-divider-horizontal.v-divider-with-text-center,
  .v-divider-horizontal.v-divider-with-text-left,
  .v-divider-horizontal.v-divider-with-text-right {
    display: table;
    white-space: nowrap;
    text-align: center;
    background: 0 0;
    font-weight: 500;
    color: #17233d;
    font-size: 16px;
    margin: 16px 0;
  }

  .v-divider-dashed {
    background: 0 0;
    border-top: 1px dashed #e8eaec;
  }

  .v-divider-inner-text {
    display: inline-block;
    padding: 0 24px;
  }

  .v-divider-horizontal.v-divider-with-text-left .v-divider-inner-text,
  .v-divider-horizontal.v-divider-with-text-right .v-divider-inner-text {
    display: inline-block;
    padding: 0 10px;
  }

  .v-divider-horizontal.v-divider-with-text-center:after,
  .v-divider-horizontal.v-divider-with-text-center:before,
  .v-divider-horizontal.v-divider-with-text-left:after,
  .v-divider-horizontal.v-divider-with-text-left:before,
  .v-divider-horizontal.v-divider-with-text-right:after,
  .v-divider-horizontal.v-divider-with-text-right:before {
    content: "";
    display: table-cell;
    position: relative;
    top: 50%;
    width: 50%;
    border-top: 1px solid #e8eaec;
    -webkit-transform: translateY(50%);
    transform: translateY(50%);
  }

  .v-divider-horizontal.v-divider-with-text-left:before {
    top: 50%;
    width: 5%;
  }

  .v-divider-horizontal.v-divider-with-text-left:after,
  .v-divider-horizontal.v-divider-with-text-right:before {
    top: 50%;
    width: 95%;
  }

  .v-divider-horizontal.v-divider-with-text-right:after {
    top: 50%;
    width: 5%;
  }
</style>
