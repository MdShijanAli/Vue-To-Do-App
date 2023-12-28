import './style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css'
import "primevue/resources/primevue.min.css"; 
import "primeicons/primeicons.css";
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue);
app.use(PrimeVue, { ripple: true });
app.use(ToastService);
app.use(createPinia())
app.component('Toast', Toast);
app.mount('#app')
