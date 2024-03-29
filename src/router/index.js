import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/login/Login.vue';
import Lobby from '@/views/lobby/Lobby.vue';
import Game from '@/views/game/Game.vue';
import Host from '@/views/host/Host.vue';

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
    },
    {
        path: '/game/:id/:round',
        name: 'Game',
        component: Game,
        props: true
    },
    {
        path: '/host/:id',
        name: 'Host',
        component: Host,
        props: true
    }           
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;