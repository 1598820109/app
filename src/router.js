import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/index/Home.vue'
import Login from './views/login/Login.vue'
import Ask from './views/ask/ask.vue'
import Myself from './views/myself/myself.vue'
import Video from './views/video/video.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },
    
    {
      path: '/ask',
      name: 'ask',
      component: Ask
    },
    
    {
      path: '/myself',
      name: 'myself',
      component: Myself
    },
    
    {
      path: '/video',
      name: 'video',
      component: Video
    },
    
 
    

  ]
})
