require('./bootstrap');

import Vue from "vue";
import router from './routes';
import VueRouter from 'vue-router';
import Index from './Index';

Vue.use(VueRouter);

// window.Vue = require('vue');
// Vue.component(
//     'example-component',
//     require('./components/ExampleComponent.vue').default
// )
// Vue.component(
//     'example-2',
//     require('./components/Example2.vue').default
// );


new Vue({
    el: '#app',
    router,
    components: {
        index: Index
    },
});
