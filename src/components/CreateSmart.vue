<template>
  <div class="container" @submit.prevent="handleSubmit">
    <h3 class="text-center">
      Create new SmartBook :
    </h3>
    <form>

      <div class="position  p-3 m-2">
        <h4>
          Details :
        </h4>
        <div class="form-group">
          <label for="titre">title </label>
          <input type="text" class="form-control" id="titre" v-model="title" placeholder="enter title">
        </div>
        <div class="form-group">
          <label for="tele">phone number </label>
          <input type="text" class="form-control" id="tele" v-model="tele" placeholder="enter title">
        </div>
      </div>
      <div class="position p-3 m-2">
        <h4>
          Position :
        </h4>
        <div class="form-group">
          <label for="pays">country </label>
          <input type="text" class="form-control" id="pays" v-model="pays" placeholder="enter country">
        </div>
        <div class="form-group">
          <label for="city">city</label>
          <input type="text" class="form-control" id="city" v-model="city" placeholder="enter city">
        </div>
        <div class="form-group">
          <label for="adresse">adresse</label>
          <input type="text" class="form-control" id="adresse" v-model="adresse" placeholder="enter your adresse">
        </div>

        <Map @getcor="getcor" />

      </div>
      <div class="position  p-3 m-2">
        <h4>
          Social media :
        </h4>
        <div class="form-group">
          <label for="facebook">facebook </label>
          <input type="url" class="form-control" id="facebook" v-model="facebook"
            placeholder="enter link of your facebook">
        </div>
        <div class="form-group">
          <label for="instagram">instagram </label>
          <input type="url" class="form-control" id="instagram" v-model="instagram"
            placeholder="enter link of your instagram">
        </div>
        <div class="form-group">
          <label for="linkedin">linkedin </label>
          <input type="url" class="form-control" id="linkedin" v-model="linkedin"
            placeholder="enter link of your linkedin">
        </div>
        <div class="form-group">
          <label for="whatsapp">whatsapp </label>
          <input type="tel" class="form-control" id="whatsapp" v-model="whatsapp" placeholder="enter your whatsapp">
        </div>
        <div class="form-group">
          <label for="twitter">twitter </label>
          <input type="url" class="form-control" id="twitter" v-model="twitter"
            placeholder="enter link of your twitter">
        </div>
        <div class="form-group">
          <label for="snapchat">snapchat </label>
          <input type="url" class="form-control" id="snapchat" v-model="snapchat" placeholder="enter your snapchat">
        </div>

        <button class="btn btn-primary w-100">
          valider
        </button>
      </div>

    </form>

  </div>
</template>

<script>
import Map from './Map.vue'
import { mapGetters } from 'vuex'
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      tele: '',
      pays: '',
      city: '',
      facebook: '',
      whatsapp: '',
      linkedin: '',
      instagram: '',
      twitter: '',
      snapchat: '',
      adresse: '',
      coordinates: undefined
    }
  },
  name: 'CreateSmart',
  components: {
    Map
  },

  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    async handleSubmit() {
      var dataa = {
        "titre": this.title,
        "adresse": this.adresse,
        "tele": this.tele,
        "user": {
          "id": this.user.id
        },
        "reseauxSociaux": {
          "facebook": this.facebook,
          "linkedin": this.linkedin,
          "whatsapp": this.whatsapp,
          "twitter": this.twitter,
          "instagram": this.instagram,
          "snapchat": this.snapchat

        },
        "position": {
          "pays": this.pays,
          "ville": this.city,
          "latitude": this.coordinates.lat,
          "longitude": this.coordinates.lng
        }
      };
        const response = await  axios.post('SmartBook',dataa);

      console.log(response.data.idSmart)

      this.$router.push("/DetailSmart/"+response.data.idSmart)


    }
    ,
    getcor(coordinates) {
      this.coordinates = coordinates
    }
  },
  props: {

  }
}
</script>


<style scoped>
.position {
  border: 1px rgb(107, 107, 107) solid;
  border-radius: 5px;

}
</style>