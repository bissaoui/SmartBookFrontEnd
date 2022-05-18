<template>
     <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto" v-if="!user">
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="register" class="nav-link">Sing up</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto" v-if="user">
             <li class="nav-item">
              <router-link to="/newBook"  class="nav-link">Create SmartBook</router-link>
            </li>
               <li class="nav-item">
              <a href="/ListSmart"  class="nav-link">All My SmartBook</a>
            </li>
               <li class="nav-item">
              <a href="/Scanned"  class="nav-link">SmartBook Scaned</a>
            </li>
            <li class="nav-item">
              <a href="" @click="handleClick" class="nav-link">Logout</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
</template>
<script>

import {mapGetters} from 'vuex'
export default {
    name : 'NavBar',
    methods : {
      handleClick (){
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        this.$store.dispatch('user',null)
        this.$router.push('/')
      }
    },
    computed :{
      ...mapGetters(['user'])
    }

}
</script>
