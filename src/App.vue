<template>
  <div id="app">
    <!--保持路由活跃状态，不销毁-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>
<script>
  import MainTabBar from "components/content/mainTabbar/MainTabBar";

  export default {
    name: 'App',
    components: {MainTabBar},
  }

</script>

<style>
  @import "assets/css/base.css";
</style>
