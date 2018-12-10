import carService from '../services/car.service.js';
import carList from '../cmps/car-list.cmp.js'
import carFilter from '../cmps/car-filter.cmp.js';


export default {
    template: `

    <section>
        <h1>Car App</h1>
        <car-filter @setFilter="setFilter"></car-filter>
        <car-list :cars="carsToShow"></car-list>
    </section>
    `,
    data() {
        return {
            filter: null,
            cars: []
        }
    },
    created() {
        carService.query()
            .then(cars => this.cars = cars)
    },
    computed: {
        carsToShow() {
            if (!this.filter) return this.cars;
            return this.cars
                .filter(car => car.vendor.includes(this.filter.byVendor))
                .filter(car => !this.filter.maxPrice || car.price < this.filter.maxPrice)

        }
    },
    methods: {
        setFilter(filter) {
            this.filter = filter
        }
    },
    components: {
        carList,
        carFilter
    }
}

