import { createApp } from 'vue'
import App from '@/components/app.vue'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
