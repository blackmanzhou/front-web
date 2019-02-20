<template>
    <div id='Front-Page'>
        <img class='header-area' src='../assets/imgs/homepage-titleimg.jpg' alt=''>
        <div class='center-area'>
            <div>
                <img src='../assets/imgs/xinyao.png' style='height:150px' alt=''>
            </div>
            
            <div>
                <ul>
                    <li>PM5C0101023</li>
                    <li>苏小新</li>
                </ul>
            </div>
        </div>
        <p @click='goHomePage()'><img src='../assets/imgs/arrow.png' alt='' id='twinkleArrow'/></p>
        <div class='footer-area'>
            <p>苏州新东方信息管理部</p>
            <p>Copyright © 2019 stsuzhou.xdf.cn</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FrontPage',
    date() {
        return {

        }
    },
    created() {
        let opacityValue = 0;
        setInterval(() => {
            opacityValue += 0.1
            let arrowElement = document.getElementById('twinkleArrow')
            if (arrowElement) {
                arrowElement.style.opacity = opacityValue
                if (opacityValue > 1) {
                    opacityValue = 0
                }
            }

        }, 100)
    },
    methods: {
        goHomePage () {
            this.$router.push('/home')
        }
    }
}
</script>

<style scoped>
#Front-Page {
    height: 100%;
    overflow: auto;
}
.header-area {
    width: 100%
}
.center-area {
    width: 100%;
    margin: 5% 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center
}
.center-area>div {
    padding: .5rem
}
.center-area>div>ul>li {
    text-align: center;
    font-size: 1.5rem;
    font-family: 黑体
}
.center-area>div>ul>li:first-child {
    color: #999;
    padding-bottom: 0.5rem
}
.center-area>div>ul>li:last-child {
    color: #FF9C13
}

#Front-Page #twinkleArrow{
	width: 20px;
	position: absolute;
	left: 90%;
	top: 60%;
}

.footer-area {
    position: absolute;   
    bottom: 0;
    width: 100%;
    text-align: center;
    color: #999;
}
.footer-area>p:first-child {
    font-size: .85rem
}
.footer-area>p:last-child {
    font-size: .75rem;
    padding: .25rem
}
</style>




