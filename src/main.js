import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

<<<<<<< HEAD
// 导入全局css
import '@/css/reset.css'
import '@/css/global.css'
createApp(App).use(store).use(router).directive('focus',{
  mounted(el){
    el.focus()
  }
}).mount('#app')
=======
//plugin
import i18nPlugin from './plugin/i18n'
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

const i18nStrings = {
  greetings: {
    hi: 'Hallo!'
  } 
}

app.use(i18nPlugin, i18nStrings)

app.use(store).use(router).mount('#app')
>>>>>>> b4bc7a1d9b67127575a3513a14ba00419382ebc3
