<template>
  <div id="ProcessWay-Page">
    <div>
      <img src="../assets/imgs/head-icon.jpg" alt>
    </div>
    <div class="central-container margin-8-16">
      <div class="border-bottom border-color-e6">
        <p class="font-size-24">成长报告</p>
        <p class="padding-top-8 color-font-grey">{{seasonTitle}}</p>
        <p class="padding-top-8 color-font-grey">能力诊断：优秀 | 课堂表现：11111</p>
      </div>
      <div class="class-group-list">
        <div
          @click="goDetail()"
          v-for="(item, index) in classList"
          :key="index"
          :class="index === 0? 'margin-top-16' : 'margin-top-8'"
        >
          <class-group-item :classGroupObj="item"></class-group-item>
        </div>
      </div>
    </div>
    <copyright-message></copyright-message>
  </div>
</template>

<script>
import { mutation } from "@/store";
import { constants } from "@/common";
import CopyrightMessage from "@/components/CopyrightMessage";
import ClassGroupItem from "@/components/ClassGroupItem";
export default {
  name: "ProcessWayPage",
  components: {
    ClassGroupItem,
    CopyrightMessage
  },
  data() {
    return {
      seasonTitle: constants.seasonTitle,
      classList: []
    };
  },
  created() {
    this.classList = this.getClassList();
  },
  computed: {
    currentClass() {
      return this.$store.state.currentClass;
    },

    studentClasses() {
      return this.$store.state.classList;
    }
  },
  methods: {
    goDetail() {
      console.log(1111111);
      this.$router.push("/exclusive-energy");
      // this.changeCurrentClass()
    },
    changeCurrentClass(index) {
      this.$store.commit(
        mutation.CURRENTCLASS,
        this.$store.state.classList[index]
      );
      console.log(this.$store.state.currentClass);
    },
    getClassList() {
      return constants.classList;
    }
  }
};
</script>
<style scoped>
#ProcessWay-Page {
  width: 100%;
  height: 100%;
}

#ProcessWay-Page > div:first-child {
  background: url("../assets/imgs/bg-grass.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25%;
}

#ProcessWay-Page > div:first-child > img {
  height: 6rem;
  width: 6rem;
}
#ProcessWay-Page .class-group-list {
  width: 100%;
  height: 20rem;
  overflow: auto;
  overflow-x: hidden;
}
</style>


