<template>
  <div id="side-bar">
    <el-menu
      default-active="1"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#20a0ff"
    >
      <el-menu-item index="1">
        <template>
          <i class="fa fa-home"></i>
          <span>首页</span>
        </template>
      </el-menu-item>
      <el-menu-item index="2">
        <template>
          <i class="fa fa-home"></i>
          <span>首页</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
#side-bar {
  height: 100%;
  width: 100%;
  text-align: center;
}

#side-bar .el-menu {
  height: 100%;
}

#side-bar .el-menu .el-menu-item {
    margin-top: 1.25rem /* 20/16 */
}

span {
    font-size: 1rem /* 18/16 */
}
i {
    font-size: 1.875rem /* 30/16 */;
}
</style>


