const {createApp} = Vue;

const app = createApp({});

app.component('saluto-utente', {
    data(){
        return{
            messaggio: 'Benvenuto nella nostra applicazione!'
        }
    },
    template: `<div>{{ messaggio }}</div>`
});


app.mount('#app');