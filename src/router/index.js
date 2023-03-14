import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/login/Login.vue';
import Lobby from '@/views/lobby/Lobby.vue';

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '/lobby',
        name: 'Lobby',
        component: Lobby,
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;