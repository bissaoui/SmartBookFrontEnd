<template>
    <div class="container" >
       <h2 v-if="user"> Welcome {{user.nom}} {{user.prenom}}   </h2>
        <h2 v-if="!user">Welcome Home</h2>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    name : 'HomE',
  computed :{
      ...mapGetters(['user'])
    }  
}
</script>
<style scoped>
body{
    margin-top: 60px;
}
</style>