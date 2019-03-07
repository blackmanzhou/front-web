<template>
    <div id="level-bar">
        <p>当前位置：</p>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(item, index) in levelList" :key="index">
                <router-link v-if="index == levelList.length - 1" to="/home">{{item.name}}</router-link>
                <router-link v-else to="item.path">{{item.name}}</router-link>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    name: 'LevelBar',
    data () {
        return {
            levelList: []
        }
    },
    created() {
        this.getBreadcumb()
    },
    methods: {
        getBreadcumb() {
           const routeMatchList = this.$route.matched
           if (routeMatchList) {
               this.levelList = routeMatchList
           }
        }
    }
}
</script>

<style scoped>
#level-bar {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center
}
</style>


