export default {
    template: `
    <section>
        <h3>Filter</h3>
        <form>
            Vendor: <input type="text" @input="setFilter" v-model="filter.byVendor" />
            Max Price: <input type="text" v-model.number="filter.maxPrice" />
        </form>
    </section>
    `,
    data() {
        return {
            filter: {
                byVendor: '',
                maxPrice: 0
            },
        }
    },
    methods: {
        setFilter() {
            this.$emit('setFilter', this.filter);
        }
    }
};