import { createApp } from 'vue'
import App from '@/App.vue'
import routers from '@/router'
import "@/assets/style/main.scss"
import store from '@/store'

const app  = createApp(App)


app.use(routers)
app.use(store)

app.mount('#app')
