<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :top-images="topImages"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";

  import {getDetail,Goods,shop} from "network/detail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper
    },
    data() {
      return {
        iid: null,
        topImages:[],
        goods:{}
      }
    },
    created() {
      //保存id
      this.iid = this.$route.params.id;
      //请求数据
      getDetail(this.iid).then(res => {
        console.log(res);
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(data.itemInfo,)
      })

    }
  }
</script>

<style scoped>

</style>
