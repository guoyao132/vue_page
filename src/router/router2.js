import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import indxhtml from '../view/Indexhtml'
import page2html from '../view/Page2hrml'

const router = new Router({
  routes: [
    {
      path: '/indexhtml',
      name: 'indexhtml',
      component: indxhtml
    },
    {
      path: '/page2html',
      name: 'page2html',
      component: page2html,
    },
  ]
});
export default router;