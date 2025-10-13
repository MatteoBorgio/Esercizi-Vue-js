const {createApp} = Vue;

createApp({
    data(){
        return{ 
            nome: '',
            sesso: '',
            nazione: '',
            riepilogoTesto: ''
        }
    },
    methods:{
        riepilogo(){
            this.riepilogoTesto = `Nome: ${this.nome}, sesso: ${this.sesso}, nazione: ${this.nazione}.`
        }
    }
}).mount('#app');