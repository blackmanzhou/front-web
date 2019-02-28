<template>
    <div id="SelfSpecial-Page">
        <div class="section-content">
            <p class="title"><span>独特的我</span></p>
            <span class="btn-close" @click="goHome()"><img src="../assets/imgs/btn-close.png" alt="" /></span>
            <div class="content-area">
                <span>{{ keyword || '暂无' }}</span>
                <img src="../assets/imgs/keyword.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import { API } from '@/services'
import { mutation } from '@/store'

export default {
    name: 'SelfSpecialPage',
    data () {
        return {

        }
    },
    async created () {
        await this.render()
    },
    computed: {
        keyword() {
            return this.$store.state.selfKeyword
        }
    },
    methods: {
        goHome () {
            this.$router.push('/home')
        },
        async render () {
            const studentCode = this.$store.state.student.studentCode
            const classCode = this.$store.state.currentClass.classCode
            let response = await API.getSelfSpecialInfo(studentCode, classCode)
            if (response && response.keyword) {
                this.$store.commit(mutation.SELFKEYWORD, response.keyword)
            }
        }
    }
}
</script>

<style scoped>
#SelfSpecial-Page {
    display: flex;
    align-items: center;
    height: 100%;
    background-color:#4e95ff;
}

#SelfSpecial-Page .section-content .content-area {
    overflow: hidden;
}

#SelfSpecial-Page .content-area>img {
    height: 100%;
    width: 100%;
}
#SelfSpecial-Page .content-area>span {
    position: absolute;
    top: 20%;
    left: 20%;
    width: 4rem;
    font-size: 4rem;
}
</style>