import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/Home.vue'
import about from './about'
import test from './../views/teste'
import error from './../views/error'
import client from './client'
import product from './product'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '*',
      name: '404',
      component: error
    },
    ...about,
    ...client,
    ...product
  ]
})
