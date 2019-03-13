<template>
    <div id='Front-Page'>
        <photo-wall></photo-wall>
        <v-touch v-on:swipeleft="goHomePage()">
          <div class='center-area'>
            <div class='color-font-green'>
                <p>一  年  之 『积』 始  于  春。</p>
                <p>a choice you make, a change life waiting ahead</p>
            </div>
            <div>
                <p class="color-font-pink font-size-48">学员成长报告</p>
                <p class="color-font-blue font-size-32">春季 · 期中</p>          
            </div>
            <div>
                <ul>
                    <li>{{studentCode || NoDataMsg}}</li>
                </ul>
            </div>
          </div>
        </v-touch>
        <p><img src='../assets/imgs/arrow.png' alt='' id='twinkleArrow'/></p>
        <copyright-message></copyright-message>
    </div>
</template>

<script>
import { API } from '@/services'
import { mutation } from '@/store'
import { resultMsg } from '@/common'
import PhotoWall from '@/components/PhotoWall'
import CopyrightMessage from '@/components/CopyrightMessage'

export default {
    name: 'FrontPage',
    components:{
        PhotoWall,
        CopyrightMessage
    },
    data() {
        return {
            NoDataMsg: resultMsg.NO_NAME,
            openid: '',
            schoolid: '',
            pageInfo: null,
        }
    },
    beforeCreate() {
       
    },

    async created() {
       const params = this.$route.query
       if (params) {
           this.openid = params.openid
           this.schoolid = params.schoolid
       }

      const accountInfo = await this.getStudentAccount()

      if (!this.openid || !accountInfo || !accountInfo.studentcode) {
          window.location.href = 'http://wxpay.xdf.cn/silenceauthorize/view.do?schoolid=23&callid=25&parm=23'
      } else {
          const studentCode = accountInfo.studentcode
          await this.render(studentCode)
      }
    },
    computed: {
        studentName () {
            return this.$store.state.student.studentName
        },
        studentCode () {
            return this.$store.state.student.studentCode
        }
    },
    mounted () {
        let opacityValue = 0;
        let arrowElement = document.getElementById('twinkleArrow')

        setInterval(() => {
            opacityValue += 0.1

            if (arrowElement) {
                arrowElement.style.opacity = opacityValue
                if (opacityValue > 1) {
                    opacityValue = 0
                }
            }

        }, 100)        
    },
    methods: {
        goHomePage () {
            if (!this.$store.state.student || !this.studentName) {
                alert(resultMsg.STUDENT_INFO_ERROR)
                return
            }

            let router = this.$router
            setTimeout(function() {
                router.push('/process-way')
            }, 300)    
        },
        async render (studentCode) {
            await this.getClassedByStudentCode(studentCode)
            await this.getStudentBaseInfo(studentCode)

            if (!this.$store.state.student || !this.studentName) {
                alert(resultMsg.STUDENT_INFO_ERROR)
                return
            }
        },

        async getStudentAccount () {
            let response = await API.featchStudentAccountInfo(this.openid, this.schoolid)
            return response.data
        },

        async getClassedByStudentCode (studentCode) {
            let response = await API.getProcessWayInfo(studentCode)
            if (response && response.data) {
                this.$store.commit(mutation.CLASSLIST, response.data.ClassList)
            }
           
        },

        async getStudentBaseInfo (studentCode) {
            let response = await API.getStudentBaseInfo(studentCode)
            if (response && response.data) {
                this.$store.commit(mutation.STUDENT, response.data.Student)
            }
        }
    }
}
</script>

<style scoped>
#Front-Page {
    height: 100%;
    overflow: auto;
}
#Front-Page .header-area {
    width: 100%;
    height: 40%
}
#Front-Page .center-area {
    width: 100%;
    margin: 5% 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 45%
}
#Front-Page .center-area>div {
    width: 100%;
    text-align: center;
    padding: .5rem

}

#Front-Page .center-area>div:first-child>p:first-child {
    font-size: 1.25rem /* 20/16 */;
    font-weight: bold;
}
#Front-Page .center-area>div:first-child>p:last-child {
    font-family: 黑体;
    font-size: small;
}

#Front-Page .center-area>div>ul>li {
    font-size: 1.5rem;
    font-family: 黑体
}
#Front-Page .center-area>div>ul>li:first-child {
    color: #999;
    padding: 1rem
}

#Front-Page #twinkleArrow{
	width: 2rem;
	position: absolute;
	left: 90%;
	top: 60%;
}
</style>




