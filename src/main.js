import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//
const app = createApp(App)
import '@/style/index.css'

// import globalChild from './globalComponent/index.vue'
import { requireChild } from './globalComponent/index.js'

requireChild(app)
app.use(store).use(router).mount('#app')
