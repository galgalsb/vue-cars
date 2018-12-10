'use strict';

import userMsg from './cmps/user-msg.cmp.js';
import carApp from './pages/car-app.cmp.js';
import myRoutes from './routes.js'


import eventBus from './event-bus.js'

Vue.use(VueRouter);
const myRouter = new VueRouter({routes: myRoutes})

new Vue({
    el: '#app',
    router: myRouter,
    components: {
        carApp,
        userMsg
    }
})
