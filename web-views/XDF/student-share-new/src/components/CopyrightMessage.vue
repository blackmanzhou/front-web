<template>
  <div id="copyright">{{copyright}}</div>
</template>

<script>
import { constants } from '@/common'

export default {
  name: "CopyrightMessageComponent",
  props: {
    copyright: {
      type: String,
      default: constants.defaultCopyRight
    }
  }
};
</script>

<style scoped>
#copyright {
  width: 100%;
  text-align: center;
  padding: .125rem /* 2/16 */ 0
}
</style>


