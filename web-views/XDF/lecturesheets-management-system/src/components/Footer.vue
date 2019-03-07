<template>
  <div id="footer">
    <span>{{copyright}}</span>
  </div>
</template>

<script>
import { resultMsg } from '@/common'
export default {
  name: 'FooterBar',
  props: {
    copyright: {
      type: String,
      default: resultMsg.SYS_COPYRIGHT_INFO
    }
  }
}
</script>

<style scoped>
</style>

