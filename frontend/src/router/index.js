import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/the-home'
import CreateDoc from '@/components/create-doc'
import ViewDoc from '@/components/view-doc'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/create-doc',
            name: 'create-doc',
            component: CreateDoc
        },
        {
            path: '/:short_url',
            name: 'shorturl',
            component: ViewDoc,
            props: true
        }
    ],
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
