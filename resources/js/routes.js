import VueRouter from "vue-router";
import ExampleComponent from "./components/ExampleComponent";
import Example2 from "./components/Example2";

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: ExampleComponent,
            name: 'home',
        },
        {
            path: '/second',
            component: Example2,
            name: 'second',
        },
    ],
    // mode: 'history',
});
