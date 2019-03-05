<template>
    <div id="TeacherMessage-Page">
        <div class="section-content">
            <p class="title"><span>老师寄语</span></p>
            <p class="class-name">{{className}}</p>
            <span class="btn-close" @click="goHome()"><img src="../assets/imgs/btn-close.png" alt="" /></span>
            <div class="content-area">
                 <p><span class="student-name">{{studentName || 'X X'}}</span>同学</p>
                 <p>{{teacherEvaluation || '别着急，老师还没来得及夸你呐！！！！'}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { API } from '@/services'
import { mutation } from '@/store'
export default {
    name: 'TeacherMessagePage',
    data () {
        return {

        }
    },
    async created () {
        await this.render()
    },
    computed: {
        studentName() {
            return this.$store.state.student.studentName
        },
        teacherEvaluation() {
            return this.$store.state.teacherEvaluation
        },
        className () {
            return this.$store.state.currentClass.className
        },
    },
    methods: {
        goHome () {
            this.$router.push('/home')
        },
        async render() {
            const studentCode = this.$store.state.student.studentCode
            const classCode = this.$store.state.currentClass.classCode
            let response = await API.getTeacherMessageInfo(studentCode, classCode)
            if (response) {
                this.$store.commit(mutation.TEACHEREVALUATION, response.evaluation)
            }
        }
    }
}
</script>
<style scoped>
#TeacherMessage-Page {
  display: flex;
  align-items: center;
  height: 100%;
  background-color:#4e95ff;
}

#TeacherMessage-Page .section-content {
  background-image: url('../assets/imgs/bg-teacher-message-grass.png'),
   url('../assets/imgs/bg-teacher-message-grid.png');
  background-size: 100% 100%;
}

#TeacherMessage-Page .content-area>p {
  z-index: 2;
  line-height: 2rem;
}

#TeacherMessage-Page .content-area>p:first-child {
    margin: 20% auto 10%;
    font-size: 1.125rem
}

#TeacherMessage-Page .content-area>p:last-child {
    text-indent: 2rem
}

#TeacherMessage-Page .content-area .student-name {
    font-size: 1.25rem;
    padding-right: 0.625rem;
}
</style>



