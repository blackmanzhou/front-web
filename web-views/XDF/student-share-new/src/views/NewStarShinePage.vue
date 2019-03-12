<template>
  <div id="NewStarShine-Page" class="page-container">
    <v-touch
      class="section-content border-radius-8 border-color-default"
      v-on:swipeleft="goNext()"
      v-on:swiperight="goBack()"
      :swipe-options="{direction: 'horizontal'}"
    >
      <header-title :title="title"></header-title>
      <div class="margin-top-16 text-align-center">
        <img style="width: 75%" src="../assets/imgs/excellent.jpg" alt>
      </div>
      <div style="height:55%; overflow: auto">
        <p class="padding-r-l-16 margin-top-16">{{studentName || NoName}}同学</p>
        <p class="two-space padding-16 font-size-15 line-height-24">
          你是一个积极向上，有信心的孩子。学习上有计划、有目标，能够合理安排自己的时间，学习状态挺好；心态平和，关心、帮助同学，
          关心班集体，积极参加班级、学校组织的各项活动，具有较强的劳动观念，积极参加体育活动，尊敬师长。希望你再接再厉，不满足于现状，争取做得更好。
        </p>
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

