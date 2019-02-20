<template>
    <div id="SelfSpecial-Page">
        <div class="section-content">
            <p class="title"><span>独特的我</span></p>
            <span class="btn-close" @click="goHome()"><img src="../assets/imgs/btn-close.png" alt="" /></span>
            <div class="content-area">
                <span>有礼貌</span>
                <img src="../assets/imgs/keyword.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SelfSpecialPage',
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