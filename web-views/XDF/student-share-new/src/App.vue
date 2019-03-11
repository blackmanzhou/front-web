<template>
  <div id="app" class="bg-default">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './assets/css/index.css';
@import './assets/css/color.css';

#app {
  height: 100%;
}
</style>
