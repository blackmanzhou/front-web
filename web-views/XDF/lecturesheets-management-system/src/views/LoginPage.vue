<template>
  <div id="login-page">
    <div id="login-form">
      <h1>讲义管理系统</h1>
      <el-form :rules="loginRules" :model="loginInfo" ref="loginForm" label-width="70px">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="loginInfo.userName" type="text" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginInfo.password" type="password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
      <p>忘记密码？</p>
    </div>
  </div>
</template>

<script>
import { API } from '@/services'
import { mutation } from '@/store'

export default {
  name: "LoginPage",
  data() {
    // 校验规则
    var validateName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error("请输入用户名"));
        } else {
          callback()
        }
      },
      validatePassword = (rule, value, callback) => {
        if (!value) {
          return callback(new Error("请输入密码"));
        } else {
          callback()
        }
      };

    return {
      loginInfo: {
        userName: "",
        password: ""
      },
      loginRules: {
        userName: { validator: validateName, trigger: "blur", required: true },
        password: { validator: validatePassword, trigger: "blur", required: true }
      }
    };
  },
  methods: {
    async validate(formName) {
      let isRight = false;

      this.$refs[formName].validate(valid => {
        isRight = valid;
      });

      return isRight;
    },

    async login(loginForm) {
      
      const valid = await this.validate(loginForm);
      if (valid) {
        const response = await API.login(this.loginInfo)
        
        if (response.resultCode == 0) {
          alert('login success')
        } else {
          this.showError('用户名或密码错误！')
        }
      }
    }
  }
};
</script>

<style scoped>
.el-form {
    width: 70%;
    margin: 3.75rem /* 60/16 */ auto;
    margin-bottom: 0;
}
.el-form-item {
  margin-top: 1.5625rem;
}

.el-inpu {
  width: 45%;
}

#login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: url("../assets/images/bg-login.png");
  background-position: center center;
  background-repeat: repeat;
  overflow-y: hidden;
  background-color: rgb(245, 245, 245);
}

#login-form {
  height: 21.875rem /* 350/16 */;
  width: 31.25rem /* 500/16 */;
  background: #ffffff;
  border-radius: 0.9375rem /* 15/16 */;
  text-align: center;
  padding: 1.25rem;
}

#login-form .el-form .el-button {
  width: 50%;
  margin-top: 3.125rem /* 50/16 */
}

#login-form > p {
  text-align: right;
  font-size: small;
  color: burlywood;
  cursor: pointer;
}
</style>




