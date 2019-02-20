<template>
    <div id="TeacherMessage-Page">
        <div class="section-content">
            <p class="title"><span>老师寄语</span></p>
            <span class="btn-close" @click="goHome()"><img src="../assets/imgs/btn-close.png" alt="" /></span>
            <div class="content-area">
                 <p><span class="student-name">秦宇涵</span>同学</p>
                 <p>你是一个聪明、可爱的孩子，关心集体，兴趣广泛。老师希望在寒假里，和好书交朋友吧！让它们陪你过一个充实快乐的假期！</p>
            </div>
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
        goHome () {
            this.$router.push('/home')
        }
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
  background-image: url('../assets/imgs/bg-teacher-message-grass.png'),
   url('../assets/imgs/bg-teacher-message-grid.png');
  background-size: 100% 100%;
}

#TeacherMessage-Page .content-area>p {
  z-index: 2;
  line-height: 2rem;
}

#TeacherMessage-Page .content-area>p:first-child {
    margin: 20% auto 10%;
    font-size: 1.125rem
}

#TeacherMessage-Page .content-area>p:last-child {
    text-indent: 2rem
}

#TeacherMessage-Page .content-area .student-name {
    font-size: 1.25rem;
    padding-right: 0.625rem;
}
</style>



