const {createApp} = Vue;

createApp({
    data(){
        return{
            età: null
        }
    },
    computed:{
        messaggioEtà(){
            if (this.età === null || this.età === '') {
            return '';
        }
            else {
            return this.età >= 18 ? 'Sei maggiorenne' : 'Sei minorenne';
        }
    }
    }
}).mount('#app');