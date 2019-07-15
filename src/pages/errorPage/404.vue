<template>
  <div class="error-page">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" src="../../assets/images/error-page/404.png" alt="404">
        <img class="pic-404__child left" src="../../assets/images/error-page/404_cloud.png" alt="404">
        <img class="pic-404__child mid" src="../../assets/images/error-page/404_cloud.png" alt="404">
        <img class="pic-404__child right" src="../../assets/images/error-page/404_cloud.png" alt="404">
      </div>
      <div class="bullshit">
        <div class="bullshit__oops">404</div>
        <div class="bullshit__info">Copyright © 2019-present wang bin</div>
        <div class="bullshit__headline">页面找不到了~~~</div>
        <div class="bullshit__info">请检查您输入的链接是否正确~~~</div>
        <a href="#" @click.stop.prevent="back" class="bullshit__return-home">返回首页</a>
      </div>
    </div>
  </div>
</template>

<script>
  import './error.scss'

  export default {
    name: 'Page404',
    methods: {
      back() {
        this.$router.push({ path: '/home' })
      }
    }
  }
</script>
