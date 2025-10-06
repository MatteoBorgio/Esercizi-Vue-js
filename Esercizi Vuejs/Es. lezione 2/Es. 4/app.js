const {createApp} = Vue;
createApp({
    data(){
        return{
            arrayProdotti: [
                {id: 1, nome: "Smartphone", prezzo: 599},
                {id: 2, nome: "Tablet", prezzo: 399},
                {id: 3, nome: "Laptop", prezzo: 999},
                {id: 4, nome: "Smartwatch", prezzo: 199},
                {id: 5, nome: "Cuffie", prezzo: 149}
            ]
        }
    }}).mount('#app');