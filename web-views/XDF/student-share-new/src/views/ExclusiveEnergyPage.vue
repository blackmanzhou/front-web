<template>
    <div id="ExclusiveEnergy-Page" class="page-container">
      <v-touch class="section-content border-radius-8 border-color-default" v-on:swipeleft="goBack()" v-on:swiperight="goNext()">
        <header-title :title="title"></header-title>
      </v-touch>
      <run-horse></run-horse>
    </div>
</template>

<script>
import { API } from '@/services'
import { mutation } from '@/store'
import { resultMsg } from '@/common'
import RunHorse from '@/components/RunHorse'
import HeaderTitle from '@/components/HeaderTitle'

export default {
    name: 'ExclusiveEnergyPage',
    components: {
      RunHorse,
      HeaderTitle
    },
    data () {
        return {
            title: '课堂表现',
            NoDataMsg: resultMsg.WAITING_FOR_TEACHER
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
        className () {
            return this.$store.state.currentClass.className
        },
        classPerformance () {
            return this.$store.state.classPerformance
        }
    },
    methods: {
        goBack() {
          alert(-1)
        },
        goNext() {
          alert(1)
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
#ExclusiveEnergy-Page #run-horse{
  height: 3%;
  position: absolute;
  bottom: .25rem
}
</style>


