import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast, { type PluginOptions } from 'vue-toastification';
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
const app = createApp(App);
const options: PluginOptions = {
    newestOnTop: true,
    draggable: true,
}
app.use(Toast, options);
app.use(router);
app.mount('#app');