<template>
  <div class="other-box">
    <divider>居中标题</divider>
    <divider orientation="left">居左标题</divider>
    <divider orientation="right">居右标题</divider>
    <v-label blod>label文字</v-label>
    <title-bar label="标题文字" icon="icon-funnelplot"></title-bar>
  </div>
</template>

<script>
  import Divider from '@/components/Divider/Divider.vue'
  import VLabel from '@/components/Label/Label.vue'
  import TitleBar from '@/components/TitleBar/index.vue'

  export default {
    name: 'Other',
    components: {
      Divider, VLabel, TitleBar
    }
  }
</script>

<style scoped lang="scss">
  .other-box {
    padding: 20px;
    background-color: #fff;
  }
</style>
