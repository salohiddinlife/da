import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/ImgBook.vue'



const routers = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'ImgBook', component: Home},
        {path: '/ImgBook2ver', name: 'ImgBook2.0', component: () => import('@/pages/ImgBook2.0.vue')},
 //       {path: '/about/:id', name: 'CarItem', component: () => import('@/pages/CarItem.vue')},
 //       {path: '/:catchAll(.*)', name: 'NotFound', component: () => import('@/pages/404.vue')},
    ]
})

export default routers