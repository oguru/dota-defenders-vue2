// import Vue from 'vue'
// import VueRouter, { RouteConfig } from 'vue-router'
// import Home from '../views/Home.vue'

// Vue.use(VueRouter)

// const routes: Array<RouteConfig> = [
//     {
//         path: '/',
//         name: 'Home',
//         component: Home
//     },
//     {
//         path: '/hero',
//         name: 'Hero',
//         // route level code-splitting
//         // this generates a separate chunk (about.[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: () =>
//             import(/* webpackChunkName: "hero" */ '../views/Hero.vue')
//     },
//     {
//         path: '/create-hero',
//         name: 'CreateHero',
//         // route level code-splitting
//         // this generates a separate chunk (about.[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: () =>
//             import(
//                 /* webpackChunkName: "create-hero" */ '../views/CreateHero.vue'
//             )
//     }
// ]

// const router = new VueRouter({
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes
// })

// export default router

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/hero',
        name: 'Hero',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "hero" */ '../views/Hero.vue')
    },
    {
        path: '/create-hero',
        name: 'CreateHero',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "create-hero" */ '../views/CreateHero.vue'
            )
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
