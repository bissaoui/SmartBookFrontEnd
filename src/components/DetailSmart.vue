<template>
    <div class="container">

        <h1 class="text-center">Your SmartBook </h1>
        <div class="panels">
            <section>
                <h2>Details </h2>
                <p>title :{{ title }} </p>
                <p>phone number : {{ tele }} </p>
            </section>
            <section>
                <h2>Position </h2>
                <details>
                    <summary>see more</summary>
                    <ul>
                        <li>country : {{ pays }}</li>
                        <li>city : {{ city }}</li>
                        <li>adresse : {{ adresse }}</li>

                    </ul>
                    <iframe width="100%" height="200" style="border:0" loading="lazy" :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyDfzMyD_hsk0XT7HRqJPGyCiwtXBR8Urv4
                    &q='{{adresse}}'`" />
                </details>
            </section>
            <section>
                <h2>Social Media </h2>
                <p>
                    facebook : <a :href="facebook"> click </a>
                </p>
                <p>
                    instagram : <a :href="instagram"> click </a>
                </p>
                <p>
                    linkedin : <a :href="linkedin"> click </a>
                </p>
                <p>
                    whatsapp : {{ whatsapp }}
                </p>
                <p>
                    twitter : <a :href="twitter"> click </a>
                </p>
                <p>
                    snapchat : <a :href="snapchat"> click </a>
                </p>
            </section>
            <fieldset>
                <legend>Code Qr</legend>
                <div class="text-center">
                    <vue-qr :text="id"></vue-qr>
                </div>

            </fieldset>
        </div>
        <a href="" class="btn btn-primary"> </a>
    </div>
</template>
<script>
import router from '../router';
import axios from 'axios';
import VueQr from 'vue-qr'


export default {

    name: 'DetailSmart',
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
    async created() {
        this.id = this.$route.params.id;
        const response = await axios.get('SmartBook/' + this.id);
        console.log(response.data)
        this.title = response.data.titre;
        this.tele = response.data.tele;
        this.pays = response.data.position.pays;
        this.city = response.data.position.ville;
        this.facebook = response.data.reseauxSociaux.facebook;
        this.whatsapp = response.data.reseauxSociaux.whatsapp;
        this.instagram = response.data.reseauxSociaux.instagram;
        this.twitter = response.data.reseauxSociaux.twitter;
        this.snapchat = response.data.reseauxSociaux.snapchat;
        this.linkedin = response.data.reseauxSociaux.linkedin;
        this.lat = response.data.position.latitude;
        this.lng = response.data.position.longitude;
        this.adresse = response.data.adresse;
        this.dataa = response.data;



    },
    methods: {
        navigate() {
            router.go(-1);
        },
        handleSubmit() {


        }
    }
}
</script>
<style>
.panels {
    --panel-background: #12345678;
    --panel-gap: .5em;
    --panel-header-size: 2em;
}

.panels section,
.panels fieldset {
    position: relative;
    margin: calc(var(--panel-gap) + var(--panel-header-size)) var(--panel-gap) 0;
    padding: var(--panel-gap);
    background: var(--panel-background);
}

.panels section>h1,
.panels section>h2,
.panels section>h3,
.panels section>h4,
.panels section>h5,
.panels section>h6,
.panels section legend,
.panels fieldset>h1,
.panels fieldset>h2,
.panels fieldset>h3,
.panels fieldset>h4,
.panels fieldset>h5,
.panels fieldset>h6,
.panels fieldset legend {
    position: absolute;
    top: calc(-0.75 * var(--panel-header-size));
    font-size: calc(.75 * var(--panel-header-size));
    font-weight: 400;
}

.panels fieldset {
    border: none;
}

.panels fieldset>legend {
    top: calc(-.6 * var(--panel-header-size));
}


/**
 * Basics (not very interesting)
 */

@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');



body {

    color: rgb(0, 0, 0);
    font-family: 'Nunito', sans-serif;
}
</style>