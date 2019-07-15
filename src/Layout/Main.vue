<template>
    <div class="app-wrapper">
        <div class="sidebar-container" :class="{'hide':isCollapse}">
            <div class="logo">
                <img class="icon" src="../assets/images/logo.png" alt="logo"/>
                <transition name="fade-in">
                    <span class="title" v-show="!isCollapse">vue-admin</span>
                </transition>
            </div>
            <menu-bar :routes="routes" :isCollapse="isCollapse"></menu-bar>
        </div>
        <div class="main-container" :class="{'hide':isCollapse}">
            <!--nav-bar-->
            <nav-bar></nav-bar>
            <!--tags-->
            <tags-view></tags-view>
            <!--main-->
            <div class="app-main">
                <transition name="fade-transverse" mode="out-in">
                    <keep-alive :include="cachedViews">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import MenuBar from './MenuBar/MenuBar'
  import NavBar from './NavBar/NavBar'
  import TagsView from './TagsView/TagsView'

  export default {
    data() {
      return {
        user: {
          date: '1990-4-27',
          name: '王彬',
          address: '徐州市叶语雅园'
        }
      }
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'cachedViews'
      ]),
      routes() {
        return this.$router.options.routes
      },
      isCollapse() {
        return !this.sidebar.opened
      }
    },
    components: {
      MenuBar,
      NavBar,
      TagsView
    }
  }
</script>

<style lang="scss" scoped>
    .app-wrapper {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 0;
        .sidebar-container {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            width: 220px;
            height: 100%;
            z-index: 1001;
            transition: width .3s ease-in-out;
            background-color: #001529;
            .logo {
                position: relative;
                width: 100%;
                height: 64px;
                line-height: 64px;
                background: #002140;
                .icon {
                    position: absolute;
                    top: 50%;
                    left: 18px;
                    transform: translateY(-50%);
                    border: none;
                    width: 34px;
                    height: 34px;
                }
                .title {
                    display: inline-block;
                    vertical-align: top;
                    padding-left: 64px;
                    font-size: 18px;
                    font-weight: 700;
                    color: #ffffff;
                }
            }
            &.hide {
                width: 64px;
            }
        }
        .main-container {
            margin-left: 220px;
            height: 100%;
            display: flex;
            flex-direction: column;
            transition: margin-left .28s;
            background-color: #ffffff;
            color: #303133;
            &.hide {
                margin-left: 64px;
            }
            .app-main {
                flex: 1;
                background-color: #f0f2f5;
                overflow: auto;
            }
        }
    }
</style>
