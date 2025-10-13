const {createApp} = Vue;

createApp({
    data(){
        return{
            messaggio: "Clicca il bottone"
        }
    },
    methods:{
        cambiaMessaggio(){
            this.messaggio = "Hai cliccato il bottone!"
        }
    }
}).mount("#app");