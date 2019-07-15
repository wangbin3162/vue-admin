<template>
    <div class="tinymce-container editor-container" :class="{fullscreen:fullscreen}">
        <label>
            <textarea class="tinymce-textarea" :id="tinymceId"></textarea>
        </label>
    </div>
</template>

<script>
  import config from './config'

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
      height: {
        type: Number,
        default: 450
      }
    },
    data() {
      return {
        hasChange: false,
        hasInit: false,
        tinymceId: this.id || 'vue-tinymce-' + +new Date(),
        fullscreen: false
      }
    },
    watch: {
      value(val) {
        if (!this.hasChange && this.hasInit) {
          this.$nextTick(() =>
            window.tinymce.get(this.tinymceId).setContent(val || ''))
        }
      }
    },
    mounted() {
      this.initTinymce()
    },
    methods: {
      initTinymce() {
        const _this = this
        const baseUrl = this.$base
        let cfg = Object.assign({
          selector: `#${this.tinymceId}`,
          height: this.height,
          skin_url: baseUrl + '/static/tinymce/skins/lightgray',
          init_instance_callback: editor => {
            if (_this.value) {
              editor.setContent(_this.value)
            }
            _this.hasInit = true
            editor.on('NodeChange Change KeyUp SetContent', () => {
              this.hasChange = true
              this.$emit('input', editor.getContent())
            })
          },
          setup: function (editor) {
            editor.addButton('insertimg', {
              title: '插入图片',
              image: baseUrl + '/static/tinymce/img/img.png',
              onclick: function () {
                _this.$emit('insert-img')
              }
            })
            editor.addButton('insertmedia', {
              title: '插入视频',
              image: baseUrl + '/static/tinymce/img/media.png',
              onclick: function () {
                _this.$emit('insert-media')
              }
            })
            editor.addButton('atuoformatting', {
              title: '自动排版',
              image: baseUrl + '/static/tinymce/img/atuoformatting.png',
              onclick: function () {
                _this.$emit('auto-formatting')
              }
            })
          }
        }, config)
        window.tinymce.init(cfg)
      },
      destroyTinymce() {
        if (window.tinymce.get(this.tinymceId)) {
          window.tinymce.get(this.tinymceId).destroy()
        }
      },
      setContent(value) {
        window.tinymce.get(this.tinymceId).setContent(value)
      },
      insertContent(value) {
        window.tinymce.get(this.tinymceId).insertContent(value)
      },
      getContent() {
        window.tinymce.get(this.tinymceId).getContent()
      }
    },
    activated() {
      if (window.tinymce) {
        this.initTinymce()
      }
    },
    deactivated() {
      this.destroyTinymce()
    },
    destroyed() {
      this.destroyTinymce()
    }
  }
</script>
