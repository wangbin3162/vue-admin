<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
  import echarts from 'echarts'
  import resize from '../../../components/Charts/mixins/resize'

  require('echarts/theme/macarons') // echarts theme

  const animationDuration = 3000

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
        default: '300px'
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
        var builderJson = {
          feadBack: 12,
          reply: 10
        }
        this.chart.setOption({
          tooltip: {},
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            height: 60,
            containLabel: true
          },
          xAxis: {
            type: 'value',
            show: false,
            max: builderJson.feadBack + builderJson.reply
          },
          yAxis: {
            type: 'category',
            show: false
          },
          series: [
            {
              name: '反馈数量',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [builderJson.feadBack]
            },
            {
              name: '回复数量',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [builderJson.reply]
            }
          ]
        })
      }
    }
  }
</script>
