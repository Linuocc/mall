<template>
  <div id="home">
    <!--标题栏-->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!--滚动区域-->
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="loadMore">
      <!--首页轮播图-->
      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control
        class="tab-control"
        :titles="['流行','新款','精选']"
        @tabClick="tabClick"
        ref="tabControl">

      </tab-control>
      <goods-list :goods="showGoods"/>


    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>

  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";//轮播子组件
  import RecommendView from "./childComps/RecommendView";//推荐子组件
  import FeatureView from "./childComps/FeatureView";//特色子组件

  import NavBar from "components/common/navbar/NavBar";//导航栏公共组件
  import TabControl from "components/content/tabControl/TabControl";//tab控件公共组件
  import GoodsList from "components/content/goods/GoodsList";//商品列表公共组件
  import Scroll from "components/common/scroll/Scroll";//轮动公共组件
  import BackTop from "components/content/backTop/BackTop";//返回顶部公共组件

  import {getHomeMultidata, getHomeGoods} from "network/home";//首页获取数据方法

  import {debounce} from "common/utils";//公共函数

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,

      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidata();
      //2.请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 500)
      //在mounted中才可以拿到this.$refs
      //3.监听goodsItem中发送到事件总线的事件
      this.$bus.$on('itemImageLoad', () => {
        //防抖
        refresh();
      })
      //2.获取tabControl的offsetTop
      //所有组件都有一个属性：$el,获取组件中的元素
      console.log(this.$refs.tabControl.$el.offsetTop);
    },
    methods: {

      /**
       * 网络请求
       */
      //获取数据封装
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res);//打印数据
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },

      //获取首页商品数据
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          // console.log(res);//打印数据
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        })
      },

      /**
       * 事件监听
       */
      //tab切换
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
      },

      //回到顶部
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        if (-(position.y) > 1000) {
          this.isShowBackTop = true;
        } else {
          this.isShowBackTop = false;
        }
      },
      //上拉加载更多
      loadMore() {
        this.getHomeGoods(this.currentType);
        this.$refs.scroll.finishPullUp();
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background: var(--color-tint);
    color: white;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;

  }

  /*.content{*/
  /*  height: calc(100vh - 93px);*/
  /*  overflow: hidden;*/
  /*}*/
</style>
