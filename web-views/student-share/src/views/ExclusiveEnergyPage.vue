<template>
    <div id="ExclusiveEnergy-Page">
         <div class="section-content">
            <p class="title"><span>专属能量</span></p>
            <span class="btn-close" @click="goHome()"><img src="../assets/imgs/btn-close.png" alt="" /></span>
            <div class="content-area">
                <div>
                    <ul>
                        <li>课堂纪律：<span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></li>
                        <li>理解能力：<span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></li>		  
                        <li>运用能力：<span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></li>
                        <li>积 极  性  ：<span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></li>				  
                        <li>注 意  力  ：<span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></li>
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
    name: 'ExclusiveEnergyPage',
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
#ExclusiveEnergy-Page {
    display: flex;
    align-items: center;
    height: 100%;
    background-color:#4e95ff;
}

#ExclusiveEnergy-Page .content-area>div:first-child {
    margin: 20% auto;
    font-size: 1.125rem
}
#ExclusiveEnergy-Page .content-area>div:last-child {
    line-height: 2rem
}
#ExclusiveEnergy-Page .content-area>div:last-child>p:last-child {
    text-indent: 2rem;
    font-size: .95rem;
}

#ExclusiveEnergy-Page .content-area .student-name {
    font-size: 1.25rem;
    padding-right: .625rem; 
}

#ExclusiveEnergy-Page .content-area>div>ul>li>span {
    font-size: 1.5rem;
    color: #FFEB66;
    padding-left: .625rem
}
</style>


