<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";

  import {getDetail,Goods,shop} from "network/detail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo
    },
    data() {
      return {
        iid: null,
        topImages:[],
        goods:{},
        shop:{}
      }
    },
    created() {
      //保存id
      this.iid = this.$route.params.id;
      //请求数据
      getDetail(this.iid).then(res => {
        console.log(res);
        const data = res.result;
        //顶部轮播图数据
        this.topImages = data.itemInfo.topImages;
        //商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //店铺信息
        this.shop = new shop(data.shopInfo);
      })

    }
  }
</script>

<style scoped>

</style>
