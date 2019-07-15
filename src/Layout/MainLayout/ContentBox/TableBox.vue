<template>
  <div class="detail-wrapper" ref="tableWrapper">
    <div class="table-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>

  export default {
    mounted () {
      this.$nextTick(() => {
        this._initTableMaxHeight()
      })
      this.__resizeHandler = this.$util.throttle(() => {
        this._initTableMaxHeight()
      }, 100)
      window.addEventListener('resize', this.__resizeHandler)
    },
    methods: {
      /**
       * 初始化表格的最大高度
       */
      _initTableMaxHeight () {
        if (this.$refs.tableWrapper) {
          var max = this.$refs.tableWrapper.clientHeight
          this.$emit('resize-height', max)
        }
      }
    },
    activated () {
      this._initTableMaxHeight()
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.__resizeHandler)
    }
  }
</script>
