const { createApp } = Vue;

const app = createApp({
    data(){
        return {
            productArray: [
                { id: 1, nomeProdotto: "Smartphone", prezzo: 600},
                { id: 2, nomeProdotto: "Tablet", prezzo: 750},
                { id: 3, nomeProdotto: "Computer", prezzo: 1000}
            ]
        }
    }
});

app.component('product-card', {
    props: {
        nomeProdotto: String,
        prezzo: Number
    },
    template: `
        <div class="box">
            <p>{{ nomeProdotto }} - {{ prezzo }}€</p>
        </div>
    `
})

app.mount("#app")