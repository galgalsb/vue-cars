import carService from '../services/car.service.js'

import eventBus, {SHOW_USER_MSG} from '../event-bus.js'



var priceInterval;

export default {

    template: `
        <section class="car-edit">
            <h1>Car Edit</h1>
            <router-link exact to="/car">Cancel</router-link>
            <form @submit.prevent="saveCar">

                <div>
                    <input ref="myInput" type="text" placeholder="Vendor" v-model.trim="car.vendor">
                    <input v-model.number="car.price" />
                </div>

                <div>
                    <input type="checkbox" value="Jack" v-model="car.checkedNames" />  Jack
                    <input type="checkbox" value="John" v-model="car.checkedNames" /> John
                </div>

                <div>
                    <input type="radio" value="One" v-model="car.picked"> One
                    <input type="radio" value="Two" v-model="car.picked"> Two
                </div>

                <div>
                    <select v-model="car.favLetters" multiple>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>
                </div>


                <button :disabled="!isValid" type="submit">Save</button>
            </form>

            <pre>
                {{car}}
            </pre>
        </section>
    `,
    data() {
        return {
            car: {
                vendor: '',
                price: 0,
                picked: false,
                checkedNames: [],
                favLetters: ['B']
            }
        }
    },
    created() {
        console.log('Car Edit Created, no refs yet:', this.$refs);
        priceInterval = setInterval(()=>{
            console.log('Updating the Car Price');
            // this.car.price++;
        }, 1000)
    },
    mounted() {
        console.log('Car Edit Mounted', this.$refs);
        this.$refs.myInput.focus()

    },
    destroyed() {
        clearInterval(priceInterval)
        console.log('Car Edit Destroyed');
    },

    computed: {
        isValid() {
            return !!this.car.vendor;
        }
    },
    methods: {
        saveCar() {
            // console.log('this.car', this.car);
            // console.log('REF',this.$refs.myInput);

            carService.save(this.car)
                .then(updatedCar => {
                    console.log('Car: ', updatedCar.id, 'saved');

                    eventBus.$emit(SHOW_USER_MSG, {type: 'success', txt: 'Car Saved'});

                    this.$router.push('/car');
                })
        },

    },


}