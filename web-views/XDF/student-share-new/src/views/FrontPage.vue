<template>
    <div id='Front-Page'>
        <img class='header-area' src='../assets/imgs/homepage-titleimg.jpg' alt=''>
        <v-touch v-on:swipeleft="goHomePage()">
          <div class='center-area'>
            <div>
                <img src='../assets/imgs/xinyao.png' alt=''>
            </div>
            
            <div>
                <ul>
                    <li>{{studentCode || NoDataMsg}}</li>
                    <li>{{studentName || NoDataMsg}}</li>
                </ul>
            </div>
          </div>
        </v-touch>
        <p><img src='../assets/imgs/arrow.png' alt='' id='twinkleArrow'/></p>
        <div class='footer-area'>
            <p>苏州新东方信息管理部</p>
            <p>Copyright © 2019 stsuzhou.xdf.cn</p>
        </div>
    </div>
</template>

<script>
import { API } from '@/services'
import { mutation } from '@/store'
import { resultMsg } from '@/common'

export default {
    name: 'FrontPage',
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

    //   if (!this.openid || !accountInfo || !accountInfo.studentcode) {
    //       window.location.href = 'http://wxpay.xdf.cn/silenceauthorize/view.do?schoolid=23&callid=25&parm=23'
    //   } else {
    //       const studentCode = accountInfo.studentcode
    //       await this.render(studentCode)
    //   }
    },
    computed: {
        studentName () {
            return this.$store.state.student.studentName
        },
        studentCode () {
            return this.$store.state.student.studentCode
        }
    },
    mounted: function () {
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
            console.log(1111111)
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
    padding: .5rem
}
#Front-Page .center-area>div:first-child>img{
  height: 9rem;
}
#Front-Page .center-area>div>ul>li {
    text-align: center;
    font-size: 1.5rem;
    font-family: 黑体
}
#Front-Page .center-area>div>ul>li:first-child {
    color: #999;
    padding-bottom: 0.5rem
}
#Front-Page .center-area>div>ul>li:last-child {
    color: #FF9C13
}

#Front-Page #twinkleArrow{
	width: 2rem;
	position: absolute;
	left: 90%;
	top: 60%;
}

#Front-Page .footer-area {
    position: absolute;   
    bottom: 0;
    width: 100%;
    text-align: center;
    color: #999;
}
#Front-Page .footer-area>p:first-child {
    font-size: .85rem
}
#Front-Page .footer-area>p:last-child {
    font-size: .75rem;
    padding: .25rem
}
</style>




