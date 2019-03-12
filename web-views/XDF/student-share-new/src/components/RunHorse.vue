<template>
  <div id="run-horse">
    <ul class="ul-flex">
      <li v-for="(item, index) in pageList" :key="index" class="font-size-xsmall color-font-white margin-l-r-10">
        <p v-if="(index + 1) == currentIndex" class="current-page bg-color-orange border-color-orange border-radius-8">{{item}}</p>
        <p v-else class="bg-color-pink round-point"></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RunHorseComponent',
  props: {
    currentIndex: {
      type: Number,
      default: 1
    },
    pageList: {
      type: Array,
      default: () => {
        return  ['课堂表现', '能力诊断', '关键词', '寄语', '推荐读物', '精彩瞬间']     
      }
    }
  }
}
</script>

<style scoped>
#run-horse {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#run-horse>ul {
  justify-content: center;
  align-items: center;
}

#run-horse .current-page {
  width: 4.5rem /* 72/16 */;
  text-align: center
}
</style>

