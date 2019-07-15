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
        let builderJson = {
          data: {
            '周一': 22,
            '周二': 34,
            '周三': 11,
            '周四': 24,
            '周五': 22,
            '周六': 8,
            '周日': 12
          }
        }
        this.chart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          xAxis: {
            type: 'category',
            data: Object.keys(builderJson.data),
            show: false
          },
          yAxis: {
            type: 'value',
            show: false
          },
          series: [{
            name: '用户注册数',
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: Object.keys(builderJson.data).map(function (key) {
              return builderJson.data[key]
            }),
            animationDuration
          }]
        })
      }
    }
  }
</script>
