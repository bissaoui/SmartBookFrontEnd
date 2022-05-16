import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import CreateSmart from './components/CreateSmart.vue'
import DetailSmart from './components/DetailSmart.vue'
import ListSmart from './components/ListSmart.vue'

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) {
          next('/');
        } else {
          next();
        }
      }
    },
    {
      path: '/register',
      component: Register,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) {
          next('/');
        } else {
          next();
        }
      }
    },
    {
      path: '/newBook',
      component: CreateSmart,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) {
          next();
          console.log(localStorage.getItem('token'))
        } else {
          next('/');
        }
      }
    },
    {
      path: '/DetailSmart/:id',
      component: DetailSmart,
    }, {
      path: '/ListSmart',
      component: ListSmart,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) {
          next();
          console.log(localStorage.getItem('token'))
        } else {
          next('/');
        }
      }
    },
  ]
})

Vue.use(Router)
