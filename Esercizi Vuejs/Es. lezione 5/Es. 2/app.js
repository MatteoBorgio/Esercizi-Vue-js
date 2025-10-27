const { createApp } = Vue;

createApp({
    data() {
        return {
            width: 0,
            height: 0,
            bgColor: 'white'
        }
    }
}).mount("#app");