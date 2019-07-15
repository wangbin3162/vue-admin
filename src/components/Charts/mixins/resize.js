export default {
  mounted () {
    this.__resizeHandler = this.$util.throttle(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHandler)

    const sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    sidebarElm.addEventListener('transitionend', this.sidebarResizeHandler)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.__resizeHandler)
    const sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    sidebarElm.removeEventListener('transitionend', this.sidebarResizeHandler)
  },
  methods: {
    sidebarResizeHandler (e) {
      if (e.propertyName === 'width') {
        this.__resizeHandler()
      }
    }
  }
}
