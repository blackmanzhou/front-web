<template>
    <div id="ExclusiveEnergy-Page">
         <div class="section-content">
            <p class="title"><span>专属能量</span></p>
            <span class="btn-close" @click="goHome()"><img src="../assets/imgs/btn-close.png" alt="" /></span>
            <div class="content-area">
                <div>
                    <ul>
                        <li>课堂纪律：
                            <span  v-if="classPerformance && classPerformance.discipline">
                                <label v-for="num in classPerformance.discipline" :key="num">&#9733;</label>      
                            </span>
                        </li>
                        <li>理解能力：
                            <span  v-if="classPerformance && classPerformance.comprehension">
                                <label v-for="num in classPerformance.comprehension" :key="num">&#9733;</label>      
                            </span>    
                        </li>		  
                        <li>运用能力：
                            <span  v-if="classPerformance && classPerformance.application">
                                <label v-for="num in classPerformance.application" :key="num">&#9733;</label>      
                            </span>
                        </li>
                        <li>积 极  性  ：
                            <span  v-if="classPerformance && classPerformance.positivity">
                                <label v-for="num in classPerformance.positivity" :key="num">&#9733;</label>      
                            </span>    
                        </li>				  
                        <li>注 意  力  ：
                            <span  v-if="classPerformance && classPerformance.attention">
                                <label v-for="num in classPerformance.attention" :key="num">&#9733;</label>      
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <p><span class="student-name">{{studentName || 'X X'}}</span>同学：</p>
                    <p>{{classPerformance.evaluation || '老师正在紧张准备中。。。'}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { API } from '@/services'
import { mutation } from '@/store'
export default {
    name: 'ExclusiveEnergyPage',
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
        classPerformance () {
            return this.$store.state.classPerformance
        }
    },
    methods: {
        goHome () {
            this.$router.push('/home')
        },
        async load() {
            const response = await API.getExclusiveEnengyInfo(this.studentCode, this.classCode)
            console.log(response)
            if (response && response.data) {
                this.$store.commit(mutation.CLASSPERFORMANCE, this.convertClassPerformance(response.data.ClassPerformance))
            }
        },
        convertClassPerformance (performance) {
            let newObj = {}

            if (performance) {
                newObj = {
                    application: performance.CPApplication,
                    attention: performance.CPAttention,
                    comprehension: performance.CPComprehension,
                    discipline: performance.CPDiscipline,
                    positivity: performance.CPPositivity,
                    evaluation: performance.CPNote
                }
            }

            return newObj
        }
    }
}
</script>

<style scoped>
#ExclusiveEnergy-Page {
    display: flex;
    align-items: center;
    height: 100%;
    background-color:#4e95ff;
}

#ExclusiveEnergy-Page .content-area>div:first-child {
    margin: 15% auto;
    font-size: 1.125rem
}
#ExclusiveEnergy-Page .content-area>div:last-child {
    line-height: 2rem;
}
#ExclusiveEnergy-Page .content-area>div:last-child>p:last-child {
    text-indent: 2rem;
    font-size: .95rem;
}

#ExclusiveEnergy-Page .content-area .student-name {
    font-size: 1.25rem;
    padding-right: .625rem; 
}

#ExclusiveEnergy-Page .content-area>div>ul>li>span>label {
    font-size: 1.6rem;
    color: #FFEB66;
    padding-left: .625rem
}
</style>


