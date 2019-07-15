<template>
  <div class="components-container">
    <split-pane v-on:resize="resize" split="vertical">
      <template slot="paneL">
        <div class="left-container"></div>
      </template>
      <template slot="paneR">
        <split-pane split="horizontal">
          <template slot="paneL">
            <div class="top-container"></div>
          </template>
          <template slot="paneR">
            <div class="bottom-container"></div>
          </template>
        </split-pane>
      </template>
    </split-pane>
  </div>
</template>

<script>
  import SplitPane from '../../components/SplitPane/index'

  export default {
    name: 'SplitPanel',
    components: { SplitPane },
    methods: {
      resize () {
        console.log('resize')
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .components-container {
    position: relative;
    height: 100%;
  }

  .left-container {
    background-color: #F38181;
    height: 100%;
  }

  .right-container {
    background-color: #FCE38A;
    height: 200px;
  }

  .top-container {
    background-color: #FCE38A;
    width: 100%;
    height: 100%;
  }

  .bottom-container {
    width: 100%;
    background-color: #95E1D3;
    height: 100%;
  }
</style>
