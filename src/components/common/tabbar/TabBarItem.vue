<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      },
      color:{
        type: String,
        default: "black"
      }
    },
    data() {
      return {}
    },
    computed: {
      isActive() {
        return this.$route.path == this.path
      },
      activeStyle() {
        return this.isActive?{color:this.activeColor}:{color:this.color}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }

  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    color: #C6CCDA;
  }

  .tab-bar-item img {
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
