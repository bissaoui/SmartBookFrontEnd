<template>
    <div class="container ">
        <h3 class="text-center"> 
            Create new SmartBook : 
        </h3>
        <div class="position p-3">
            <h4>
                Position : 
            </h4>
            
        <form>
  <div class="form-group">
    <label for="pays">country</label>
    <input type="text" class="form-control" id="pays"  placeholder="enter country">
  </div>
    <div class="form-group">
    <label for="city">city</label>
    <input type="text" class="form-control" id="city"  placeholder="enter city">
  </div>
  
</form>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name : 'CreateSmart',
    computed :{
      ...mapGetters(['user'])
    }  
}
</script>


<style scoped>
 .position{
     border: 1px rgb(107, 107, 107) solid;
     border-radius: 5px;
     
 }
</style>