import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import indxhtml from '../view/Indexhtml'
import page1html from '../view/Page1hrml'

const router = new Router({
  routes: [
    {
      path: '/indexhtml',
      name: 'indexhtml',
      component: indxhtml
    },
    {
      path: '/page1html',
      name: 'page1html',
      component: page1html,
    },
  ]
});
export default router;