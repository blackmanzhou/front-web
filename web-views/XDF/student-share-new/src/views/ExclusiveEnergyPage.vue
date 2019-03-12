<template>
  <div id="ExclusiveEnergy-Page" class="page-container">
    <v-touch
      class="section-content border-radius-8 border-color-default"
      v-on:swipeleft="goNext()"
      v-on:swiperight="goBack()"
    >
      <header-title :title="title"></header-title>
      <div id="radar-chart" :style="{width: '100%', height: '50%'}"></div>
      <div>
        <p class="padding-r-l-16" s>{{studentName || NoName}}同学</p>
        <p class="two-space padding-16 font-size-15 line-height-24">
          你是一个积极向上，有信心的孩子。学习上有计划、有目标，能够合理安排自己的时间，学习状态挺好；心态平和，关心、帮助同学，
          关心班集体，积极参加班级、学校组织的各项活动，具有较强的劳动观念，积极参加体育活动，尊敬师长。希望你再接再厉，不满足于现状，争取做得更好。
        </p>
      </div>
    </v-touch>
    <run-horse></run-horse>
  </div>
</template>

<script>
import { API } from "@/services";
import { mutation } from "@/store";
import { resultMsg } from "@/common";
import RunHorse from "@/components/RunHorse";
import HeaderTitle from "@/components/HeaderTitle";

export default {
  name: "ExclusiveEnergyPage",
  components: {
    RunHorse,
    HeaderTitle
  },
  data() {
    return {
      title: "课堂表现",
      NoName: resultMsg.NO_NAME,
      NoDataMsg: resultMsg.WAITING_FOR_TEACHER,
      chartOption: {
        radar: [
          {
            indicator: [
              { text: "课堂纪律", max: 5 },
              { text: "理解能力", max: 5 },
              { text: "运用能力", max: 5 },
              { text: "注意力", max: 5 },
              { text: "积极性", max: 5 }
            ],
            name: {
              textStyle: {
                color: "#2c2c2c",
                fontSize: 14
              }
            },
            splitNumber: 2,
            splitArea: {
              areaStyle: {
                color: "#fff"
              }
            },
            center: ["50%", "50%"],
            radius: 80
          }
        ],
        series: [
          {
            name: "成绩单",
            type: "radar",
            data: [
              {
                value: [5, 5, 3, 2, 5],
                name: "张三",
                symbol: "Rect",
                symbolSize: 6,
                itemStyle: {
                  color: "#867D9E"
                },
                lineStyle: {
                  normal: {
                    type: " dashed",
                    color: "#867D9E"
                  }
                },
                label: {
                  normal: {
                    show: true,
                    formatter: function(params) {
                      return params.value;
                    },
                    position: "bottom",
                    color: "#ff5152"
                  }
                }
              }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    console.log("echart 00000000");
    this.renderChart();
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
    classPerformance() {
      return this.$store.state.classPerformance;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goNext() {
      this.$router.push("/new-star-shine");
    },
    async load() {
      const response = await API.getExclusiveEnengyInfo(
        this.studentCode,
        this.classCode
      );
      console.log(response);
      if (response && response.data) {
        this.$store.commit(
          mutation.CLASSPERFORMANCE,
          this.convertClassPerformance(response.data.ClassPerformance)
        );
      }
    },
    convertClassPerformance(performance) {
      let newObj = {};

      if (performance) {
        newObj = {
          application: performance.CPApplication,
          attention: performance.CPAttention,
          comprehension: performance.CPComprehension,
          discipline: performance.CPDiscipline,
          positivity: performance.CPPositivity,
          evaluation: performance.CPNote
        };
      }

      return newObj;
    },

    renderChart() {
      let radarChart = this.$echarts.init(
        document.getElementById("radar-chart")
      );
      radarChart.setOption(this.chartOption);
    }
  }
};
</script>

<style scoped>
</style>


