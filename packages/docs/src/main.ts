import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import xinbear from '@xinbear/component'
console.log('xinbear', xinbear)

createApp(App)
.use(store)
.use(router)
.use(xinbear)
.mount('#app')
