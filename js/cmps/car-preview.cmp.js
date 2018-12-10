export default {
    props: ['car'],
    template: `
        <li>
            <h6>
                <router-link :to="carDetailsLink">{{car.vendor}}</router-link>
                
            </h6>
            <h6>{{car.price}}$</h6>
            <!-- <img :title="car.vendor" :src="'img/car/' + car.id +'.png'" /> -->
        </li>
`,
    
    created() {
        console.log('Car-Preview was created!', this.car);
    },
    computed: {
        carDetailsLink() {
            return `/car/${this.car.id}`;
        }
    }
}