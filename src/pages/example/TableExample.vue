<template>
  <layout have-tree @refresh-tree="handleRefreshTree" content-label="商品列表">
    <tree-bar slot="tree" ref="tree" :tree-data="treeData" :default-props="defaultProps"
              @current-change="handTreeCurrentChange"></tree-bar>
    <!--查询条件-->
    <filter-bar slot="filter" :is-opened="filterOpened">
      <filter-item title="商品名称">
        <b-input v-model.trim="listQuery.name" size="mini" placeholder="请输入" clearable></b-input>
      </filter-item>
      <filter-item title="店铺名称">
        <b-input v-model.trim="listQuery.shop" size="mini" placeholder="请输入" clearable></b-input>
      </filter-item>
      <filter-item title="商家地址">
        <b-input v-model.trim="listQuery.address" size="mini" placeholder="请输入" clearable></b-input>
      </filter-item>
      <!--添加查询按钮位置-->
      <filter-item :show-toggle="true" :is-opened="filterOpened" @reset-query="resetQuery"
                   @search-click="handleFilter" @filter-toggle="filterOpened=!filterOpened"></filter-item>
      <filter-item title="商品种类">
        <b-input v-model.trim="listQuery.category" size="mini" placeholder="请输入" clearable></b-input>
      </filter-item>
      <filter-item title="商品描述">
        <b-input v-model.trim="listQuery.desc" size="mini" placeholder="请输入" clearable></b-input>
      </filter-item>
    </filter-bar>
    <!--ctrl插入-->
    <button-bar slot="ctrl" :optCode="{add:true,modify:true,remove:true}"
                @on-create="handleCreate" @on-edit="handleEdit"
                @on-check="handleCheck" @on-delete="handleDelete"></button-bar>
    <!--列表table-->
    <table-box @resize-height="_resizeTableHeight">
      <el-table size="mini" highlight-current-row border
                v-loading="listLoading" :data="list" :max-height="tabMaxSize"
                @row-dblclick="handleRowDoubleClick" @current-change="handleCurrentRowChange">
        <el-table-column label="编号" type="index" :index="_indexMethod" align="center"></el-table-column>
        <el-table-column label="商品名称" min-width="120" align="center" prop="name"></el-table-column>
        <el-table-column label="店铺名称" min-width="120" align="center" prop="shop"></el-table-column>
        <el-table-column label="商家地址" min-width="200" align="center" prop="address"></el-table-column>
        <el-table-column label="商品种类" min-width="80" align="center">
          <template slot-scope="scope">
            <b-tag :type="scope.row.category==='零食'?'primary':'warning'">{{scope.row.category}}</b-tag>
          </template>
        </el-table-column>
        <el-table-column label="商品描述" min-width="220" align="center" prop="desc"
                         show-overflow-tooltip></el-table-column>
        <!--操作-->
        <el-table-column fixed="right" label="操作" width="100" align="center">
          <template slot-scope="scope">
            <div class="operation">
              <b-button size="mini" plain v-waves @click="handleUpdate(scope.row)">编 辑</b-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </table-box>
    <pagination-bar :current-page="listQuery.page" :total="total" :page-size="listQuery.size"
                    @size-change="handleSizeChange" @current-change="handleCurrentChange">
    </pagination-bar>
    <!--编辑页-->
    <drawer v-model="dialogFormVisible" :status="dialogStatus" :btn-status="btnStatus"
            @on-create="createData" @on-update="updateData" mask-close>
      <!--添加form表单-->
      <drawer-box v-if="dialogStatus!=='check'" type="edit">
        <!--嵌套的表格-->
        <el-form :model="goods" ref="dataForm" label-width="120px" size="small"
                 :rules="rules">
          <el-form-item label="商品名称" prop="name">
            <el-input v-model.trim="goods.name" clearable placeholder="请输入商品名称"></el-input>
          </el-form-item>
          <el-form-item label="店铺名称" prop="shop">
            <el-input v-model.trim="goods.shop" learable placeholder="请输入店铺名称"></el-input>
          </el-form-item>
          <el-form-item label="商家地址" prop="address">
            <el-input v-model.trim="goods.address" learable placeholder="请输入商家地址"></el-input>
          </el-form-item>
          <el-form-item label="商品种类" prop="category">
            <el-select v-model="goods.category" placeholder="请选择商品种类">
              <el-option label="零食" value="零食"></el-option>
              <el-option label="日用品" value="日用品"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品描述" prop="desc">
            <el-input type="textarea" v-model="goods.desc"></el-input>
          </el-form-item>
        </el-form>
      </drawer-box>
      <!--查看显示列表-->
      <drawer-box v-else>
        <div slot="display">
          <el-row>
            <el-col :span="24">
              <v-label blod>商品名称</v-label>
              <v-label>{{ goods.name }}</v-label>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <v-label blod>店铺名称</v-label>
              <v-label>{{ goods.shop }}</v-label>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <v-label blod>商品类型</v-label>
              <v-label>{{ goods.category }}</v-label>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <v-label blod>商品类型</v-label>
              <v-label>{{ goods.address }}</v-label>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <v-label blod>商品描述</v-label>
              <v-label>{{ goods.desc }}</v-label>
            </el-col>
          </el-row>
        </div>
      </drawer-box>
    </drawer>
  </layout>
</template>

<script>
  import { commonMixin } from '../../common/js/mixin.js'
  import { initTreeData, getListData } from '../../api/tableExample'

  export default {
    name: 'TableExample',
    mixins: [commonMixin],
    data () {
      return {
        treeData: null,
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        listQuery: {
          name: '',
          shop: '',
          address: '',
          category: '',
          desc: ''
        },
        goods: null,
        rules: {
          name: [
            {required: true, message: '请输入商品名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          desc: [
            {required: true, message: '请填写商品描述', trigger: 'blur'}
          ]
        }
      }
    },
    created () {
      this.initTree()
      this.searchList()
      this.resetGoods()
    },
    methods: {
      /**
       * 事件响应
       */
      // tree:刷新树方法
      handleRefreshTree () {
        this.$message('刷新左侧树')
        if (this.currentTreeNode) {
          this.currentTreeNode = null
          this.$refs.tree.setCurrentNode({})
        }
        this.initTree()
      },
      // tree:树节点点击事件
      handTreeCurrentChange (data) {
        this.$message({type: 'info', content: '点击了' + data.label})
      },
      // filter-Bar:重置查询条件
      resetQuery () {
        this.listQuery = {
          page: 1,
          size: 10,
          param1: '',
          param2: '',
          param3: '',
          param4: '',
          param5: ''
        }
      },
      // button-bar:创建按钮事件
      handleCreate () {
        this.resetGoods()
        this._openEditPage('create')
      },
      // button-bar:删除事件
      handleDelete () {
        this._choseOne().then(() => {
          this.$confirm(
            {
              title: '标题',
              content: '此操作将永久删除此条数据, 是否继续?',
              onOk: () => {
                this.handleFilter()
                this.initTree()
                this.$message({type: 'success', content: '删除成功'})
              }
            })
        })
      },
      // button-bar:编辑按钮事件
      handleEdit () {
        this._choseOne().then(() => {
          this.handleUpdate(this.currentRow)
        })
      },
      // button-bar:查看按钮事件
      handleCheck () {
        this._choseOne().then(() => {
          this.goods = Object.assign({}, this.currentRow)
          this._openEditPage('check')
        })
      },
      // table:编辑事件
      handleUpdate (row) {
        this.goods = Object.assign({}, row)
        this._openEditPage('update')
      },
      // table:表格行双击查看
      handleRowDoubleClick (row) {
        this.goods = Object.assign({}, row)
        this._openEditPage('check')
      },
      /**
       * 数据接口
       */
      // tree:初始化树结构
      initTree () {
        this.treeData = []
        // 请求响应返回树结构
        initTreeData().then(response => {
          this.treeData = response.data.data
        })
      },
      // dada:获取列表数据(根据查询条件对象进行查询)
      searchList () {
        this._setListData()
        getListData(this.listQuery).then(response => {
          this._setListData({
            list: response.data.rows,
            total: response.data.rows.length
          })
        })
      },
      // 重置栏目对象
      resetGoods () {
        this.goods = {
          id: '',
          address: '',
          category: '',
          desc: '',
          name: '',
          shop: ''
        }
      },
      // edit-btn:创建栏目
      createData () {
        this._validateForm('dataForm').then(() => {
          this._setBtnLoading()
          setTimeout(() => {
            this._setBtnLoading(false)
            this.handleFilter()
            this._closeEditPage({title: '成功', message: '创建成功', type: 'success'})
          }, 50)
        })
      },
      // edit-btn:更新站点数据edit窗口校验
      updateData () {
        this._validateForm('dataForm').then(() => {
          this._setBtnLoading()
          setTimeout(() => {
            this._setBtnLoading(false)
            this.handleFilter()
            this._closeEditPage({title: '成功', message: '更新成功', type: 'success'})
          }, 50)
        })
      }
    },
    computed: {
      editTitle () {
        const map = {
          check: '查看',
          update: '编辑',
          create: '新增'
        }
        return map[this.dialogStatus] || '标题'
      }
    }
  }
</script>
