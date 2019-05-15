import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/pages/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/lookup/:addr',
            name: 'lookup',
            component: () => import(/* webpackChunkName: "lookup" */ '@/components/pages/Lookup.vue')
        },
        {
            path: '/faq',
            name: 'faq',
            component: () => import(/* webpackChunkName: "faq" */ '@/components/pages/FAQ.vue')
        },
        {
            path: '/api',
            name: 'api',
            component: () => import(/* webpackChunkName: "api" */ '@/components/pages/API.vue')
        },
        {
            path: '*',
            name: 'notFound',
            component: () => import(/* webpackChunkName: "not-found" */ '@/components/pages/NotFound.vue')
        }
    ]
})
