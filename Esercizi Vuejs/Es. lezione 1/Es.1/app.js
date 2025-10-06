const { createApp } = Vue;

createApp({
    data() {
        return {
            nome : 'Matteo'
            , cognome : 'Borgio'
            , città : 'Nichelino'
        }
    }
}).mount('#app');