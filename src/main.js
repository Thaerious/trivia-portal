import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js";
import vue3GoogleLogin from 'vue3-google-login'
import bubble from "./utils/bubble.js";
import './assets/main.css'

const app = createApp(App);
app.use(router);
app.use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID
}).mount('#app');

bubble(app);
