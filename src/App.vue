<template>
  <div id="app">
   <NavBar />
   <div class="auth-wrapper">
    <div class="auth-inner">
            <router-view />
    </div>
   </div>
  </div>

</template>

<script>

import NavBar from "@/components/Nav.vue"
export default {
  name: 'App',
  components : {
    NavBar,
  }
}
</script>
<style>
.auth-wrapper{
  margin-top: 70px;
}
</style>
