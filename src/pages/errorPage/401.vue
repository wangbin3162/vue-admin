<template>
  <div class="error-page">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" src="../../assets/images/error-page/401.png" alt="401">
        <img class="pic-404__child left" src="../../assets/images/error-page/404_cloud.png" alt="404">
        <img class="pic-404__child mid" src="../../assets/images/error-page/404_cloud.png" alt="404">
        <img class="pic-404__child right" src="../../assets/images/error-page/404_cloud.png" alt="404">
      </div>
      <div class="bullshit">
        <div class="bullshit__oops">401</div>
        <div class="bullshit__info">Copyright © 2019-present wang bin</div>
        <div class="bullshit__headline">对不起，您没有权限访问此页面</div>
        <div class="bullshit__info">您可以选择如下操作</div>
        <a href="#" @click.stop.prevent="back" class="bullshit__return-home">返回首页</a>
      </div>
    </div>
  </div>
</template>

<script>
  import './error.scss'

  export default {
    name: 'Page401',
    methods: {
      back () {
        this.$router.push({ path: '/home' })
      }
    }
  }
</script>
