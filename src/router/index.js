import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import("views/home/Home")
  },
  {
    path: '/classify',
    component: () => import("views/classify/Classify")
  },
  {
    path: '/shopping',
    component: () => import("views/shopping/Shopping")
  },
  {
    path: '/profile',
    component: () => import("views/profile/Profile")
  },
  {
    path: '/detail/:id',
    component: () => import("views/detail/Detail")
  }
]

const router = new VueRouter({
  routes
})

export default router
