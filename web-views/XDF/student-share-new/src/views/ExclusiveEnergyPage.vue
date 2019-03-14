<template>
  <div id="ExclusiveEnergy-Page" class="page-container">
    <v-touch
      class="section-content border-radius-8 border-color-default"
      v-on:swipeleft="goNext()"
      v-on:swiperight="goBack()"
      :swipe-options="{direction: 'horizontal'}"
    >
      <header-title :title="title" :className="className"></header-title>
      <div id="radar-chart" :style="{width: '100%', height: '50%'}"></div>
      <div style="height: 35%; overflow: auto; margin-top: -1.5rem" :class="classPerformance.teacherEvaluation? '' : 'bg-no-data'">
        <p class="padding-r-l-16">{{studentName || NoName}}同学</p>
        <p class="two-space padding-r-l-16 padding-top-8 font-size-15 line-height-24">{{classPerformance.teacherEvaluation || NoDataMsg}}</p>
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
      return this.$store.state.student.studentName
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
      console.log(this.chartOption)
      this.chartOption.series[0].data[0].value = [
        this.classPerformance.discipline,
        this.classPerformance.comprehension,
        this.classPerformance.application,
        this.classPerformance.attention,
        this.classPerformance.positivity
      ]
      radarChart.setOption(this.chartOption);
    }
  }
};
</script>

<style scoped>
</style>


