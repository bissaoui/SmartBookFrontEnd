<template>
    <div class="container" >
       <h2 v-if="user"> Welcome {{user.nom}} {{user.prenom}}   </h2>
        <h2 v-if="!user">Welcome Home</h2>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name : 'HomE',
    data() {
        return {
            user : null
        }
    },
    async created(){
            const response = await axios.post('api/user',{
                username : localStorage.getItem('username')
          },
          {headers:
           {
               'Content-Type': 'multipart/form-data'}
           }
          );

            this.user=response.data
                    console.log(response.data) 

    }
}
</script>
<style scoped>
body{
    margin-top: 60px;
}
</style>