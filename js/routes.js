import carApp from './pages/car-app.cmp.js';
import carEdit from './pages/car-edit.cmp.js';
import carDetails from './pages/car-details.cmp.js';
import homePage from './pages/home-page.cmp.js';


const aboutPage = {
    template: `
        <section class="about">
            <h1>About</h1>
        </section>
    `
}


var myRoutes = [
    {path: '/', component: homePage },
    {path: '/about', component: aboutPage },
    {path: '/car', component: carApp },
    {path: '/car/edit', component: carEdit },
    {path: '/car/:theCarId', component: carDetails },
]

export default myRoutes;

