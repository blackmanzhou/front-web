<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  height: 100%;
}

.section-content {
    width: 90%;
    height: 90%;
    margin: 0 auto;
    color: #9996CD;
    background-color: #fff;
    font-weight: bold
}

.section-content .title {
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    height: 5%;
    margin-top: .625rem;
}
.section-content .class-name {
  text-align: center;
  font-size: 0.625rem;
  color: #4E95FF;
}

.section-content .title>span {
    display: inline-block;
    border-bottom: 8px solid #DAE9F9;
    line-height: .4;
    width: 40%;
}

.section-content .btn-close {
    position: absolute;
    top: 5%;
    right: 5%;
    width: 3rem;
}

.section-content .btn-close>img {
    width: 100%
}

.section-content .content-area {
    height: 80%;
    overflow: auto;
    padding: 1.625rem;
    font-size: 0.95rem;
}

.NO-data {
  background-image: url('./assets/imgs/waiting.gif');
  background-size: 150%;
  background-repeat: no-repeat;
  background-position: 50%;
}
</style>
