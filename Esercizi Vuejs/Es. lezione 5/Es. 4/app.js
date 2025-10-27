const {createApp} = Vue;

const app = createApp({});

app.component('info-card', {
    data(){
        return{
            titolo: 'Titolo della Card',
            descrizione: 'Contenuto della card'
        }
    },
    template: `<div>
                 <h2>{{ titolo }}</h2>
                 <p>{{ descrizione }}</p>
               </div>`
})

app.mount('#app');