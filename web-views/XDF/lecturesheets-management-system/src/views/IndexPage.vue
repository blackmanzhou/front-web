<template>
  <div id="index-page">
    <side-bar></side-bar>
    <div class="right-container">
      <nav-bar></nav-bar>
      <level-bar></level-bar>
      <div class="content-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import LevelBar from '@/components/LevelBar'
// import FooterBar from '@/components/Footer'

export default {
  name: "IndexPage",
  components: {
    NavBar,
    SideBar,
    LevelBar
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
#index-page {
  height: 100%;
  width: 100%;
  display: flex;
}

#index-page #side-bar {
  width: 10%;
  height: 100%
}

#index-page .right-container {
  width: 90%;
  /* padding: 0 1rem; */
  /* background-color: #ffffff; */
  background: url("../assets/images/bg-login.png");
  background-position: center center;
  background-repeat: repeat;
  overflow-y: hidden;
}

#index-page #nav-bar {
  width: 98%;
  height: 8%;
  margin: 0 auto;
}

#index-page #level-bar {
  width: 98%;
  height: 7%;
  margin: 0 auto;
}

#index-page .content-container {
  height: 85%;
  width: 100%;
  background-color: #F6F6F6;
  border-top: .0625rem /* 1/16 */ solid #ffffff
}

</style>




