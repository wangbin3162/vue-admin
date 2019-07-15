<template>
  <!--filter-item组件，插入filter-container组件内部 默认宽度1/4可手动调节-->
  <!--如不需要第二行则只需将以下标签内容插入到最后一个条件处<filter-item @SearchClick="handleFilter"></filter-item>-->
  <div class="filter-item" :style="{width:defaultWidth}">
    <span class="label" v-if="showLabel" :style="{width:labelWidth}">{{ title }}</span>
    <slot>
      <!--默认插槽，用于插入查询条件，如不插入则生成查询按钮，生成查询按钮需要传入是否需要显示展开按钮并传入状态-->
      <div class="search-btn">
        <b-button plain size="mini" icon="ios-search" type="primary" @click="handleFilter" v-waves>
          查&nbsp;询
        </b-button>
        <b-button  plain size="mini" icon="ios-repeat" type="info" @click="handleReset" v-waves>
          重&nbsp;置
        </b-button>
        <template v-if="showToggle">
        <span class="open" @click.stop="filterToggle">
          {{ isOpened?'收起':'展开' }}
          <b-icon :name="openBtnStyle"></b-icon>
        </span>
        </template>
      </div>
    </slot>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: null
      },
      showToggle: {
        type: Boolean,
        default: false
      },
      isOpened: {
        type: Boolean,
        default: false
      },
      defaultWidth: {
        type: String,
        default: '25%'
      },
      labelWidth: {
        type: String,
        default: '100px'
      }
    },
    methods: {
      handleFilter () {
        this.$emit('search-click')
      },
      handleReset () {
        this.$emit('reset-query')
      },
      filterToggle () {
        this.$emit('filter-toggle')
      }
    },
    computed: {
      openBtnStyle () {
        return this.isOpened ? 'ios-arrow-up' : 'ios-arrow-down'
      },
      showLabel () {
        return this.title && this.title.length > 0
      }
    }
  }
</script>
