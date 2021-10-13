import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import packages from './packages'

import 'normalize.css/normalize.css'
import 'element-plus/dist/index.css'
import 'highlight.js/styles/default.css'
import './assets/markdown.scss'
import './assets/index.scss'
import './packages/index.scss'

createApp(App)
  .use(store)
  .use(router)
  .use(packages)
  .mount('#app')
