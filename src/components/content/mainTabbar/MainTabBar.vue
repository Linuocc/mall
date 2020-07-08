<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="#FF710F" color="#C6CCDA">
      <img src="~assets/img/tabbar/index.png" slot="item-icon">
      <img src="~assets/img/tabbar/index_act.png" slot="item-icon-active">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/classify" active-color="#FF710F" color="#C6CCDA">
      <img src="~assets/img/tabbar/classify.png" slot="item-icon">
      <img src="~assets/img/tabbar/classify_act.png" slot="item-icon-active">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopping" active-color="#FF710F" color="#C6CCDA">
      <img src="~assets/img/tabbar/shopping.png" slot="item-icon">
      <img src="~assets/img/tabbar/shopping_act.png" slot="item-icon-active">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" active-color="#FF710F" color="#C6CCDA">
      <img src="~assets/img/tabbar/profile.png" slot="item-icon">
      <img src="~assets/img/tabbar/profile_act.png" slot="item-icon-active">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
