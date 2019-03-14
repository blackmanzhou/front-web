<template>
  <div
    id="book-item"
    class="margin-l-r-auto padding-t-b-16"
    :class="isShowBottom? 'border-bottom border-color-default': ''"
  >
    <img src="../assets/imgs/TheKiteRunner.jpg" alt class="margin-right-8">

    <div class="font-size-xsmall">
      <span class="line-height-24 font-size-16">《{{book.name}}》</span>
      <span class="line-height-24" style="text-indent: .625rem">{{book.author || '暂无'}}</span>
      <span class="line-height-24 text-overflow-lines two-space">{{book.summary || "暂无简介"}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookItemComponent",
  props: {
    book: {
      type: Object,
      default: () => {
        return {};
      }
    },
    isShowBottom: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
#book-item {
  height: 10.5rem;
  width: 90%;
  display: flex;
}

#book-item > img {
  width: 7.5rem;
}

#book-item > div:last-child {
  display: flex;
  flex-direction: column;
}
</style>


