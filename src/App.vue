<template>
  <div id="app">
   <NavBar />
   <div class="auth-wrapper">
    <div class="auth-inner">
            <router-view  />
    </div>
   </div>
  </div>

</template>

<script>
import axios from 'axios'

import NavBar from "@/components/Nav.vue"
export default {
  name: 'App',
  components : {
    NavBar,
  },
    async created(){
      if(localStorage.getItem('username')!=null){
            const response = await axios.post('api/user',{
                username : localStorage.getItem('username')
          },
          {headers:
           {
               'Content-Type': 'multipart/form-data'}
           }
          );

           this.$store.dispatch('user',response.data)

           console.log(response.data) 
}
    }
}
</script>
<style>
.auth-wrapper{
  margin-top: 70px;
}
</style>
