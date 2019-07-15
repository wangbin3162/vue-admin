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
        loginData: {},
        loginTypeData: {},
        loginTotal: 0
      }
    },
    mounted() {
      this.getLoginData()
      this.getLoginTypeData()
      this.initChart()
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    },
    computed: {
      chartData: function() {
        const rm = {
          LoginSuccess: '登录成功',
          LoginFailure: '登陆失败',
          Logout: '登出',
          ModifyPwd: '修改密码'
        }
        return {
          total: this.loginData['total'],
          barData: Object.keys(this.loginData).filter(key => key !== 'total').reduce((obj, key) => {
            const arr = key.split('-')
            arr.shift()
            obj[arr.join('-')] = this.loginData[key]
            return obj
          }, {}),
          pieData: Object.keys(this.loginTypeData).reduce((obj, key) => {
            obj[rm[key]] = this.loginTypeData[key]
            return obj
          }, {})
        }
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
    methods: {
      getLoginData() {
        api.getLoginData().then(response => {
          if (response.status === 200) {
            this.loginData = response.data
          }
        })
      },
      getLoginTypeData() {
        api.getLoginTypeData().then(response => {
          if (response.status === 200) {
            this.loginTypeData = response.data
          }
        })
      },
      initChart() {
        this.chart = echarts.init(this.$el, 'macarons')
        this.setOptions(this.chartData)
      },
      setOptions({ total, barData, pieData } = {}) {
        const canvas = getWaterMark('Kingdee')
        this.chart.setOption({
          backgroundColor: {
            type: 'pattern',
            image: canvas,
            repeat: 'repeat'
          },
          tooltip: {},
          title: [
            {
              text: '登录统计',
              subtext: '总计 ' + total,
              x: 20
            },
            {
              text: '登录情况统计',
              x: '80%',
              textAlign: 'center'
            }
          ],
          grid: [
            {
              top: 60,
              width: '60%',
              bottom: 30,
              left: 10,
              containLabel: true
            },
            {
              top: '55%',
              width: '35%',
              bottom: 20,
              right: 20,
              containLabel: true
            }
          ],
          xAxis: {
            type: 'value',
            splitLine: {
              show: false
            },
            splitArea: {
              show: false
            }
          },
          yAxis: [{
            type: 'category',
            data: Object.keys(barData),
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          }],
          series: [
            {
              type: 'bar',
              stack: 'chart',
              z: 3,
              itemStyle: {
                normal: {
                  color: '#64bbff',
                  lineStyle: {
                    color: '#64bbff',
                    width: 2
                  }
                }
              },
              label: {
                normal: {
                  position: 'right',
                  show: true
                }
              },
              data: Object.keys(barData).map(function (key) {
                return barData[key]
              })
            },
            {
              type: 'pie',
              name: '用户',
              radius: [0, '55%'],
              center: ['80%', '55%'],
              data: Object.keys(pieData).map(function (key) {
                return {
                  name: key,
                  value: pieData[key]
                }
              })
            }
          ]
        })
      }
    }
  }
</script>
