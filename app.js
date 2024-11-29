let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: '',
            size: 150,
            textSize: 50,
            texts: [
                'Vill',
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
        },
        fontSize() {
            let fontSize = this.size / 6;
            return fontSize > 175 ? 175 : fontSize;
        }
    }
}).mount('#app');