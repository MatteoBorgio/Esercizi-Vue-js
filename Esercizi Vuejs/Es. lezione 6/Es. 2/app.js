const { createApp } = Vue;

const app = createApp({
    data(){
        return {
            messaggio: "Questo è un messaggio",
            tipo: "error"
        }
    }
});

app.component('alert-box', {
    props: {
        messaggio: String,
        tipo: String
    },
    template: `
        <div :class="tipo">
            <p>{{ messaggio }}</p>
        </div>
    `
});

app.mount("#app")