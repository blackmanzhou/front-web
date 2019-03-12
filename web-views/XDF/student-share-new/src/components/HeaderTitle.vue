<template>
  <div
    id="header-title"
    class="padding-16"
    :class="isShowBottom? 'border-bottom border-color-default' : ''"
  >
    <p class="font-size-20" style="display: flex">
      <span class="bg-color-pink border-2 border-color-pink margin-right-8 font-size-xsmall"></span>
      {{title}}
    </p>
    <p class="color-font-c margin-top-4">{{className}}</p>
  </div>
</template>

<script>
import { constants } from "@/common";

export default {
  name: "HeaderTitleComponent",
  props: {
    isShowBottom: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: constants.defaultTitle
    },
    className: {
      type: String,
      default: constants.defaultClassName
    }
  }
};
</script>

