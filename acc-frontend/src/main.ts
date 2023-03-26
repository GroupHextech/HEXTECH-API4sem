import { createApp } from 'vue'
//import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css';

//import axios from 'axios';

//axios.defaults.baseURL = 'localhost:5173';

const app = createApp(App)

//app.use(createPinia())

app.use(router)
app.mount('#app')