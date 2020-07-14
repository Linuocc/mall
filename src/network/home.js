import {request} from "./request";

/**
 * 获取首页多个数据(轮播图、推荐)
 * @returns {AxiosPromise}
 */
export function getHomeMultidata() {
  return request({
    url:"/home/multidata"
  })
}

/**
 * 获取首页商品数据
 * @param type
 * @param page
 * @returns {AxiosPromise}
 */
export function getHomeGoods(type,page) {
  return request({
    url: '/home/data',
    params:{
      type,
      page
    }
  })
}
