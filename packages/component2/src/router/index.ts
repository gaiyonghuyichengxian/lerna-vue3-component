import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import main from '../views/main.vue'
// import Button from '../packages/Button/buttonMd.md'

import mds from '../packages/exportMd'

const mdList: Array<any> = []

Object.keys(mds).forEach(key => {
  const md = mds[key]
  mdList.push({
    path: `/${key.substring(0, key.length - 2)}`,
    name: key,
    component: md
  })
})

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: main,
    redirect: mdList[0].path,
    children: mdList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
