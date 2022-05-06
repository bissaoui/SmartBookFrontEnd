import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import CreateSmart from './components/CreateSmart.vue'

export default new  Router ({
    mode: 'history',
    hash: false,  
    routes : [
        {
            path :'/',
            component :Home
        },
        {
            path :'/login',
            component :Login
        },
        {
            path :'/register',
            component :Register
        },
        {
            path :'/newBook',
            component :CreateSmart
        }
    ]
})

Vue.use(Router)
