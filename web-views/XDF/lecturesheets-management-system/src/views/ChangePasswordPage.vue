<template>
  <div id="login-page">
    <div id="login-form">
      <h1>讲义管理系统</h1>
      <el-form :rules="passwordRules" :model="passwordInfo" ref="updatePwdForm" label-width="5rem">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="passwordInfo.userName" type="text" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="修改密码" prop="password">
          <el-input v-model="passwordInfo.password" type="password" placeholder="新的密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password">
          <el-input v-model="passwordInfo.confirmPassword" type="password" placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="updatePassword('updatePwdForm')">确认修改</el-button>
        </el-form-item>
      </el-form>
      <p @click="goLogin()">
        <i class="fa fa-arrow-left"></i> 返回登录
      </p>
    </div>
  </div>
</template>

<script>
import { API } from "@/services";
import { mutation } from "@/store";

export default {
  name: "LoginPage",
  data() {
    // 校验规则
    var validateName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error("请输入用户名"));
        } else {
          callback();
        }
      },
      validatePassword = (rule, value, callback) => {
        if (!value) {
          return callback(new Error("请输入新的密码"));
        } else {
          callback();
        }
      },
      validateConfirmPassword = (rule, value, callback) => {
        if (!value) {
          return callback(new Error("请输入确认密码"));
          // } else if (value != this.passwordInfo.password) {
          //   return callback(new Error("两次密码不一致"));
        } else {
          callback();
        }
      };

    return {
      passwordInfo: {
        userName: "",
        password: "",
        confirmPassword: ""
      },
      passwordRules: {
        userName: { validator: validateName, trigger: "blur", required: true },
        password: {
          validator: validatePassword,
          trigger: "blur",
          required: true
        },
        confirmPassword: {
          validator: validateConfirmPassword,
          trigger: "blur",
          required: true
        }
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

    async updatePassword(loginForm) {
      const valid = await this.validate(loginForm);
      const isConsistent = this.passwordInfo.password == this.passwordInfo.confirmPassword;

      if (!valid) {
        return;
      }

      if (!isConsistent) {
        this.showWarning("两次密码不一致！");
        return;
      }

      this.$router.push('/login')
    },

    goLogin() {
      this.$router.go(-1)
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
  height: 26.25rem /* 420/16 */;
  width: 31.25rem /* 500/16 */;
  background: #ffffff;
  border-radius: 0.9375rem /* 15/16 */;
  text-align: center;
  padding: 1.25rem;
}

#login-form .el-form .el-button {
  width: 50%;
  margin-top: 3.125rem; /* 50/16 */
}

#login-form > p {
  text-align: right;
  font-size: small;
  color: burlywood;
  cursor: pointer;
}

#login-form > p:hover {
  color: #e4a02b;
}
</style>




