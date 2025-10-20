const {createApp} = Vue;

createApp({
    data(){
        return{
            input: '',
            errore: ''
        }
    },
    watch: {
        input(nuovoInput){
            if (nuovoInput.length > 0 && nuovoInput.length < 5){
                this.errore = "Username troppo corto";
            } else {
                this.errore = "";
            }
        }
    }
}).mount('#app');