<template>
  <div id="Share-Page" class="page-container">
    <v-touch
      class="section-content border-radius-8 border-color-default"
      v-on:swipeleft="goNext()"
      v-on:swiperight="goBack()"
    >  
    <img class="margin-top-8" src="../assets/imgs/share-page.jpg" alt="">  
    </v-touch>
    <run-horse :currentIndex="4"></run-horse>
  </div>
</template>

<script>
import { API } from "@/services";
import { mutation } from "@/store";
import { resultMsg } from "@/common";
import RunHorse from "@/components/RunHorse";

export default {
  name: "SharePage",
  components: {
    RunHorse
  },
  data() {
    return {
      NoDataMsg: resultMsg.WAITING_FOR_TEACHER
    };
  },
  async created() {
    await this.render();
  },
  computed: {
    shareImg() {
      return this.$store.state.shareImg;
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
      this.$router.push('/help-process')
    },
    async render() {
      const studentCode = this.$store.state.student.studentCode;
      const classCode = this.$store.state.currentClass.classCode;
      let response = await API.getSharePageInfo(studentCode, classCode);
      if (response) {
        this.$store.commit(
          mutation.SHAREIMG,
          response.shareImg ? response.shareImg.Content : ""
        );
      }
    }
  }
};
</script>
<style scoped>
</style>


