import {createRouter, createWebHashHistory} from "vue-router";

// [Lazy Loading Routes | Vue Router](https://router.vuejs.org/guide/advanced/lazy-loading.html)
const Home = () => import("./components/Home.js");
const Tareas = () => import("./components/Tareas.js");

const ConnectionState = () => import("./components/ConnectionState.js");
const ConnectionManager = () => import("./components/ConnectionManager.js");
const ConnectionMyForm = () => import("./components/ConnectionMyForm.js");
const ConnectionUsers = () => import("./components/ConnectionUsers.js");

const routes = [
    { path: '/', component: Home },
    { path: '/tareas', component: Tareas },

    { path: '/connection-state', component: ConnectionState },
    { path: '/connection-manager', component: ConnectionManager },
    { path: '/connection-myform', component: ConnectionMyForm },
    { path: '/connection-users', component: ConnectionUsers },
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;