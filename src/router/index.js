import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Mycollections from "../views/Mycollections.vue"
import Createcollection from "../views/Createcollection.vue"
import {getAuth} from "firebase/auth";
import { app } from '../firebase/config'


const routeProtection=(to,from,next)=> {

  let auth= getAuth();

  if(!auth.currentUser) {
    next({name:"Home"})
  } else {
    next()
  }

}

const protectionUnrequired= (to,from,next)=> {

  let auth= getAuth();

  if(auth.currentUser) {
    next({name:"Home"})
  } else {
    next();
  }


}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter:protectionUnrequired
  },

  {
    path:"/register",
    name:"Register",
    component:Register,
    beforeEnter:protectionUnrequired
  },
  {
    path: "/mycollections",
    name:"Mycollections",
    component: Mycollections,
    beforeEnter: routeProtection
  },
  {
    path:"/createcollection",
    name:"Createcollection",
    component:Createcollection,
    beforeEnter: routeProtection
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
