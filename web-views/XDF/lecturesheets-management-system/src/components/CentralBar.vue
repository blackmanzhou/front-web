<template>
  <div id="central-bar">
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal">
      <router-link to="/home/infomanager/users">
        <el-menu-item index="1">用户</el-menu-item>
      </router-link>
      <router-link to="/home/infomanager/books">
        <el-menu-item index="2">图书</el-menu-item>
      </router-link>
      <router-link to="/home/infomanager/admins">
        <el-menu-item index="3">管理员</el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "CentralBar",
  props: {
    menuList: {
      type: Object,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
#central-bar {
  height: 100%;
  width: 100%;
}
</style>


