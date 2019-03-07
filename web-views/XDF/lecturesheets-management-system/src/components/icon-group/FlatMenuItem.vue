<template>
  <div id="flat-menu-item">
    <span>
      <i :class="flatContent.iconClass" aria-hidden="true"></i>
    </span>
    <span>
      <p>{{flatContent.title}}</p>
      <p>{{flatContent.number}}</p>
    </span>
  </div>
</template>

<script>
export default {
  name: "FlatMenuItem",
  props: {
    flatContent: {
      type: Object,
      default: () => {
        return {
          title: "Message",
          number: 521,
          iconClass: "fa fa-commenting"
        };
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
#flat-menu-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
}

#flat-menu-item > span:first-child {
  font-size: 3.75rem /* 60/16 */;
}

#flat-menu-item > span:last-child {
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#flat-menu-item > span:last-child>p{
  text-align: center
}

#flat-menu-item > span:last-child>p:first-child {
  color: #515151;
}

#flat-menu-item > span:last-child>p:last-child {
  font-weight: bold;
}
</style>

