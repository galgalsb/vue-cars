Vue.component('up-down', {
    props: ['initval', 'valLabel'],
    template: `
        <section class="up-down-container">
            <button v-on:click="changeVal(-1)">-</button>
            {{valLabel}} <span v-bind:class="balanceClass">{{val}}</span>
            <button v-on:click="changeVal(1)">+</button>
        </section>
    `,
    data() {
        return {
            val: +this.initval
        }
    },
    methods: {
        changeVal(diff) {
            this.val += diff;
            this.$emit('val-changed', this.val);
        }
    },
    computed: {
        balanceClass() {
            return {
                danger: this.val < 5,
                sababa: this.val > 10
            }
        }
    }
});