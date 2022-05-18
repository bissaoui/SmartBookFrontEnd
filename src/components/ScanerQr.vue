<template>
    <div>
       
        <hr />

        <qrcode-capture @decode="onDecode" :capture="selected.value" />

    </div>
</template>

<script>
import { QrcodeCapture } from 'vue-qrcode-reader'
import axios from 'axios'

export default {

    name: 'ScanerQr',
    components: { QrcodeCapture },

    data() {
        const options = [
            { text: "rear camera (default)", value: "environment" },
        ]

        return {
            result: '',
            options,
            selected: options[0]
        }
    },

    methods: {
        onDecode(result) {
            this.result = result
            this.goToSmart()
        },
        async goToSmart(){
            this.$router.push("/DetailSmart/"+this.result);
            const response = await  axios.get('userScannedsb/'+localStorage.getItem('username')+'/'+this.result);
            console.log(response);
            this.$router.push("/DetailSmart/"+this.result);
        }

    }
}
</script>