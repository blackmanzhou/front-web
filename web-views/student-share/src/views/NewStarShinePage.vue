<template>
    <div id="NewStarShine-Page">
        <div class="section-content">
            <p class="title"><span>新光闪耀</span></p>
            <span class="btn-close" @click="goHome()"><img src="../assets/imgs/btn-close.png" alt="" /></span>
            <div class="content-area">
                <div>
                    <ul>
                        <li>随堂诊断：<span>优秀</span></li>
                    </ul>
                </div>
                <div>
                    <p><span class="student-name">秦宇涵</span>同学：</p>
                    <p>你每次都非常有礼貌，上课也总是会非常积极得思考问题，甚至会对老师说的提出质疑。我觉得这是一种非常棒的精神，希望你一直保持下去，如果能够坚持思考，那你就会比别人进步一些。我相信你可以做得更好！</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewStarShinePagePage',
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
#NewStarShine-Page {
    display: flex;
    align-items: center;
    height: 100%;
    background-color:#4e95ff;
}

.section-content {
    width: 90%;
    height: 90%;
    margin: 0 auto;
    color: #9996CD;
    background-color: #fff;
    font-weight: bold
}

.section-content .title {
    width: 100%;
    text-align: center;
    font-size: 1.25rem;
    margin-top: .625rem;
}
.section-content .title>span {
    display: inline-block;
    border-bottom: 8px solid #DAE9F9;
    line-height: .4;
    width: 40%;
}

.section-content .btn-close {
    position: absolute;
    top: 5%;
    right: 5%;
    width: 3rem;
}

.section-content .btn-close>img {
    width: 100%
}

.section-content .content-area {
    height: 85%;
    overflow: auto;
    padding: 1.625rem;
    font-size: 0.95rem;
}

.content-area>div:first-child {
    margin: 20% auto;
    font-size: 1.125rem
}
.content-area>div:last-child {
    line-height: 2rem
}
.content-area>div:last-child>p:last-child {
    text-indent: 2rem
}

.content-area .student-name {
    font-size: 1.25rem;
    padding-right: 0.625rem;
}

</style>

