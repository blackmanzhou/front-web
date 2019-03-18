<template>
  <div id="WonderfulMoments-Page" class="page-container">
    <v-touch
      class="section-content border-radius-8 border-color-default"
      :class="!wonderfulMoments || wonderfulMoments.length == 0? 'NO-data' : ''"
      v-on:swipeleft="goNext()"
      v-on:swiperight="goBack()"
      :swipe-options="{direction: 'horizontal'}"
    >
      <header-title :title="title" :className="className"></header-title>
      <div class="imgList" v-if="wonderfulMoments && wonderfulMoments.length > 0">
        <img v-for="(item, index) in wonderfulMoments" :key="index" :src="item" alt>
      </div>
    </v-touch>
    <run-horse :currentIndex="6"></run-horse>
  </div>
</template>

<script>
import { API } from "@/services";
import { mutation } from "@/store";
import { resultMsg, constants } from "@/common";
import RunHorse from "@/components/RunHorse";
import HeaderTitle from "@/components/HeaderTitle";

export default {
  name: "WonderfulMomentsPage",
  components: {
    RunHorse,
    HeaderTitle
  },
  data() {
    return {
      title: "精彩瞬间",
      NoDataMsg: resultMsg.WAITING_FOR_TEACHER
    };
  },
  async created() {
    await this.render();
  },
  computed: {
    wonderfulMoments() {
      return this.$store.state.wonderfulMoments;
    },
    className() {
      return this.$store.state.currentClass.className;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },

    goNext() {
    },
    async render() {
      const studentCode = this.$store.state.student.studentCode
      const classCode = this.$store.state.currentClass.classCode
      let response = await API.getWonderfulMomentsInfo(studentCode, classCode)
      
      if (response) {
        this.$store.commit(
          mutation.WONDERFULMOMENTS,
          this.convertWonderfulData(response.wonderfulMoments)
        );
      }
    },
    convertWonderfulData(moments) {
      let array = [];
      if (moments && moments.length > 0) {
        let resultString = moments[0].Content;
        if (resultString.lastIndexOf(";") > 0) {
          resultString = resultString.substring(
            0,
            resultString.lastIndexOf(";")
          );
          array = resultString.split(";");
        }
      }
      return array;
    }
  }
};
</script>
<style scoped>
#WonderfulMoments-Page .imgList {
  height: 85%;
  overflow: auto
}
</style>


