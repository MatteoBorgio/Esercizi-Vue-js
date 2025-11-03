const {createApp} = Vue;

const app = createApp({
    data() {
        return {
            rating: null
        }
    },
    methods: {
        impostaValutazione(stelle) {
            this.rating = stelle;
        }
    }
});

app.component('star-rating', {
    template: `
        <div>
            <button @click="$emit('imposta-valutazione', 1)">★</button>
            <button @click="$emit('imposta-valutazione', 2)">★</button>
            <button @click="$emit('imposta-valutazione', 3)">★</button>
            <button @click="$emit('imposta-valutazione', 4)">★</button>
            <button @click="$emit('imposta-valutazione', 5)">★</button>
        </div>
    `
});

app.mount("#app")