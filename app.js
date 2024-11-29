let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: '',
            size: 150,
            texts: [
                'Vil',
                'du',
                'vara',
                'min',
                'Bestman?'
            ]
        }
    },
    computed: {
        circle_classes() {
            return { purple: this.isPurple }
        },
        cicleText() {
            if (this.size <= 250) {
                return this.texts[0];
            } else if (this.size <= 450) {
                return this.texts[1];
            } else if (this.size <= 650) {
                return this.texts[2]; 
            } else if (this.size <= 850) {
                return this.texts[3]; 
            } else {
                return this.texts[4]; 
            }
        }
    }
}).mount('#app');