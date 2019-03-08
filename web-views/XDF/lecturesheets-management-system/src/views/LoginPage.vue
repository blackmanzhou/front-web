<template>
  <div id="login-page">
    <header-bar :hasBottomLine="hasBottomLine"></header-bar>
    <div id="login-form">
      <h1>登  录</h1>
      <el-form :rules="loginRules" :model="loginInfo" ref="loginForm" @keyup.enter.native="login('loginForm')">
        <el-form-item prop="userName">
          <el-input v-model="loginInfo.userName" type="text" placeholder="用户名" autofocus></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginInfo.password" type="password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('loginForm')" round>登录</el-button>
        </el-form-item>
      </el-form>
      <p @click="changePassword()">忘记密码？</p>
      <!-- <i class="fa fa-question-circle-o"></i> -->
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import { API } from '@/services'
import { mutation } from '@/store'
import HeaderBar from '@/components/Header'
import FooterBar from '@/components/Footer'

export default {
  name: "LoginPage",
  components: {
    HeaderBar,
    FooterBar
  },
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
      hasBottomLine: true,
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
          this.$router.push('/home')
        } else {
          this.showError('用户名或密码错误！')
        }
      }
    },

    changePassword () {
      this.$router.push('/login/change-password')
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

h1 {
  color: #7e8ca3;
}

#login-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  background: url("../assets/images/bg.jpg");
  background-size: 100% 100%;
  /* background-position: center center;
  background-repeat: repeat; */
  overflow-y: hidden;
  background-color: rgb(245, 245, 245);
}

#login-page #header {
  height: 10%;
  color: #fff;
  font-size: 2rem;
}

#login-page #footer {
  color: #cccccc;
  font-size: smaller
}

#login-form {
  height: 21.875rem /* 350/16 */;
  width: 25rem;
  background: #ffffff;
  border-radius: .5rem /* 8/16 */;
  text-align: center;
  padding: 1.25rem;
}

#login-form .el-form .el-button {
  width: 50%;
  margin-top: 3.125rem /* 50/16 */
}

#login-form>p {
  text-align: right;
  font-size: small;
  color: burlywood;
  cursor: pointer;
}

#login-form>p:hover {
  color: #E4A02B
}
</style>




