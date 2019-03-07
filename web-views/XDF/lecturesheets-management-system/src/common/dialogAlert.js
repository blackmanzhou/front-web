import { resultCode } from '@/common'

let dialogAlert = function (Vue, options) {
    Vue.prototype.showError = function (errorMsg) {
      this.$confirm(errorMsg, '错误', {
        confirmButtonText: '确定',
        callback: action => {
            console.log(`action: ${action}`)
        },
        type: 'error',
        showCancelButton: false,
        center: true
      }).then()
    },
  
    Vue.prototype.showWarning = function (warning) {
      this.$confirm(`^_^  ${warning}`, '提示', {
        confirmButtonText: '确定',
        callback: action => {
            console.log(`action: ${action}`)
        },
        type: 'warning',
        showCancelButton: false,
        center: true
      }).then()
    },
    Vue.prototype.showSuccess = function (msg) {
      this.$confirm(msg, '成功', {
        confirmButtonText: '确定',
        callback: action => {
            console.log(`action: ${action}`)
        },
        type: 'info',
        showCancelButton: false,
        center: true
      }).then()
    },
    Vue.prototype.showMessage = function (msg, typeIndex) {
      const message = msg  || '操作成功！'
      let type = 'success'
      switch (typeIndex) {
        case resultCode.SUCCESS:
          break
        case resultCode.WARNING:
          type = 'error'
          break
        case resultCode.EROR:
          type = 'warning'
          break
        default: 
          break
      }
      this.$message({
        showClose: true,
        message: message,
        type: type
      })
    }
  }

  export default dialogAlert
  