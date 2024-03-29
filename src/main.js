import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js";
import vue3GoogleLogin from 'vue3-google-login'
import './assets/main.css'

const app = createApp(App);

app.use(router);
app.use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID
}).mount('#app');

// https://v3-migration.vuejs.org/breaking-changes/events-api.html#_2-x-syntax

