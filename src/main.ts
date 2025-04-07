import './assets/main.css'
import './bootstrap.ts'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ValidationError from './components/ValidationError.vue'
import IconSpinner from './components/IconSpinner.vue'
import ButtonUtility from './components/ButtonUtility.vue'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('ValidationError', ValidationError)
app.component('IconSpinner', IconSpinner)
app.component('ButtonUtility', ButtonUtility)
app.use(VueSweetalert2)
app.mount('#app')
