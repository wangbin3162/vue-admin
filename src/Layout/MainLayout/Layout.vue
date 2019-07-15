<template>
  <div class="layout-wrapper">
    <div class="left" v-if="haveTree" :class="{'hide':!leftOpened}">
      <transition name="slide-fade">
        <div class="content" v-show="leftOpened">
          <title-bar :label="leftLabel" icon="icon-md-list"></title-bar>
          <div class="tree">
            <b-scrollbar style="height: 100%;">
              <!--左侧插槽可以自定义-->
              <slot name="tree">
                树插槽
              </slot>
            </b-scrollbar>
          </div>
        </div>
      </transition>
      <i class="refresh iconfont icon-ios-refresh" @click="refreshTree"></i>
      <span class="close" :class="leftOpenStyle" @click="leftOpened=!leftOpened"></span>
    </div>
    <div class="right">
      <div class="list-box">
        <!--筛选条件-->
        <title-bar label="查询条件" icon="icon-ios-search"></title-bar>
        <slot name="filter">查询条件插槽</slot>
        <!--下方列表-->
        <title-bar :label="contentLabel" icon="icon-ios-list"></title-bar>
        <slot name="ctrl">
          <div style="padding-top:15px;"></div>
        </slot>
        <div class="content">
          <slot>内容插槽</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TitleBar from '../../components/TitleBar'

  export default {
    props: {
      haveTree: {
        type: Boolean,
        default: false
      },
      leftLabel: {
        type: String,
        default: '栏目信息树'
      },
      contentLabel: {
        type: String,
        default: '数据列表'
      }
    },
    data() {
      return {
        leftOpened: true
      }
    },
    methods: {
      refreshTree() {
        this.$emit('refresh-tree')
      }
    },
    computed: {
      /**
       * 左侧开关样式
       */
      leftOpenStyle() {
        return this.leftOpened ? 'el-icon-d-arrow-left' : 'el-icon-d-arrow-right'
      }
    },
    components: {
      TitleBar
    }
  }
</script>
