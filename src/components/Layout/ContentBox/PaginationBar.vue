<template>
  <div class="pagination-container">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout="sizes, prev, pager, next"
      background
      :pager-count="5"
      :current-page="currentPage"
      :page-sizes="[10,20,30,50]"
      :page-size="pageSize"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    props: {
      currentPage: {
        type: Number,
        default: 1
      },
      total: {
        type: Number,
        default: 110
      },
      pageSize: {
        type: Number,
        default: 10
      }
    },
    methods: {
      handleSizeChange (val) {
        this.$emit('size-change', val)
      },
      handleCurrentChange (val) {
        this.$emit('current-change', val)
      }
    }
  }
</script>
