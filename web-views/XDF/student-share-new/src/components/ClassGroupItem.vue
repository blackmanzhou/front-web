<template>
  <div id="class-group-item" class="border-radius-8 border-color-default padding-top-8">
    <div>
      <div>
        <div>
          <img
            v-if="classGroupObj.className.indexOf('数学') > 0"
            src="../assets/imgs/math.jpg"
            alt
            class="border-radius-4"
          >
          <img
            v-else-if="classGroupObj.className.indexOf('语文') > 0"
            src="../assets/imgs/chinese.jpg"
            alt
            class="border-radius-4"
          >
          <img
            v-else-if="classGroupObj.className.indexOf('英语') > 0"
            src="../assets/imgs/english.jpg"
            alt
            class="border-radius-4"
          >
          <img v-else src="../assets/logo.png" alt class="border-radius-4">
        </div>
        <div>
          <p style="display:flex;justify-content: space-between">
            <span class="color-font-2c">{{classGroupObj.className}}</span>
            <span
              class="color-font-white bg-color-orange border-color-orange border-radius-8 padding-8-2 font-size-xsmall"
            >查看详情</span>
          </p>
          <p class="color-font-grey font-size-small margin-top-4" style="display: flex; align-items: baseline">课堂表现：
            <star-rate :score="classGroupObj.classPerformance" class="font-size-16"></star-rate>
          </p>
          <div
            class="color-font-grey font-size-small margin-top-8 text-overflow"
            style="max-width: 13.75rem"
          >教师寄语：{{classGroupObj.teacherEvaluation}}</div>
        </div>
      </div>
      <div class="margin-top-4 padding-0-4">
        <span class="color-font-grey font-size-small">{{classGroupObj.timeInterval}}前</span>
        <span>
          <span
            class="color-font-grey margin-right-8 font-size-small"
          >{{classGroupObj.teacherName}}老师</span>
          <img src="../assets/imgs/head-icon.jpg" alt>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { constants } from "@/common";
import StarRate from "@/components/StarRate";

export default {
  name: "ClassGroupItemComponent",
  components: {
    StarRate
  },
  props: {
    classGroupObj: {
      type: Object,
      default: () => {
        return {
          className: constants.defaultClassName,
          classPerformance: constants.defaultClassPerformance,
          teacherEvaluation: constants.defaultTeacherEvaluation,
          timeInterval: constants.defaultIntervalTime,
          teacherName: constants.defaultTeacherName
        };
      }
    }
  }
};
</script>

<style scoped>
#class-group-item {
  width: 100%;
  background-color: #ffffff;
}

#class-group-item > div:first-child {
  width: 95%;
  margin: 0 auto;
}

#class-group-item > div:first-child > div:first-child {
  display: flex;
  justify-content: space-between;
}

#class-group-item > div:first-child > div:first-child > div:first-child > img {
  width: 6rem;
}

#class-group-item > div:first-child > div:last-child {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#class-group-item > div:first-child > div:last-child > span:last-child {
  display: flex;
  align-items: center;
}
#class-group-item > div:first-child > div:last-child > span:last-child > img {
  width: 1.5rem; /* 24/16 */
}
</style>


