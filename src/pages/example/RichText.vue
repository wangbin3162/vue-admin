<template>
  <div class="ritch-text">
    <tinymce :height="350" v-model="content" id='tinymce'></tinymce>
    <div class="editor-content" v-html="content"></div>
  </div>
</template>

<script>
  import Tinymce from '../../components/Tinymce/index'

  export default {
    name: 'RichText',
    components: {Tinymce},
    data () {
      return {
        content:
          `<h1 style="text-align: center;">我是富文本标题</h1>`
      }
    }
  }
</script>

<style scoped lang="scss">
  .ritch-text {
    padding: 20px;
  }
  .editor-content {
    margin-top: 20px;
  }
</style>
