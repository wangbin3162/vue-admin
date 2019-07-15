<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
  import echarts from 'echarts'
  import resize from '../../../components/Charts/mixins/resize'
  import { getWaterMark } from '../../../common/util/utils'
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
        default: '380px'
      }
    },
    data() {
      return {
        chart: null,
        siteData: []
      }
    },
    computed: {
      chartData: function () {
        const obj = {}
        obj['xAxisData'] = this.siteData.reduce(function (xAxisData, ele) {
          const arr = ele.bizDate.split('-')
          arr.shift()
          xAxisData.push(arr.join('-'))
          return xAxisData
        }, [])
        obj['data'] = this.siteData.reduce(function (publish, ele) {
          publish.push(ele.bizCnt)
          return publish
        }, [])
        return obj
      }
    },
    watch: {
      chartData: {
        deep: true,
        handler(val) {
          this.setOptions(val)
        }
      }
    },
    mounted() {
      this.getSiteRequestData()
      this.initChart()
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    },
    methods: {
      getSiteRequestData() {
        getSiteRequestData().then(response => {
          if (response.status === 200) {
            this.siteData = response.data
          }
        })
      },
      initChart() {
        this.chart = echarts.init(this.$el, 'macarons')
        this.setOptions(this.chartData)
      },
      setOptions({ xAxisData, data } = {}) {
        const canvas = getWaterMark('Kingdee')
        this.chart.setOption({
          backgroundColor: {
            type: 'pattern',
            image: canvas,
            repeat: 'repeat'
          },
          title: {
            text: '网站访问统计',
            x: '20',
            top: '10',
            textStyle: {
              color: '#3b9eff',
              fontSize: '14'
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '5%',
            right: '5%'
          },
          xAxis: {
            data: xAxisData,
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          },
          yAxis: {
            axisLine: {
              lineStyle: {
                color: '#4a657a'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#4a657a'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#08263f'
              }
            },
            axisTick: {
              show: false
            }
          },
          visualMap: {
            show: false,
            min: 0,
            max: 30,
            dimension: 0,
            inRange: {
              color: ['#a1d8ff', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055']
            }
          },
          series: [
            {
              name: '访问数量',
              type: 'bar',
              data,
              itemStyle: {
                normal: {
                  barBorderRadius: 5
                }
              }
            }
          ],
          animationEasing: 'elasticOut',
          animationEasingUpdate: 'elasticOut',
          animationDelay(idx) {
            return idx * 30
          },
          animationDelayUpdate(idx) {
            return idx * 30
          }
        })
      }
    }
  }
</script>
