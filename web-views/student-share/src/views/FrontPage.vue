<template>
    <div id='Front-Page'>
        <img class='header-area' src='../assets/imgs/homepage-titleimg.jpg' alt=''>
        <div class='center-area'>
            <div>
                <img src='../assets/imgs/xinyao.png' alt=''>
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
        this.goHomePage()
    },
    mounted: function () {
      let opacityValue = 0;
        let arrowElement = document.getElementById('twinkleArrow')
        arrowElement.addEventListener('touchmove', function(e) {
          console.log(111)
        })

        arrowElement.addEventListener('touchend', function(e) {
            console.log(222)
        })
        setInterval(() => {
            opacityValue += 0.1
            
            arrowElement.style.opacity = opacityValue
            if (opacityValue > 1) {
                opacityValue = 0
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
#Front-Page .header-area {
    width: 100%;
    height: 40%
}
#Front-Page .center-area {
    width: 100%;
    margin: 5% 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 45%
}
#Front-Page .center-area>div {
    padding: .5rem
}
#Front-Page .center-area>div:first-child>img{
  height: 9rem;
}
#Front-Page .center-area>div>ul>li {
    text-align: center;
    font-size: 1.5rem;
    font-family: 黑体
}
#Front-Page .center-area>div>ul>li:first-child {
    color: #999;
    padding-bottom: 0.5rem
}
#Front-Page .center-area>div>ul>li:last-child {
    color: #FF9C13
}

#Front-Page #twinkleArrow{
	width: 2rem;
	position: absolute;
	left: 90%;
	top: 60%;
}

#Front-Page .footer-area {
    position: absolute;   
    bottom: 0;
    width: 100%;
    text-align: center;
    color: #999;
}
#Front-Page .footer-area>p:first-child {
    font-size: .85rem
}
#Front-Page .footer-area>p:last-child {
    font-size: .75rem;
    padding: .25rem
}
</style>




