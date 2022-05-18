<template>
    <div class="container">
        <div class="row">
            <div class="card p-1 m-3 text-center" style="width: 18rem;" v-for="item in dataa" :key="item.idSmart" >
            <a :href="'/DetailSmart/'+item.idSmart" class="card-link" style="color :black">
                <div class="card-body ">
                    <h5 class="card-title ">{{ item.titre }}</h5>
                    <vue-qr :text="item.idSmart + ''"></vue-qr>
                    
                </div>
                </a>
            </div>
        </div>

    </div>

</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios';
import VueQr from 'vue-qr'

export default {
    name: 'ListScanned',
    components: {
        VueQr,

    },
    data() {
        return {
            id: 0,
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
            lat: '',
            lng: '',
            dataa: undefined
        }
    },
    created() {
    }
    , watch: {
        user(v) {
            if (v) {
                this.fun(v.id)
            }
        }
    }
    ,
    methods: {
        async fun(idd) {
            const response = await axios.get('SmartBook/s/' + idd);
            console.log(idd)
            this.dataa = response.data;
            console.log(this.dataa)

        }
    },
    computed: {
        ...mapGetters(['user'])
    },
}
</script>