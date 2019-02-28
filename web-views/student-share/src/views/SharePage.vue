<template>
    <div id="Share-Page">
       <div class="section-content" :class="!shareImg? 'NO-data' : ''">
            <p class="title"><span>分享</span></p>
            <p class="class-name">{{className}}</p>
            <span class="btn-close" @click="goHome()"><img src="../assets/imgs/btn-close.png" alt="" /></span>
            <div class="content-area">
              <ul v-if="shareImg">
                <li><img :src="shareImg" alt="老师紧张准备中。。。"></li>
              </ul>
              <span v-else>{{NoDataMsg}}</span>
            </div>
      </div>
    </div>
</template>

<script>
import { API } from '@/services'
import { mutation } from '@/store'
import { resultMsg } from '@/common'

export default {
    name: 'SharePage',
    data () {
        return {
          NoDataMsg: resultMsg.WAITING_FOR_TEACHER
        }
    },
    async created () {
      await this.render()
    },
    computed: {
      shareImg () {
        return this.$store.state.shareImg
      },
      className () {
          return this.$store.state.currentClass.className
      },
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


