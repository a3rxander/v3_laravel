import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedGuard from '../modules/auth/router/auth-guard'
import Home from '../views/Home.vue'
import authRoute from '../modules/auth/router' 
import articlesRoute from '../modules/articles/router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/auth',
    ...authRoute
  }, 
  {
    path:'/articles',
    beforeEnter:[isAuthenticatedGuard],
    ...articlesRoute
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
