<template>
    <div id="HelpProcess-Page">
        <div class="section-content"  :class="!recommendBooks || recommendBooks.length == 0? 'NO-data' : ''">
            <p class="title"><span>助力成长</span></p>
            <span class="btn-close" @click="goHome()"><img src="../assets/imgs/btn-close.png" alt="" /></span>
            <div class="content-area">
                <div>
                    <ul v-if="recommendBooks && recommendBooks.length > 0">
                        <li v-for="(book,index) in recommendBooks" :key="index">
                            <p>{{book.bookName}}</p>
                            <p>{{book.description}}</p>
                        </li>   
                    </ul>
                    <span v-else>{{NoDataMsg}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { API } from '@/services'
import { mutation } from '@/store'
import { resultMsg } from '@/common'

export default {
    name: 'HelpProcessPage',
    data () {
        return {
            NoDataMsg: resultMsg.WAITING_FOR_TEACHER
        }
    },
    async created () {
        await this.render()
    },
    computed: {
        studentCode () {
            return this.$store.state.student.studentCode
        },
        classCode () {
            return this.$store.state.currentClass.classCode
        },
        recommendBooks () {
            return this.$store.state.recommendBooks
        }
    },
    methods: {
        goHome () {
            this.$router.push('/home')
        },
        async render () {
            let response = await API.getHelpProcessInfo(this.studentCode, this.classCode)
            if (response && response.recommendBooks) {
                this.$store.commit(mutation.RECOMMENDBOOKS, this.convertBooks(response.recommendBooks))
                console.log(this.$store.state)
            }
        },
        convertBooks (books) {
            let newBooks = []
            if (books && books.length > 0) {
                const bookContent = books[0].Content
                const objStringArray = bookContent.split(';')

                if (objStringArray && objStringArray.length > 0) {
                    objStringArray.forEach(objStr => {
                        const items = objStr.split(':')
                        if (items && items.length > 0) {
                            newBooks.push({
                                bookName: items[0],
                                description: items[1]
                            })
                        }
                    })
                }
            }

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


