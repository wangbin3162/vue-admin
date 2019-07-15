<template>
  <el-row :gutter="25">
    <el-col :xs="12" :sm="12" :lg="6">
      <b-card :bordered="false" class="card-panel">
        <div class="top">注册用户数</div>
        <div class="center">
          <count-to :start-val="0" :end-val="1212" :duration="2600" class="count-to"/>
          <div class="charts">
            <simple-bar height="100%"></simple-bar>
          </div>
        </div>
        <div class="bottom"><span>日注册数</span><span>343</span></div>
      </b-card>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6">
      <b-card :bordered="false" class="card-panel">
        <div class="top">发布文章数</div>
        <div class="center">
          <count-to :start-val="0" :end-val="10200" :duration="3600" class="count-to"/>
          <div class="charts">
            <public-bar height="100%"></public-bar>
          </div>
        </div>
        <div class="bottom"><span>日发布文章数</span><span>12</span></div>
      </b-card>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6">
      <b-card :bordered="false" class="card-panel">
        <div class="top">用户反馈数</div>
        <div class="center">
          <count-to :start-val="0" :end-val="12" :duration="3600" class="count-to"/>
          <div class="charts">
            <back-bar height="100%"></back-bar>
          </div>
        </div>
        <div class="bottom"><span>日户反馈数</span><span>5</span></div>
      </b-card>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6">
      <b-card :bordered="false" class="card-panel">
        <div class="top">网站访问量</div>
        <div class="center">
          <count-to :start-val="0" :end-val="121214" :duration="3600" class="count-to"/>
          <div class="charts">
            <request-bar height="100%"></request-bar>
          </div>
        </div>
        <div class="bottom"><span>日访问量</span><span>3242</span></div>
      </b-card>
    </el-col>
  </el-row>
</template>

<script>
  import CountTo from 'vue-count-to'
  import SimpleBar from './SimpleBar'
  import PublicBar from './PublicBar'
  import BackBar from './BackBar'
  import RequestBar from './RequestBar'

  export default {
    data () {
      return {
        userData: []
      }
    },
    components: {
      CountTo, SimpleBar, PublicBar, BackBar, RequestBar
    }
  }
</script>

<style scoped lang="scss">
  .card-panel {
    .top {
      color: rgba(0, 0, 0, .45);
      font-size: 14px;
      line-height: 22px;
      height: 22px;
    }
    .center {
      height: 100px;
      .count-to {
        color: rgba(0, 0, 0, .85);
        margin-top: 4px;
        margin-bottom: 0;
        font-size: 30px;
        line-height: 38px;
        height: 38px;
      }
      .charts {
        height: 70px;
      }
    }
    .bottom {
      border-top: 1px solid #e8e8e8;
      padding-top: 9px;
      margin-top: 8px;
      font-size: 14px;
      line-height: 22px;
      span {
        display: inline-block;
        margin-right: 8px;
      }
    }
  }
</style>
