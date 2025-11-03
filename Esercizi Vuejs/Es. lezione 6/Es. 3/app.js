const { createApp } = Vue;

const app = createApp({
    data(){
        return {
            modaleAperta: true
        }
    }
});

app.component('modal-dialog', {
    template: `
        <div class="modal">
            <p>Finestra modale</p>
            <button @click="$emit('chiudi')">Chiudi</button>
        </div>
    `
})

app.mount("#app")