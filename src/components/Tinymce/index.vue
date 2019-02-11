<template>
  <div class="tinymce-container editor-container" :class="{fullscreen:fullscreen}">
    <textarea class="tinymce-textarea" :id="tinymceId"></textarea>
  </div>
</template>

<script>
  const toolbar = ['formatselect | fontselect | fontsizeselect | bold italic underline strikethrough forecolor backcolor | link quicklink| numlist bullist | alignleft aligncenter alignright alignjustify | outdent indent | undo redo removeformat code']
  const plugins = 'image advlist code media link colorpicker paste table textcolor wordcount contextmenu'
  const formats = '微软雅黑=微软雅黑;宋体=宋体;黑体=黑体;仿宋=仿宋;楷体=楷体;隶书=隶书;幼圆=幼圆;Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats'
  let baseUrl = process.env.NODE_ENV !== 'production' ? '' : '/vue-admin-site'
  export default {
    name: 'tinymce',
    props: {
      id: {
        type: String
      },
      value: {
        type: String,
        default: ''
      },
      menubar: {
        default: '' // file edit insert view format table
      },
      height: {
        type: Number,
        default: 450
      }
    },
    data () {
      return {
        hasChange: false,
        hasInit: false,
        tinymceId: this.id || 'vue-tinymce-' + +new Date(),
        fullscreen: false
      }
    },
    watch: {
      value (val) {
        if (!this.hasChange && this.hasInit) {
          this.$nextTick(() =>
            window.tinymce.get(this.tinymceId).setContent(val || ''))
        }
      }
    },
    mounted () {
      this.initTinymce()
    },
    methods: {
      initTinymce () {
        const _this = this
        window.tinymce.init({
          selector: `#${this.tinymceId}`,
          menubar: this.menubar.length > 0 ? this.menubar : false,
          toolbar: toolbar,
          plugins: plugins,
          height: this.height,
          code_dialog_height: 350,
          code_dialog_width: 800,
          language: 'zh_CN',
          skin: 'lightgray',
          skin_url: baseUrl + '/static/tinymce/skins/lightgray',
          font_formats: formats,
          init_instance_callback: editor => {
            if (_this.value) {
              editor.setContent(_this.value)
            }
            _this.hasInit = true
            editor.on('NodeChange Change KeyUp SetContent', () => {
              this.hasChange = true
              this.$emit('input', editor.getContent())
            })
          }
        })
      },
      destroyTinymce () {
        if (window.tinymce.get(this.tinymceId)) {
          window.tinymce.get(this.tinymceId).destroy()
        }
      },
      setContent (value) {
        window.tinymce.get(this.tinymceId).setContent(value)
      },
      insertContent (value) {
        window.tinymce.get(this.tinymceId).insertContent(value)
      },
      getContent () {
        window.tinymce.get(this.tinymceId).getContent()
      }
    },
    activated () {
      this.initTinymce()
    },
    deactivated () {
      this.destroyTinymce()
    },
    destroyed () {
      this.destroyTinymce()
    }
  }
</script>
