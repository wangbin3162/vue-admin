<template>
  <div class="tags-view-container">
    <scroll-pane class='tags-view-wrapper' ref='scrollPane'>
      <router-link ref='tag' class="tags-view-item" :class="isActive(tag)?'active':''"
                   v-for="tag in Array.from(visitedViews)"
                   :to="tag.path" :key="tag.path" @contextmenu.prevent.native="openMenu(tag,$event)">
        {{tag.title}}
        <i v-if="tag.path!=='/home'" class='iconfont icon-ios-close' @click.prevent.stop='closeSelectedTag(tag)'></i>
      </router-link>
    </scroll-pane>
    <ul class='contextmenu' v-show="visible" :style="{left:left+'px',top:top+'px'}">
      <li @click="closeSelectedTag(selectedTag)">关闭</li>
      <li @click="closeOthersTags">关闭其他</li>
      <li @click="closeAllTags">关闭所有</li>
    </ul>
  </div>
</template>

<script>
  import ScrollPane from '../../components/ScrollPane'

  export default {
    data () {
      return {
        visible: false,
        top: 0,
        left: 0,
        selectedTag: {}
      }
    },
    computed: {
      visitedViews () {
        return this.$store.state.tagsView.visitedViews
      }
    },
    watch: {
      $route () {
        this.addViewTags()
        this.moveToCurrentTag()
      },
      visible (value) {
        if (value) {
          document.body.addEventListener('click', this.closeMenu)
        } else {
          document.body.removeEventListener('click', this.closeMenu)
        }
      }
    },
    mounted () {
      this.addViewTags()
    },
    methods: {
      generateRoute () {
        if (this.$route.name) {
          return this.$route
        }
        return false
      },
      isActive (route) {
        return route.path === this.$route.path || route.name === this.$route.name
      },
      addViewTags () {
        const route = this.generateRoute()
        if (!route) {
          return false
        }
        this.$store.dispatch('addVisitedViews', route)
      },
      moveToCurrentTag () {
        const tags = this.$refs.tag
        this.$nextTick(() => {
          for (const tag of tags) {
            if (tag.to === this.$route.path) {
              this.$refs.scrollPane.moveToTarget(tag.$el)
              break
            }
          }
        })
      },
      closeSelectedTag (view) {
        this.$store.dispatch('delVisitedViews', view).then((views) => {
          if (this.isActive(view)) {
            const latestView = views.slice(-1)[0]
            if (latestView) {
              this.$router.push(latestView.path)
            } else {
              this.$router.push('/')
            }
          }
        })
      },
      closeOthersTags () {
        this.$router.push(this.selectedTag.path)
        this.$store.dispatch('delOthersViews', this.selectedTag).then(() => {
          this.moveToCurrentTag()
        })
      },
      closeAllTags () {
        this.$store.dispatch('delAllViews')
        this.$router.push('/')
      },
      openMenu (tag, e) {
        this.visible = true
        this.selectedTag = tag
        this.left = e.clientX
        this.top = e.clientY
      },
      closeMenu () {
        this.visible = false
      }
    },
    components: {
      ScrollPane
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .tags-view-container {
    .tags-view-wrapper {
      background: #fff;
      height: 38px;
      border-top: 1px solid #f0f0f0;
      border-bottom: 1px solid #e3e3e3;
      box-shadow: inset 0 0 15px hsla(0, 0, 39.2%, .1);
      .tags-view-item {
        display: inline-block;
        position: relative;
        height: 32px;
        line-height: 32px;
        border: 1px solid #e8eaec;
        border-radius: 3px;
        color: #515a6e;
        background: #fff;
        padding: 0 12px;
        font-size: 12px;
        margin: 2px 4px 2px 0;
        &::before {
          content: '';
          background: #e1e1e1;
          display: inline-block;
          position: relative;
          top: 1px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin-right: 8px;
        }
        &:first-of-type {
          margin-left: 15px;
        }
        &.active {
          &::before {
            background: #2d8cf0;
          }
        }
        .iconfont {
          width: 16px;
          height: 16px;
          line-height: 16px;
          vertical-align: -2px;
          border-radius: 50%;
          margin-left: 5px;
          text-align: center;
          font-size: 16px;
          color: #999;
          transition: all .3s cubic-bezier(.645, .045, .355, 1);
          &:before {
            display: inline-block;
          }
          &:hover {
            background-color: #e1e1e1;
            color: #ffffff;
          }
        }
      }
    }
    .contextmenu {
      margin: 0;
      background: #fff;
      z-index: 9999;
      position: absolute;
      left: 0;
      top: 0;
      list-style-type: none;
      padding: 5px 0;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 400;
      color: #333;
      box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
      li {
        margin: 0;
        padding: 7px 16px;
        cursor: pointer;
        &:hover {
          background: #eee;
        }
      }
    }
  }
</style>
