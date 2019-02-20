<template>
    <div id='Home-Page'>
        <ul>
            <li @click="goDetailPage('/new-star-shine')"><img src="../assets/imgs/new-star-shine.png" alt=""></li>
            <li @click="goDetailPage('/exclusive-energy')"><img src="../assets/imgs/exclusive-energy.png" alt=""></li>
            <li @click="goDetailPage('/self-special')"><img src="../assets/imgs/self-special.png" alt=""></li>
            <li @click="goDetailPage('/help-process')"><img src="../assets/imgs/help-process.png" alt=""></li>
            <li @click="goDetailPage('/teacher-message')"><img src="../assets/imgs/teacher-message.png" alt=""></li>
            <li @click="goDetailPage('/wonderful-moments')"><img src="../assets/imgs/wonderful-moments.png" alt=""></li>
        </ul>
        <div class="footer">
            <ul>
                <li @click="goDetailPage('/process-way')"><img src="../assets/imgs/processway.png" alt="" /></li>
                <li @click="goDetailPage('/wonderful-moments')"><img src="../assets/imgs/camera.png" alt="" /></li>
                <li @click="goDetailPage('/share')"><img src="../assets/imgs/share.png" alt="" /></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {

        }
    },
    created () {

    },
    methods: {
        goDetailPage (routePath) {
            this.$router.push(routePath)
        }
    }
}
</script>

<style scoped>
#Home-Page {
    height: 100%;
    background-color: #0066CB;
}
#Home-Page>ul {
    width: 85%;
    height: 85%;
    overflow: auto;
    margin: 0 auto;
    padding-top: 8%
}
#Home-Page>ul>li {
    margin-bottom: .5rem
}

#Home-Page>ul>li>img {
    width: 100%;
}
#Home-Page .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70px;
    background: #71a9ff;
}
#Home-Page .footer>ul {
    display: flex;
    justify-content: space-between;
}

#Home-Page .footer>ul>li{
    display: flex;
    flex-direction: column;
    align-items: center;
	width:20%;
}

#Home-Page .footer>ul>li>img {
    margin-top: 5%;
    height: 4rem;
}
</style>

