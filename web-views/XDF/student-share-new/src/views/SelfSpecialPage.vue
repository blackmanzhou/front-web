<template>
  <div id="SelfSpecial-Page" class="page-container">
    <v-touch
      class="section-content border-radius-8 border-color-default"
      v-on:swipeleft="goNext()"
      v-on:swiperight="goBack()"
    >
      <header-title :title="title" :className="className"></header-title>
      <div class="content-container bg-boy bg">
        <span class="font-size-56 color-font-f3c fix-keyword" style="height: 20%">{{ keyword || '暂  无'}}</span>
      </div>
    </v-touch>
    <run-horse :currentIndex="3"></run-horse>
  </div>
</template>

<script>
import { API } from "@/services";
import { mutation } from "@/store";
import RunHorse from "@/components/RunHorse";
import HeaderTitle from "@/components/HeaderTitle";

export default {
  name: "SelfSpecialPage",
  components: {
    RunHorse,
    HeaderTitle
  },
  data() {
    return {
      title: "关键词"
    };
  },
  async created() {
    await this.render();
  },
  computed: {
    keyword() {
      return this.$store.state.currentClass.keyword;
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
      this.$router.push("/share");
    },
    async render() {
      const studentCode = this.$store.state.student.studentCode;
      const classCode = this.$store.state.currentClass.classCode;
      let response = await API.getSelfSpecialInfo(studentCode, classCode);
      if (response) {
        this.$store.commit(mutation.SELFKEYWORD, response.keyword);
      }
    }
  }
};
</script>

<style scoped>
#SelfSpecial-Page .content-container {
  width: 90%;
  height: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.fix-keyword {
  position: relative;
  top: 65%
}

#SelfSpecial-Page .bg {
  background-position: center center;
  background-size: 100% 85%;
  background-repeat: no-repeat;
}

#SelfSpecial-Page .bg-boy {
  background-image: url('../assets/imgs/boy.jpg');
}

#SelfSpecial-Page .bg-girl {
  background: url('../assets/imgs/girl.jpg');
}
</style>