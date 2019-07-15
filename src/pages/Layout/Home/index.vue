<template>
  <div class="dashboard-container">
    <b-scrollbar style="height: 100%;">
      <div class="dashboard-header">
        <panel-group></panel-group>
      </div>
      <div class="dashboard-charts">
        <el-row style="background:#fff;margin-bottom:20px;">
          <line-chart :chart-data="lineChartData"/>
        </el-row>
      </div>
      <div class="dashboard-charts">
        <el-row :gutter="25">
          <el-col :xs="24" :sm="24" :lg="8">
            <div class="chart-wrapper">
              <raddar-chart/>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="8">
            <div class="chart-wrapper">
              <pie-chart/>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="8">
            <div class="chart-wrapper">
              <bar-chart/>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="dashboard-footer">
        <p> MIT Licensed | Copyright <i class="iconfont icon-copyright"></i> 2019-present wang bin</p>
      </div>
      <b-back-top></b-back-top>
    </b-scrollbar>
  </div>
</template>

<script>
  import PanelGroup from './components/PanelGroup'
  import LineChart from '../../../components/Charts/LineChart'
  import BarChart from '../../../components/Charts/BarChart'
  import RaddarChart from '../../../components/Charts/RaddarChart'
  import PieChart from '../../../components/Charts/PieChart'

  const lineChartData = {
    newVisitis: {
      expectedData: [100, 120, 161, 134, 105, 160, 165],
      actualData: [120, 82, 91, 154, 162, 140, 145]
    },
    messages: {
      expectedData: [200, 192, 120, 144, 160, 130, 140],
      actualData: [180, 160, 151, 106, 145, 150, 130]
    },
    purchases: {
      expectedData: [80, 100, 121, 104, 105, 90, 100],
      actualData: [120, 90, 100, 138, 142, 130, 130]
    },
    shoppings: {
      expectedData: [130, 140, 141, 142, 145, 150, 160],
      actualData: [120, 82, 91, 154, 162, 140, 130]
    }
  }
  export default {
    name: 'Home',
    components: {
      PanelGroup,
      LineChart,
      BarChart,
      RaddarChart,
      PieChart
    },
    data() {
      return {
        lineChartData: lineChartData.newVisitis
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .dashboard-container {
    position: relative;
    width: 100%;
    height: 100%;
    background: #f0f2f5;
    .dashboard-header {
      padding: 25px;
    }
    .dashboard-charts {
      padding: 0 25px;
      background-color: rgb(240, 242, 245);
      .chart-wrapper {
        position: relative;
        width: 100%;
        background: #fff;
        padding: 16px;
        margin-bottom: 25px;
      }
    }
    .dashboard-footer {
      width: 100%;
      text-align: center;
      font-size: 14px;
      padding: 20px;
      p {
        color: #868686
      }
    }
  }
</style>
