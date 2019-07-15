import Layout from '../../Layout/MainLayout/Layout.vue'
import TreeBar from '../../Layout/MainLayout/TreeBar/TreeBar'
import TitleBar from '../../components/TitleBar'
import ButtonBar from '../../components/ButtonBar'
import FilterBar from '../../Layout/MainLayout/FilterBar/FilterBar'
import FilterItem from '../../Layout/MainLayout/FilterBar/FilterItem'
import TableBox from '../../Layout/MainLayout/ContentBox/TableBox'
import PaginationBar from '../../Layout/MainLayout/ContentBox/PaginationBar'
import Drawer from '../../components/Drawer/Drawer'
import DrawerBox from '../../components/Drawer/DrawerBox'
import VLabel from '../../components/Label/Label'

export const commonMixin = {
  data () {
    return {
      filterOpened: false, // 查询列表是否打开
      currentTreeNode: null, // 当前树节点
      listQuery: { // 查询通用条件,组件内部的可删除
        size: 10,
        page: 1
      },
      tabMaxSize: 400, // 表格最大高度
      total: 0, // 当前页面显示的总数据,
      list: [], // 当前页面显示的数据列表
      listLoading: false, // 列表加载状态
      btnStatus: false, // 按钮状态
      currentRow: null, // 当前行
      dialogFormVisible: false, // 编辑页是否显示
      dialogStatus: '' // 编辑页显示状态[update,create,check]
    }
  },
  filters: {
    statusFilter (status) {
      const map = {
        ENABLED: '启用',
        DISABLED: '禁用'
      }
      return map[status]
    },
    statusStyleFilter (status) {
      const map = {
        ENABLED: 'success',
        DISABLED: 'danger',
        HIDDEN: 'warning',
        DELETED: 'danger',
        DRAFT: 'info',
        PUBLISHED: 'success',
        Y: 'success',
        N: 'danger'
      }
      return map[status]
    }
  },
  methods: {
    /**
     * 一、mixin中公共方法都以下划线为前缀区分是自身还是公共方法
     */
    // 1.监听窗口变化重置表格最大高度
    _resizeTableHeight (height) {
      this.tabMaxSize = height
    },
    // 2.设置列表数据
    _setListData (obj) {
      if (obj) {
        this.list = obj.list
        this.total = obj.total
        this.listLoading = false
      } else {
        this.list = []
        this.listLoading = true
      }
    },
    // 3.打开编辑页面
    _openEditPage (status) {
      this.dialogStatus = status
      this.dialogFormVisible = true
      if (status === 'check') {
        return
      }
      this.$nextTick(() => {
        this.$refs['dataForm'] && this.$refs['dataForm'].clearValidate()// 移除表单的校验
      })
    },
    // 4.关闭编辑页面{msg对象用于提示}
    _closeEditPage (msg) {
      this.dialogFormVisible = false
      this.btnStatus = false
      if (msg) {
        this.$notify({
          title: msg.title,
          message: msg.message,
          type: msg.type,
          duration: 4000
        })
      }
    },
    // 设置按钮加载状态
    _setBtnLoading (flag = true) {
      this.btnStatus = flag
    },
    // 5检查是否选择了某一行数据
    _choseOne () {
      return new Promise((resolve) => {
        if (this.currentRow) {
          resolve()
        } else {
          this.$message({showClose: true, content: '请选择一行数据', type: 'warning', center: true})
        }
      })
    },
    // 6.计算表格索引
    _indexMethod (index) {
      return this.listQuery.size * (this.listQuery.page - 1) + index + 1
    },
    // 7.form校验
    _validateForm (formName) {
      return new Promise((resolve, reject) => {
        if (this.$refs[formName]) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              resolve()
            }
          })
        } else {
          this.$message({content: `${formName} is undefind`, type: 'error', center: true})
          reject(new Error('form is undefind'))
        }
      })
    },
    // 9.格式化树结构的数据
    _formatTreeNode (data, type) {
      let ret = []
      for (let key in data) {
        ret.push({id: key, name: data[key], type: type})
      }
      return ret
    },
    // 10.格式化选择器结构
    _formatOptions (obj) {
      let ret = []
      for (let key in obj) {
        ret.push({key: key, label: obj[key]})
      }
      return ret
    },
    /**
     * 二、提供公共函数，可被子组件函数重写
     */
    // 1、表格单选事件，在btn-bar删改查时需要判断当前行有没有
    handleCurrentRowChange (currentRow) {
      this.currentRow = currentRow
    },
    // 2.1分页大小事件 */
    handleSizeChange (val) {
      this.listQuery.size = val
      this.searchList()
    },
    // 2.2分页跳转事件 */
    handleCurrentChange (val) {
      this.listQuery.page = val
      this.searchList()
    },
    // 2.3分页事件 hank 组件内部overwrite
    searchList () {
      console.error('searchList need overwrite (from mixin)')
    },
    // 2.4查询条件查询
    handleFilter () {
      this.listQuery.page = 1
      this.searchList()
    }
  },
  components: {
    Layout,
    TreeBar,
    TitleBar,
    ButtonBar,
    FilterBar,
    FilterItem,
    TableBox,
    PaginationBar,
    Drawer,
    DrawerBox,
    VLabel
  }
}
