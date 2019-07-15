<template>
  <div class="error-page">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" src="../../assets/images/error-page/403.png" alt="403">
        <img class="pic-404__child left" src="../../assets/images/error-page/404_cloud.png" alt="404">
        <img class="pic-404__child mid" src="../../assets/images/error-page/404_cloud.png" alt="404">
        <img class="pic-404__child right" src="../../assets/images/error-page/404_cloud.png" alt="404">
      </div>
      <div class="bullshit">
        <div class="bullshit__oops">403</div>
        <div class="bullshit__info">
          Copyright © 2019-present wang bin
        </div>
        <div class="bullshit__headline">抱歉，登录超时啦！</div>
      </div>
    </div>
  </div>
</template>

<script>
  import './error.scss'

  export default {
    name: 'Page403',
    methods: {
      back () {
        this.$router.push({ path: '/home' })
      }
    }
  }
</script>
