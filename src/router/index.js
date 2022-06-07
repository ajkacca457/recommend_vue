import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Mycollections from "../views/Mycollections.vue"
import Createcollection from "../views/Createcollection.vue"


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path:"/register",
    name:"Register",
    component:Register
  },
  {
    path: "/mycollections",
    name:"Mycollections",
    component: Mycollections
  },
  {
    path:"/createcollection",
    name:"Createcollection",
    component:Createcollection
  }


  //, {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
