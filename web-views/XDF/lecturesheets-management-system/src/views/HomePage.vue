<template>
  <div id="home-page">
    <div class="home-page-container">
      <div class="flat-items">
        <flat-menu-item v-for="(item, index) in flatMenuItemList" :key="index" :flatContent="item"></flat-menu-item>
      </div>
    </div>
  </div>
</template>

<script>
import FlatMenuItem from "@/components/icon-group/FlatMenuItem";

export default {
  name: "HomePage",
  components: {
    FlatMenuItem
  },
  data() {
    return {
      flatMenuItemList: [
        {
          title: "消息",
          number: 521,
          iconClass: "fa fa-commenting color-commenting"
        },
        {
          title: "开销",
          number: 521,
          iconClass: "fa fa-rmb color-rmb"
        },
        {
          title: "库存",
          number: 521,
          iconClass: "fa fa-shopping-cart color-shopping-cart"
        }
      ]
    };
  }
};
</script>

<style scoped>
#home-page {
  height: 100%;
  width: 100%;
}

.home-page-container {
  padding: 2.5rem 1.25rem;
}

.home-page-container .flat-items {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}

.home-page-container .flat-items #flat-menu-item {
  font-size: 1rem /* 40/16 */;
  width: 20%;
  height: 7rem;
  cursor: pointer;
}
</style>




