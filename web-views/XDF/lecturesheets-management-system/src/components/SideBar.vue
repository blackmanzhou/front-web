<template>
  <div id="side-bar">
    <el-menu
      :default-active="defaultActive"
      :collapse="isCollapse"
      background-color="rgb(48, 65, 86)"
      text-color="#fff"
      active-text-color="#20a0ff"
      @open="handleOpen"
    >
      <el-menu-item index="1" @click="goRouter('/home')">
        <template>
          <i class="fa fa-home"></i>
          <span>首页</span>
        </template>
      </el-menu-item>

      <el-menu-item index="2" @click="goRouter('/school-management')">
        <template>
          <i class="fa fa-building-o"></i>
          <span>校区管理</span>
        </template>
      </el-menu-item>

      <el-menu-item index="3" @click="goRouter('/lecture-management')">
        <template>
          <i class="fa fa-file-text"></i>
          <span>讲义管理</span>
        </template>
      </el-menu-item>

      <el-submenu index="4">
        <template slot="title">
          <i class="fa fa-users"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1" @click="goRouter('/user-management/school-admin')">校区管理员</el-menu-item>
          <el-menu-item index="4-2" @click="goRouter('/user-management/school-aunt')">校区阿姨</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    },
    activeIndex: {
      type: String,
      default: '1'
    }
  },
  data() {
    return {
      defaultActive: this.activeIndex
    };
  },
  methods: {
    goRouter(path) {
      console.log(path)
      this.$router.push(path)
    },

    handleOpen(index, path) {
      this.defaultActive = `${index}-1`
      this.goRouter('/user-management/school-admin')
    }
  }
};
</script>

<style scoped>
#side-bar {
  height: 100%;
  width: 100%;
  text-align: left;
  overflow: auto;
}

#side-bar .el-menu {
  height: 100%;
}

#side-bar .el-menu .el-menu-item {
  min-width: 0;
}

span {
  font-size: 0.875rem;
  padding-left: 0.5rem;
}
i {
  font-size: 1rem;
}
</style>


