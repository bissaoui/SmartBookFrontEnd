<template>
    <div>
        <h4>
            your Maps : 
        </h4>
        
        <GmapMap :center="{lat:coordinates.lat , lng: coordinates.lng}"
                :zoom="16"
                style="width:100% ; height: 360px;">
                </GmapMap>

    </div>
</template>
<script>
export default {
    
    props: ['getcor'],
    data () {
        return {
            coordinates : {
                lat : 0,
                lng : 0
            }
        }
    },
    watch :{
     //   coordinates(v){
      //     this.$emit("getcor",v)
      //  }
    },
    created(){
        this.$getLocation({})
        .then(coordinates => {
            this.coordinates = coordinates;
            this.$emit("getcor",this.coordinates);

        })
        .catch(error=> alert(error))
        
    },
    name :'MaP'
}
</script>
