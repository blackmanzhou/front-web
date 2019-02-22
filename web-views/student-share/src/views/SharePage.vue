<template>
    <div id="Share-Page">
       <div class="section-content">
            <p class="title"><span>分享</span></p>
            <span class="btn-close" @click="goHome()"><img src="../assets/imgs/btn-close.png" alt="" /></span>
            <div class="content-area">
              <ul>
                <li><img :src="shareImg" alt=""></li>
              </ul>
            </div>
      </div>
    </div>
</template>

<script>
import { API } from '@/services'
import { mutation } from '@/store'
export default {
    name: 'SharePage',
    data () {
        return {

        }
    },
    async created () {
      await this.render()
    },
    computed: {
      shareImg () {
        return this.$store.state.shareImg
      }
    },
    methods: {
        goHome() {
          this.$router.push('/home')
        },
        async render() {
          const studentCode = this.$store.state.student.studentCode
          const classCode = this.$store.state.currentClass.classCode
          let response = await API.getSharePageInfo(studentCode, classCode)
          if (response) {
            this.$store.commit(mutation.SHAREIMG, response.shareImg? response.shareImg.Content : '')
          }
        }
    }
}
</script>
<style scoped>
#Share-Page {
  display: flex;
  align-items: center;
  height: 100%;
  background-color:#4e95ff;
}

#Share-Page .section-content .content-area>ul {
  height: 100%;
  overflow: auto;
}

#Share-Page .section-content .content-area>ul>li {
  display: flex;
  justify-content: center
}

#Share-Page .section-content .content-area>ul>li>img {
  width: 90%;
}
</style>


