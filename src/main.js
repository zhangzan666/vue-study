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

app.directive('global-focus', {
  mounted(el) {
    console.log(arguments , '全局指令')
    el.focus()
  },
  beforeUpdate() {
    console.log(arguments)
  },
})

app.use(store).use(router).mount('#app')
