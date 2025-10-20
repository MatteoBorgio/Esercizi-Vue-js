const {createApp} = Vue;

createApp({
    data(){
        return{
            messaggio: '',
            contenuto: ''
        }
    },
    watch: {
        contenuto(newValue, oldValue){
            if(newValue != oldValue){
                this.salvataggio();
            }
        }
    },
    methods: {
        salvataggio(){
            this.messaggio = 'Salvataggio in corso...';
            setTimeout(() => {
                this.messaggio = 'Salvato!';
            }, 1000);
        }
    }
}).mount('#app');