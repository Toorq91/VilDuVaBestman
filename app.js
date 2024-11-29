let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: '',
            size: 150,
            textSize: 50
        }
    },
    computed: {
        circle_classes() {
            return { purple: this.isPurple }
        },
        cicleText() {
            return this.size > 300 ? 'Cutie ;)' : 'Hi!';
        }
    }
}).mount('#app');