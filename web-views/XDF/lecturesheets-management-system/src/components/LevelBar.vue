<template>
  <div id="level-bar">
    <p>当前位置：</p>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="index">
        <router-link v-if="index == 0" to="/home">{{item.name}}</router-link>
        <router-link v-else :to="item.path">{{item.name}}</router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "LevelBar",
  data() {
    return {
      levelList: []
    };
  },
  created() {
    this.getBreadcumb();
  },
  methods: {
    getBreadcumb() {
      let routeMatchList = this.$route.matched;
      if (routeMatchList && routeMatchList.length > 0) {
        const first = routeMatchList[0];
        console.log(first.name)
        if (first && (first.name || first.name !== "首页")) {
          routeMatchList = [{ name: "讲义系统", path: "/home" }].concat(
            routeMatchList
          );
        }
        this.levelList = this.filter(routeMatchList);
      }
    },

    filter(routers) {
      let newRouters = [];
      if (routers) {
        for (let item of routers) {
          if (item.name) {
            newRouters.push({
              name: item.name,
              path: item.path
            });
          }
        }
      }

      return newRouters
    }
  },
  watch: {
    $route() {
      this.getBreadcumb();
    }
  }
};
</script>

<style scoped>
#level-bar {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}

#level-bar .el-breadcrumb {
  font-size: 1rem;
  height: 1.3125rem; /* 21/16 */
  line-height: 1.3125rem; /* 21/16 */
}
</style>


