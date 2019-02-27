<template>
    <div id="NewStarShine-Page">
        <div class="section-content">
            <p class="title"><span>新光闪耀</span></p>
            <span class="btn-close" @click="goHome()"><img src="../assets/imgs/btn-close.png" alt="" /></span>
            <div class="content-area">
                <div>
                    <ul>
                        <li>随堂诊断：<span>{{gradeInfo.grade || '暂未公布成绩'}}</span></li>
                    </ul>
                </div>
                <div>
                    <p><span class="student-name">{{studentName || 'X X'}}</span>同学：</p>
                    <p>{{gradeInfo.evaluation || '老师在紧张准备中。。。'}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { API } from '@/services'
import { mutation } from '@/store'
export default {
    name: 'NewStarShinePagePage',
    data () {
        return {
            
        }
    },
    async created () {
        await this.load()
    },
    computed: {
        studentName () {
            return this.$store.state.student.studentName
        },
        studentCode () {
            return this.$store.state.student.studentCode
        },
        classCode () {
            return this.$store.state.currentClass.classCode
        },
        gradeInfo () {
            return this.$store.state.xdfGrade
        }   
    },
    methods: {
        goHome () {
            this.$router.push('/home')
        },
        async load() {
            let response = await API.getNewStarShineInfo(this.studentCode, this.classCode)
            console.log(response)
            if (response && response.data) {
                const gradeList = response.data.XDFGradeList
                if (gradeList && gradeList.length > 0) {
                     this.$store.commit(mutation.XDFGRADE, this.convertGrade(gradeList[0]))
                }
            }
        },
        convertGrade(data) {
            let grade = {
                score: data.XGScore,
                fullScore: data.XGFullScore,
                examType: data.XGExamType,
                subject: data.XGSubject,
                evaluation: data.XGDescribe,
                grade: this.mapGradeByScore(data.XGScore, data.XGFullScore)
            }
            
            return grade
        },
        mapGradeByScore(score, fullScore) {
            let index = 0
            const scoreRate = score / fullScore
            const Grades = ['优秀','良好','中等','及格','不及格']

            if (scoreRate < 0.6) {
                index = 4
            } else if (scoreRate < 0.7) {
                index = 3
            } else if (scoreRate < 0.8) {
                index = 2
            } else if (scoreRate < 0.9) {
                index = 1
            }

            return Grades[index]
        }
    }
}
</script>

<style scoped>
#NewStarShine-Page {
    display: flex;
    align-items: center;
    height: 100%;
    background-color:#4e95ff;
}

#NewStarShine-Page .content-area>div:first-child {
    margin: 20% auto;
    font-size: 1.125rem
}
#NewStarShine-Page .content-area>div:last-child {
    line-height: 2rem
}
#NewStarShine-Page .content-area>div:last-child>p:last-child {
    text-indent: 2rem
}

#NewStarShine-Page .content-area .student-name {
    font-size: 1.25rem;
    padding-right: 0.625rem;
}

</style>

