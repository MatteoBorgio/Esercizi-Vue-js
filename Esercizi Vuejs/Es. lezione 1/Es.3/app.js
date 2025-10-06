const {createApp} = Vue;

createApp({
    data(){
        return{
            src : "https://vuejs.org/images/logo.png"
            , immagineDisabilitata: true
        }
    }
}).mount('#app')