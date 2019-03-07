<template>
  <div id="nav-bar">
    <div>今天 {{ currentDateTime.month }} 月{{ currentDateTime.day }} 日 {{ weekList[currentDateTime.Day] }} {{ currentDateTime.hour }}:{{ currentDateTime.minute }}:{{currentDateTime.second}}</div>
    <div>
      <ul>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="fa fa-user-o"></i>
              <span>海沃德·巴斯</span>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <i class="fa fa-question-circle" aria-hidden="true"></i>
          <span>帮助</span>
        </li>
        <li @click="logout()">
            <i class="fa fa-sign-in" aria-hidden="true"></i>
            <span>退出</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      currentDate: new Date(),
      weekList: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
    };
  },
  created() {
    setInterval(this.getDateTime, 1000);
  },
  methods: {
    getDateTime() {
      this.currentDate = new Date();
    },
    formateNum(num) {
        return num < 10? `0${num}` : num
    },
    logout() {
        this.$router.go(-1)
    }
  },
  computed: {
    currentDateTime() {
      return {
        month: this.formateNum(this.currentDate.getMonth() + 1),
        day: this.formateNum(this.currentDate.getDate()),
        Day: this.currentDate.getDay(),
        hour: this.formateNum(this.currentDate.getHours()),
        minute: this.formateNum(this.currentDate.getMinutes()),
        second: this.formateNum(this.currentDate.getSeconds())
      };
    }
  }
};
</script>

<style scoped>
#nav-bar {
  width: 100%;
  height: 100%;
  color: #666;
  display: flex;
  font-size: .875rem /* 14/16 */;
  align-items: center;
  justify-content: space-between;
}

ul {
    display: flex;
}

ul>li {
    margin:0 1.5625rem /* 25/16 */;
    cursor: pointer;
}

</style>


