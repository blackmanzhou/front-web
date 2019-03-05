<template>
    <div id="ProcessWay-Page">
      <div class="section-content">
            <p class="title"><span>成长历程</span></p>
            <span class="btn-close" @click="goHome()"><img src="../assets/imgs/btn-close.png" alt="" /></span>
            <div class="content-area">
                 <p><img src="../assets/imgs/add.png" alt=""><span>2019年度</span></p>
                 <p class="margin-left-25">寒假</p>
                 <p v-for="(classObj, index) in studentClasses"
                  :key="classObj.classCode"
                  :class="classObj.classCode === currentClass.classCode? 'margin-left-35 class-font-size current-class' : 'margin-left-35 class-font-size'" 
                  @click="changeCurrentClass(index)">
                   {{classObj.className}}
                 </p>
            </div>
            <!-- <p class="btn-goHome">
              <button @click="goHome()">开始</button>
            </p> -->
      </div>
    </div>
</template>

<script>
import { mutation } from '@/store'
export default {
    name: 'ProcessWayPage',
    data () {
        return {

        }
    },
    created () {
        
    },
    computed: {
      currentClass () {
        return this.$store.state.currentClass
      },

      studentClasses () {
        return this.$store.state.classList
      }
    },
    methods: {
        goHome() {
          this.$router.push('/home')
        },
        changeCurrentClass(index) {
          this.$store.commit(mutation.CURRENTCLASS, this.$store.state.classList[index])
          console.log(this.$store.state.currentClass)
        }
    }
}
</script>
<style scoped>
#ProcessWay-Page {
  display: flex;
  align-items: center;
  height: 100%;
  background-color:#4e95ff;
}
#ProcessWay-Page .section-content {
  background-image: url('../assets/imgs/loading-students.gif') ;
  background-size: 100% 50%;
  background-repeat: no-repeat;
  background-position: center;
}

#ProcessWay-Page .content-area>p {
  font-size: 1.25rem;
  color: #9996CD;
  font-weight: bold; 
  padding: .25rem 0;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}

#ProcessWay-Page .content-area>p:first-child {
  display: flex;
  align-items: center;
  font-size: 1.625rem;
  margin-top: 10%
}

#ProcessWay-Page .content-area>p:first-child>img {
  margin-right: 1.25rem;
}

#ProcessWay-Page .content-area .margin-left-25 {
  margin-left: 25%;
}
#ProcessWay-Page .content-area .margin-left-35 {
  margin-left: 35%;
}

#ProcessWay-Page .content-area .class-font-size {
  font-size: 1rem
}
#ProcessWay-Page .content-area .current-class {
  color:#9996FA
}

.btn-goHome {
  display: flex;
  justify-content: center;
}

.btn-goHome>button {
  width: 10rem;
  border-style: none;
  height: 1.625rem;
  outline: none;
  color: #fff;
  background-color: #9996C6;
  opacity: 0.6;
}
</style>


