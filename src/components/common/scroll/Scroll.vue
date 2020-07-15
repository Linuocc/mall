<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';

  export default {
    name: "Scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      //创建对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad
      })

      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position);
      })

      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })

      // 更新scroll
      this.scroll.refresh();
    },
    methods: {
      // 滚动到指定位置
      scrollTo(x, y, time = 300) {
        this.scroll.scrollTo(x, y, time);
      },
      //上拉触底完成
      finishPullUp(){
        this.scroll.finishPullUp();
      },
      //重新计算高度
      refresh(){
        this.scroll.refresh();
      }
    }
  }
</script>

<style scoped>

</style>
