import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import './axios-configure'
import VueGeolocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps ,{
  load : {
    key : 'AIzaSyBVHG0Yko7cIxpKSPeo-00hoEH1S--exVM'
  },
})

Vue.config.productionTip = false
Vue.use(VueGeolocation)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
