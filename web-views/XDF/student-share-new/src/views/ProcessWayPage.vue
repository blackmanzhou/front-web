<template>
  <div id="ProcessWay-Page">
    <div class="text-align-center">
      <img src="../assets/imgs/head-icon.jpg" alt class="margin-top-32 margin-bottom-48 z-index-500" style="z-index: 2">

      <div
        class="margin-8-16 bg-white border-radius-8 border-color-white text-align-center padding-16 padding-top-48"
      >
        <p class="font-size-24">{{studentName || NoName}}</p>
        <p class="padding-top-8 color-font-grey">A year's plan starts with spring.</p>
        <p class="padding-top-8 color-font-grey">{{keywordGroup}}</p>
      </div>
    </div>
    <div class="central-container margin-16" style="margin-top: 35%">
      <div class="class-group-list">
        <div
          v-for="(item, index) in classList"
          :key="index"
          :class="index === 0? '' : 'margin-top-8'"
          @click="goDetail(index)"
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
import { constants, resultMsg } from "@/common";
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
      NoName: resultMsg.NO_NAME,
      seasonTitle: constants.seasonTitle,
    };
  },
  created() {
  },
  computed: {
    studentName() {
      return this.$store.state.student.studentName
    },

    currentClass() {
      return this.$store.state.currentClass;
    },

    classList() {
      return this.$store.state.classList;
    },

    keywordGroup() {
      let keywordString = ''
      const classes = this.$store.state.classList
      if (classes && classes.length > 0) {
        classes.forEach((item, index) => {
          if (index > 2) {
            return;
          }
          const keyword = item.keyword || constants.defaultKeywords[index]
          if (index != (classes.length -1)) {
            keywordString += keyword + constants.linkSperator
          } else {
            keywordString += keyword
          }
        });
      }

      return keywordString
    }
  },
  methods: {
    goDetail(index) {
      this.changeCurrentClass(index)
      this.$router.push("/exclusive-energy");
    },
    changeCurrentClass(index) {
      this.$store.commit(
        mutation.CURRENTCLASS,
        this.$store.state.classList[index]
      );
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
  /* display: flex;
  justify-content: center;
  align-items: center; */
  height: 25%;
}

#ProcessWay-Page > div:first-child > img {
  height: 6rem;
  width: 6rem;
}
#ProcessWay-Page .class-group-list {
  width: 100%;
  height: 18.5rem;
  overflow: auto;
  overflow-x: hidden;
}
</style>


