<template>
    <div id="WonderfulMoments-Page">
      <div class="section-content" :class="!wonderfulMoments || wonderfulMoments.length == 0? 'NO-data' : ''">
            <p class="title"><span>精彩瞬间</span></p>
            <span class="btn-close" @click="goHome()"><img src="../assets/imgs/btn-close.png" alt="" /></span>
            <div class="content-area">
                 <ul v-if="wonderfulMoments && wonderfulMoments.length > 0">
                   <li v-for="(moment, index) in wonderfulMoments" :key="index"><img :src="moment" alt=""></li>
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
    name: 'WonderfulMomentsPage',
    data () {
        return {
          NoDataMsg: resultMsg.WAITING_FOR_TEACHER
        }
    },
    async created () {
      await this.render()
    },
    computed: {
      wonderfulMoments() {
        return this.$store.state.wonderfulMoments
      }
    },
    methods: {
        goHome() {
          this.$router.push('/home')
        },
        async render() {
          const studentCode = this.$store.state.student.studentCode
          const classCode = this.$store.state.currentClass.classCode
          let response = await API.getWonderfulMomentsInfo(studentCode, classCode)
          if (response) {
            console.log(response)
            this.$store.commit(mutation.WONDERFULMOMENTS, this.convertWonderfulData(response.wonderfulMoments))
          }
        },
        convertWonderfulData (moments) {
          let array = []
          if (moments && moments.length > 0) {
            const resultString = moments[0].Content
            array = resultString.split(';')
          }
          return array
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


