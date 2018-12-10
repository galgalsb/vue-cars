import carService from '../services/car.service.js'


export default {
    // props: ['car'],
    template: `
        <section v-if="car">
            <h1>{{car.vendor}}</h1>
            <h6>{{car.price}}$</h6>


            <router-link to="/car">Back to List</router-link>
            <button @click="backToList">Back</button>


            <!-- <img :title="car.vendor" :src="'img/car/' + car.id +'.png'" /> -->
    </section>
`,
    data() {
        return {
            car: null
        }
    },
    methods: {
        backToList() {
            this.$router.push('/car')
        }
    },

    created() {
        console.log('Car-Details for:', this.$route.params);
        carService.getCarById(this.$route.params.theCarId)
            .then(car => this.car = car)
    }
}