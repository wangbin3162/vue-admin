<template>
  <b-scrollbar style="height: 100%;">
    <el-menu
        mode="vertical"
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        :unique-opened="unique"
        background-color="#001529"
        text-color="#bfcbd9">
      <template v-for="item in routes">
        <template v-if="!item.hidden&&item.children">
          <!--&&item.children[0].name==='dashboard' 限定首页-->
          <router-link v-if="item.children.length===1 && item.children[0] && item.children[0].name==='home'"
                       :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
            <el-menu-item :index="item.path+'/'+item.children[0].path">
              <i class="iconfont"
                 :class="item.children[0].meta.icon"
                 v-if="item.children[0].meta&&item.children[0].meta.icon"></i>
              <span v-if="item.children[0].meta&&item.children[0].meta.title"
                    slot="title">{{item.children[0].meta.title}}</span>
            </el-menu-item>
          </router-link>
          <el-submenu v-else :index="item.name||item.path" :key="item.name">
            <template slot="title">
              <!--前方图标-->
              <i class="iconfont"
                 :class="item.meta.icon"
                 v-if="item.meta&&item.meta.icon"></i>
              <span v-if="item.meta&&item.meta.title">{{item.meta.title}}</span>
            </template>
            <template v-for="child in item.children">
              <router-link v-if="!child.children" :to="item.path+'/'+child.path" :key="child.name">
                <el-menu-item :index="item.path+'/'+child.path">
                  <!--前方图标-->
                  <i class="iconfont" :class="child.meta.icon"
                     v-if="child.meta&&child.meta.icon"></i>
                  <span v-if="child.meta&&child.meta.title">{{child.meta.title}}</span>
                </el-menu-item>
              </router-link>
            </template>
          </el-submenu>
        </template>
      </template>
    </el-menu>
  </b-scrollbar>
</template>

<script>

  export default {
    props: {
      isCollapse: {
        type: Boolean,
        default: false
      },
      routes: {
        type: Array,
        default: function () {
          return []
        }
      },
      unique: {
        type: Boolean,
        default: true
      }

    }
  }
</script>
