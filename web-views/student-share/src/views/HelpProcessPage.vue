<template>
    <div id="HelpProcess-Page">
        <div class="section-content">
            <p class="title"><span>助力成长</span></p>
            <span class="btn-close" @click="goHome()"><img src="../assets/imgs/btn-close.png" alt="" /></span>
            <div class="content-area">
                <div>
                    <ul>
                        <li>
                            <p>哈佛阅读</p>
                            <p>《阅读哈佛》一书以作者在哈佛大学的所见所闻为素材，以图文并茂的形式，集学术观察、生活体验、留学经历和热点透视为一体，有对哈佛大学众多名人的访谈，有对哈佛教育理念的思考，有对哈佛文化现象和大学生活的看法，也有作者对申请哈佛大学的建议，等等。</p>
                        </li>   
                        <li>
                            <p>哈佛阅读</p>
                            <p>《阅读哈佛》一书以作者在哈佛大学的所见所闻为素材，以图文并茂的形式，集学术观察、生活体验、留学经历和热点透视为一体，有对哈佛大学众多名人的访谈，有对哈佛教育理念的思考，有对哈佛文化现象和大学生活的看法，也有作者对申请哈佛大学的建议，等等。</p>
                        </li>  
                        <li>
                            <p>哈佛阅读</p>
                            <p>《阅读哈佛》一书以作者在哈佛大学的所见所闻为素材，以图文并茂的形式，集学术观察、生活体验、留学经历和热点透视为一体，有对哈佛大学众多名人的访谈，有对哈佛教育理念的思考，有对哈佛文化现象和大学生活的看法，也有作者对申请哈佛大学的建议，等等。</p>
                        </li>  
                        <li>
                            <p>哈佛阅读</p>
                            <p>《阅读哈佛》一书以作者在哈佛大学的所见所闻为素材，以图文并茂的形式，集学术观察、生活体验、留学经历和热点透视为一体，有对哈佛大学众多名人的访谈，有对哈佛教育理念的思考，有对哈佛文化现象和大学生活的看法，也有作者对申请哈佛大学的建议，等等。</p>
                        </li>       
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelpProcessPage',
    data () {
        return {

        }
    },
    created () {

    },
    methods: {
        goHome () {
            this.$router.push('/home')
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


