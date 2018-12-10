import carPreview from './car-preview.cmp.js';

export default {
    props: ['cars'],
    template: `
    <section>
            <h1>Cars</h1>
            <ul class="car-list">
                <car-preview v-for="currentCar in cars" v-bind:car="currentCar">
                </car-preview>
            </ul>
        </section>
    `,
   
    created() {
        console.log('Car-List was created!');
    },
    components : {
        carPreview
    }
   
}