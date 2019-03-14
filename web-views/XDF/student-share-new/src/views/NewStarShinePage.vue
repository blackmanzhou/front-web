<template>
  <div id="NewStarShine-Page" class="page-container">
    <v-touch
      class="section-content border-radius-8 border-color-default"
      v-on:swipeleft="goNext()"
      v-on:swiperight="goBack()"
      :swipe-options="{direction: 'horizontal'}"
    >
      <header-title :title="title" :className="className"></header-title>
      <div class="margin-top-16 text-align-center">
        <img v-if="gradeInfo.grade == '优秀'" style="width: 75%" src="../assets/imgs/excellent.jpg" alt>
        <img v-else-if="gradeInfo.grade == '良好'" style="width: 75%" src="../assets/imgs/well.jpg" alt>
        <img v-else-if="gradeInfo.grade == '中等'" style="width: 75%" src="../assets/imgs/medium.jpg" alt>
        <img v-else style="width: 75%" src="../assets/imgs/bad.jpg" alt>
      </div>
      <div style="height:55%; overflow: auto">
        <p class="padding-r-l-16 margin-top-16">{{studentName || NoName}}同学</p>
        <p class="two-space padding-16 font-size-15 line-height-24">{{gradeInfo.evaluation}}</p>
      </div>
    </v-touch>
    <run-horse :currentIndex="2"></run-horse>
  </div>
</template>

<script>
import { API } from "@/services";
import { mutation } from "@/store";
import { resultMsg } from "@/common";
import RunHorse from "@/components/RunHorse";
import HeaderTitle from "@/components/HeaderTitle";

export default {
  name: "NewStarShinePagePage",
  components: {
    RunHorse,
    HeaderTitle
  },
  data() {
    return {
      NoName: resultMsg.NO_NAME,
      NoDataMsg: resultMsg.WAITING_FOR_TEACHER,
      title: "能力诊断"
    };
  },
  async created() {
    await this.load();
  },
  computed: {
    studentName() {
      return this.$store.state.student.studentName;
    },
    studentCode() {
      return this.$store.state.student.studentCode;
    },
    classCode() {
      return this.$store.state.currentClass.classCode;
    },
    className() {
      return this.$store.state.currentClass.className;
    },
    gradeInfo() {
      return this.$store.state.xdfGrade;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goNext() {
      this.$router.push("/self-special");
    },
    async load() {
      let response = await API.getNewStarShineInfo(
        this.studentCode,
        this.classCode
      );
      console.log(response);
      if (response && response.data) {
        const gradeList = response.data.XDFGradeList;
        if (gradeList && gradeList.length > 0) {
          this.$store.commit(
            mutation.XDFGRADE,
            this.convertGrade(gradeList[0])
          );
        }
      }
    },
    convertGrade(data) {
      let grade = {
        score: data.XGScore,
        fullScore: data.XGFullScore,
        examType: data.XGExamType,
        subject: data.XGSubject,
        evaluation: data.XGDescribe,
        grade: this.mapGradeByScore(data.XGScore, data.XGFullScore)
      };

      return grade;
    },
    mapGradeByScore(score, fullScore) {
      let index = 0;
      const scoreRate = score / fullScore;
      const Grades = ["优秀", "良好", "中等", "及格", "不及格"];

      if (scoreRate < 0.6) {
        index = 4;
      } else if (scoreRate < 0.7) {
        index = 3;
      } else if (scoreRate < 0.8) {
        index = 2;
      } else if (scoreRate < 0.9) {
        index = 1;
      }

      return Grades[index];
    }
  }
};
</script>

<style scoped>
</style>

