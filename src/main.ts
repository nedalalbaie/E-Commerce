import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import authStore from './core/stores/auth.store'

const app = createApp(App)
authStore.init()
app.use(router)

app.mount('#app')
