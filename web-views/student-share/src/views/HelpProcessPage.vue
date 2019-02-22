<template>
    <div id="HelpProcess-Page">
        <div class="section-content">
            <p class="title"><span>助力成长</span></p>
            <span class="btn-close" @click="goHome()"><img src="../assets/imgs/btn-close.png" alt="" /></span>
            <div class="content-area">
                <div>
                    <ul>
                        <li v-for="(book,index) in recommendBooks" :key="index">
                            <p>{{book.bookName}}</p>
                            <p>{{book.description}}</p>
                        </li>   
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { API } from '@/services'
import { mutation } from '@/store'
export default {
    name: 'HelpProcessPage',
    data () {
        return {

        }
    },
    async created () {
        await this.render()
    },
    computed: {
        recommendBooks () {
            return this.$store.state.recommendBooks
        }
    },
    methods: {
        goHome () {
            this.$router.push('/home')
        },
        async render () {
            const studentCode = this.$store.state.student.studentCode
            const classCode = this.$store.state.currentClass.classCode
            let response = await API.getHelpProcessInfo(studentCode, classCode)
            if (response && response.recommendBooks) {
                this.$store.commit(mutation.RECOMMENDBOOKS, this.convertBooks(response.recommendBooks))
                console.log(this.$store.state)
            }
        },
        convertBooks (books) {
            let newBooks = []
            books.forEach(b => {
                const array = b.Content.split(':')
                newBooks.push({
                    bookName: array[0],
                    description: array[1]
                })
            })

            return newBooks
        }
    }
}
</script>

<style scoped>
#HelpProcess-Page {
    display: flex;
    align-items: center;
    height: 100%;
    background-color:#4e95ff;
}
#HelpProcess-Page .content-area>div>ul>li {
    line-height: 2rem
}
#HelpProcess-Page .content-area>div>ul>li>p:first-child {
    text-align: center;
    font-size: 1.125rem
}

#HelpProcess-Page .content-area>div>ul>li>p:last-child {
    text-indent: 2rem;
    font-size: .95rem;
}
</style>


