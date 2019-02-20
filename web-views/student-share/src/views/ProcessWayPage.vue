<template>
    <div id="ProcessWay-Page">
      <div class="section-content">
            <p class="title"><span>成长历程</span></p>
            <span class="btn-close" @click="goHome()"><img src="../assets/imgs/btn-close.png" alt="" /></span>
            <div class="content-area">
                 <p><img src="../assets/imgs/add.png" alt=""><span>2019年度</span></p>
                 <p class="margin-left-25">寒假</p>
                 <p class="margin-left-35">三年级致高英语班</p>
                 <p class="margin-left-35">三年级致高语文班</p>
                 <p class="margin-left-35">三年级致高数学班</p>
            </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'ProcessWayPage',
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
#ProcessWay-Page {
  display: flex;
  align-items: center;
  height: 100%;
  background-color:#4e95ff;
}
#ProcessWay-Page .section-content {
  background-image: url('../assets/imgs/bg-teacher-message-grid.png');
  background-size: 100% 100%;
}

#ProcessWay-Page .content-area>p {
  font-size: 1.25rem;
  color: #9996CD;
  font-weight: bold; 
}

#ProcessWay-Page .content-area>p:first-child {
  display: flex;
  align-items: center;
  font-size: 1.625rem;
  margin-top: 10%
}

#ProcessWay-Page .content-area>p:first-child>img {
  margin-right: 1.25rem;
}

#ProcessWay-Page .content-area .margin-left-25 {
  margin-left: 25%;
}
#ProcessWay-Page .content-area .margin-left-35 {
  margin-left: 35%;
}
</style>


