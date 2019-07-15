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
          xAxisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          public: [10, 12, 16, 13, 10, 16, 16],
          draft: [2, 8, 9, 15, 16, 14, 14]
        }
        this.chart.setOption({
          xAxis: {
            data: builderJson.xAxisData,
            boundaryGap: false,
            show: false
          },
          yAxis: {
            show: false
          },
          grid: {
            left: -20,
            right: 3,
            bottom: 0,
            top: 0,
            containLabel: true
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            },
            padding: [5, 10]
          },
          series: [
            {
              name: '发布',
              smooth: true,
              type: 'line',
              itemStyle: {
                normal: {
                  color: '#3888fa',
                  lineStyle: {
                    color: '#3888fa',
                    width: 2
                  },
                  areaStyle: {
                    color: '#f3f8ff'
                  }
                }
              },
              data: builderJson.public,
              animationDuration,
              animationEasing: 'quadraticOut'
            },
            {
              name: '草稿',
              itemStyle: {
                normal: {
                  color: '#FF005A',
                  lineStyle: {
                    color: '#FF005A',
                    width: 2
                  }
                }
              },
              smooth: true,
              type: 'line',
              data: builderJson.draft,
              animationDuration,
              animationEasing: 'cubicInOut'
            }
          ]
        })
      }
    }
  }
</script>
