const {createApp} = Vue;

createApp({
    data(){
        return{
            luceAccesa: true
        }
    }, 
    methods:{
        toggleLuce(){
            this.luceAccesa = !this.luceAccesa;
        }
    }
}).mount("#app");