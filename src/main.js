import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/all.scss'
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)

app.mount('#app')
