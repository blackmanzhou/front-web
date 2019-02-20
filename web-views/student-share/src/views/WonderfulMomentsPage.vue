<template>
    <div id="WonderfulMoments-Page">
      <div class="section-content">
            <p class="title"><span>精彩瞬间</span></p>
            <span class="btn-close" @click="goHome()"><img src="../assets/imgs/btn-close.png" alt="" /></span>
            <div class="content-area">
                 <ul>
                   <li><img src="../assets/imgs/moment-1.png" alt=""></li>
                   <li><img src="../assets/imgs/moment-2.png" alt=""></li>
                   <li><img src="../assets/imgs/moment-3.png" alt=""></li>     
                 </ul>
            </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'WonderfulMomentsPage',
    data () {
        return {

        }
    },
    created () {

    },
    methods: {
        goHome() {
          this.$router.push('/home')
        }
    }
}
</script>
<style scoped>
#WonderfulMoments-Page {
  display: flex;
  align-items: center;
  height: 100%;
  background-color:#4e95ff;
}

#WonderfulMoments-Page .content-area>ul {
  height: 100%;
  overflow: auto;
}

#WonderfulMoments-Page .content-area>ul>li>img {
  width: 100%
}
</style>


