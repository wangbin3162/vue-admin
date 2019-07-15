<template>
  <!--查询条件容器插入filter-item组件-->
  <div class="filter-container" :style="{height:isOpened?'82px':'42px'}">
    <slot>
    </slot>
  </div>
</template>

<script>
  export default {
    props: {
      isOpened: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
