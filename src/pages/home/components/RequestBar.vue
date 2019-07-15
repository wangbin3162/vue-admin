<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
  import echarts from 'echarts'
  import resize from '../../../components/Charts/mixins/resize'

  require('echarts/theme/macarons') // echarts theme

  export default {
    mixins: [resize],
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '200px'
      }
    },
    data () {
      return {
        chart: null
      }
    },
    mounted () {
      this.initChart()
    },
    beforeDestroy () {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    },
    methods: {
      initChart () {
        this.chart = echarts.init(this.$el, 'macarons')

        const xAxisData = []
        const data = []
        for (let i = 0; i < 50; i++) {
          xAxisData.push(i)
          let x = (Math.abs((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5))
          data.push(Math.floor(x))
        }
        this.chart.setOption({
          tooltip: {},
          grid: {
            left: '5%',
            right: '5%'
          },
          xAxis: {
            show: false,
            data: xAxisData
          },
          yAxis: {
            show: false
          },
          series: [
            {
              name: '访问数量',
              type: 'bar',
              data,
              itemStyle: {
                normal: {
                  color: '#3888fa',
                  barBorderRadius: 2
                }
              }
            }],
          animationEasing: 'elasticOut',
          animationEasingUpdate: 'elasticOut',
          animationDelay (idx) {
            return idx * 20
          },
          animationDelayUpdate (idx) {
            return idx * 20
          }
        })
      }
    }
  }
</script>
