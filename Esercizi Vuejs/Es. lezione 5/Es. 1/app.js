const {createApp} = Vue;

createApp({
    data(){
        return{
            successo: false,
            errore: false
        }
    },  
    methods:{
        messaggio_errore(){
            this.successo = false;
            this.errore = true;
        },
        messaggio_successo(){
            this.errore = false;
            this.successo = true;
        }
    }
}).mount("#app");