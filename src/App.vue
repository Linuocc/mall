<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>
<script>
  import MainTabBar from "components/content/mainTabbar/MainTabBar";
  export default {
    name:'App',
    components: {MainTabBar},
    comments:{
      MainTabBar
    }
  }

</script>

<style>
  @import "assets/css/base.css";
</style>
