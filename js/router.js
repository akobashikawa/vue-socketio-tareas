import {createRouter, createWebHashHistory} from "vue-router";

// [Lazy Loading Routes | Vue Router](https://router.vuejs.org/guide/advanced/lazy-loading.html)
const Home = () => import("./components/Home.js");
const Tareas = () => import("./components/Tareas.js");

const routes = [
    { path: '/', component: Home },
    { path: '/tareas', component: Tareas },
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;