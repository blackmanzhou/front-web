<template>
    <div id="TeacherMessage-Page">
        <div class="section-content">
            <p class="title"><span>老师寄语</span></p>
            <span class="btn-close" @click="goHome()"><img src="../assets/imgs/btn-close.png" alt="" /></span>
            <div class="content-area">
                 
            </div>
            <img src="../assets/imgs/bg-teacher-message.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'TeacherMessagePage',
    data () {
        return {

        }
    },
    created () {

    },
    methods: {
        
    }
}
</script>
<style scoped>
#TeacherMessage-Page {
    display: flex;
    align-items: center;
    height: 100%;
    background-color:#4e95ff;
}

#TeacherMessage-Page .section-content {
    background-image:url('../assets/imgs/bg-teacher-message2.png');
    background-size: 100% 100%;
}
</style>



