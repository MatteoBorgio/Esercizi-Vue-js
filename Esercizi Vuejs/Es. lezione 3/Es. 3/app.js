const {createApp} = Vue;

createApp({
    data(){
        return{ 
            valoreInKg: 0
        }
    },
    methods:{
        convertiInGrammi(){
            return this.valoreInKg * 1000;
        }
    }
}).mount('#app');