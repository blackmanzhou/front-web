<template>
  <div id="Front-Page">
    <photo-wall></photo-wall>
    <v-touch v-on:swipeleft="goHomePage()">
      <div class="center-area">
        <div class="color-font-green">
          <p class="font-size-20 font-bold">一 年 之 『积』 始 于 春。</p>
          <p class="font-size-small">a choice you make, a change life waiting ahead</p>
        </div>
        <div>
          <p class="color-font-pink font-size-48">学员成长报告</p>
          <p class="color-font-blue font-size-32">春季 · 期中</p>
        </div>
        <div class="color-font-2c font-size-24">
          <ul>
            <li class="padding-16">{{studentName || NoDataMsg}}</li>
          </ul>
        </div>
      </div>
    </v-touch>
    <p>
      <img src="../assets/imgs/arrow.png" alt id="twinkleArrow">
    </p>
    <copyright-message></copyright-message>
  </div>
</template>

<script>
import { API } from "@/services";
import { mutation } from "@/store";
import { resultMsg } from "@/common";
import PhotoWall from "@/components/PhotoWall";
import CopyrightMessage from "@/components/CopyrightMessage";

export default {
  name: "FrontPage",
  components: {
    PhotoWall,
    CopyrightMessage
  },
  data() {
    return {
      NoDataMsg: resultMsg.NO_NAME,
      openid: "",
      schoolid: "",
      pageInfo: null
    };
  },
  beforeCreate() {},

  async created() {
    const params = this.$route.query;
    if (params) {
      this.openid = params.openid;
      this.schoolid = params.schoolid;
    }

    const accountInfo = await this.getStudentAccount();

    if (!this.openid || !accountInfo || !accountInfo.studentcode) {
      window.location.href =
        "http://wxpay.xdf.cn/silenceauthorize/view.do?schoolid=23&callid=25&parm=23";
    } else {
      const studentCode = accountInfo.studentcode;
      await this.render(studentCode);
    }
  },
  computed: {
    studentName() {
      return this.$store.state.student.studentName;
    },
    studentCode() {
      return this.$store.state.student.studentCode;
    }
  },
  mounted() {
    let opacityValue = 0;
    let arrowElement = document.getElementById("twinkleArrow");

    setInterval(() => {
      opacityValue += 0.1;

      if (arrowElement) {
        arrowElement.style.opacity = opacityValue;
        if (opacityValue > 1) {
          opacityValue = 0;
        }
      }
    }, 100);
  },
  methods: {
    async render(studentCode) {
      studentCode = "SZS136900";
      await this.getStudentBaseInfo(studentCode);

      if (!this.$store.state.student || !this.studentName) {
        alert(resultMsg.STUDENT_INFO_ERROR);
        return;
      }

      await this.getClassesByStudentCode(studentCode);
    },

    goHomePage() {
      if (!this.$store.state.student || !this.studentName) {
        alert(resultMsg.STUDENT_INFO_ERROR);
        return;
      }

      let router = this.$router;
      setTimeout(function() {
        router.push("/process-way");
      }, 300);
    },

    // 根据 openid 和 schoolid 获取账号信息
    async getStudentAccount() {
      let response = await API.featchStudentAccountInfo(
        this.openid,
        this.schoolid
      );
      return response.data;
    },

    // 获取该学生的所有课程
    async getClassesByStudentCode(studentCode) {
      let records = [];
      let response = await API.getProcessWayInfo(studentCode);

      if (response && response.data) {
        const classList = response.data.ClassList;
        if (classList && classList.length > 0) {
          for (let item of classList) {

            let classViewModel = {
                classCode: item.ClassCode,
                className: item.ClassName,
                subject: item.Subject,
                teacherCode: item.TeacherCode,
                teacherName: item.TeacherName,
            }
            
            const record = await this.getProgressRecord(
              studentCode,
              item.ClassCode
            );
            if (record) {
              classViewModel.keyword = record.keyword,
              classViewModel.teacherEvaluation = record.teacherEvaluation
              classViewModel.classPerformance = record.classPerformance
            }

            records.push(classViewModel)
          }
        }
      }
      
      this.$store.commit(mutation.CLASSLIST, records);
    },

    // 获取每门课程的成长记录
    async getProgressRecord(studentCode, classCode) {
      const record = await API.getProgressRecord(studentCode, classCode);
      return record;
    },

    // 获取学生基本信息
    async getStudentBaseInfo(studentCode) {
      let response = await API.getStudentBaseInfo(studentCode);
      if (response && response.data) {
        this.$store.commit(mutation.STUDENT, response.data.Student);
      }
    }

    // User Methods
  }
};
</script>

<style scoped>
#Front-Page {
  height: 100%;
  overflow: auto;
}
#Front-Page .header-area {
  width: 100%;
  height: 40%;
}
#Front-Page .center-area {
  position: absolute;
  top: 45%;
  width: 100%;
  margin: 5% 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 45%;
}
#Front-Page .center-area > div {
  width: 100%;
  text-align: center;
  padding: 0.5rem;
}

#Front-Page #twinkleArrow {
  width: 2rem;
  position: absolute;
  left: 90%;
  top: 60%;
}
</style>




