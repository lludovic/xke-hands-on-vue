// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Basket from './components/basket.vue'
import Books from './components/books.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/books', component: Books },
  { path: '/basket', component: Basket }
]

const router = new VueRouter({
  routes // short for routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
})
