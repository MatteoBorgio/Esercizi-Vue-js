const {createApp} = Vue;

createApp({
    data(){
        return {
            carrello: [
                {nome: 'Acqua', prezzo: 1.00},
                {nome: 'Pane', prezzo: 2.50},
                {nome: 'Latte', prezzo: 1.50},
                {nome: 'Formaggio', prezzo: 3.00}
            ]
        }
    },
    computed: {
        totaleCarrello(){
            return this.carrello.reduce((totale, prodotto) => totale + prodotto.prezzo, 0).toFixed(2);
        }
    }
}).mount('#app');