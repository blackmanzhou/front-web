<template>
  <div id="home-page">
    <side-bar></side-bar>
    <div class="right-container">
      <nav-bar></nav-bar>
      <level-bar></level-bar>
      <div class="content-container">

      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import LevelBar from '@/components/LevelBar'

export default {
  name: "HomePage",
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
#home-page {
  height: 100%;
  width: 100%;
  display: flex;
}

#home-page #side-bar {
  width: 10%;
  height: 100%
}

#home-page .right-container {
  width: 90%;
  /* padding: 0 1rem; */
  background-color: #ffffff;
}

#home-page #nav-bar {
  width: 98%;
  height: 8%;
  margin: 0 auto;
}

#home-page #level-bar {
  width: 98%;
  height: 7%;
  margin: 0 auto;
}

#home-page .content-container {
  height: 85%;
  width: 100%;
  background-color: #F6F6F6;
}

</style>




