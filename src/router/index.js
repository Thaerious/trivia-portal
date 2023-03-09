import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import Home from '../views/Login.vue';
import Login from '../views/Login.vue';
import Confirm from '../views/Confirm.vue';

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/email_confirmed',
        name: 'Confirm',
        component: Confirm,
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;