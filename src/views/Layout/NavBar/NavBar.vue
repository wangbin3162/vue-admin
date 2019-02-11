<template>
  <div class="nav-bar">
    <!--toggle-btn-->
    <div class="hamburger-container">
      <i class="iconfont hamburger" :class="iconClass"
         @click="toggleSideBar"></i>
    </div>
    <!--面包屑导航，封装附带路由点击功能-->
    <breadcrumb/>
    <div class="right-menu">
      <div class="wellcome">welcome , wang bin</div>
      <div class="avatar">
        <el-dropdown size="medium" @command="handleCommand">
          <span class="el-dropdown-link">
             <img src="../../../assets/images/avtar.png" alt="avatar"/>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item :command="{type:'home'}">首页</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Breadcrumb from './components/Breadcrumb'

  export default {
    computed: {
      ...mapGetters([
        'sidebar'
      ]),
      iconClass () {
        return this.sidebar.opened ? 'icon-outdent' : 'icon-indent'
      },
      title () {
        return `welcome | wang bin`
      }
    },
    methods: {
      toggleSideBar () {
        this.$store.dispatch('ToggleSideBar')
      },
      handleCommand (command) {
        if (command.type === 'home') {
          this.$router.push({ path: '/home' })
        }
      }
    },
    components: {
      Breadcrumb
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .nav-bar {
    position: relative;
    height: 50px;

    .hamburger-container {
      position: absolute;
      left: 10px;
      top: 12px;
      width: 24px;
      height: 24px;

      .hamburger {
        display: inline-block;
        cursor: pointer;
        width: 100%;
        height: 100%;
        font-size: 24px;
        transition: .38s;

        &:hover {
          color: #409EFF;
        }
      }
    }

    .right-menu {
      float: right;
      height: 100%;

      .wellcome {
        display: inline-block;
        vertical-align: top;
        color: #4dd9d5;
        font-size: 16px;
        line-height: 50px;
        margin-right: 20px;
      }

      .avatar {
        display: inline-block;
        vertical-align: top;
        height: 50px;
        margin: 5px 15px 0 0;
        line-height: 50px;

        .el-dropdown {
          height: 40px;
        }

        img {
          border-radius: 10px;
          border: none;
          width: 40px;
          height: 40px;
        }
      }
    }
  }
</style>
