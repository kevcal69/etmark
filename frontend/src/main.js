// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import contenteditableDirective from 'vue-contenteditable-directive'

import Antv from 'antv'
import 'antv/dist/antv.css'

Vue.use(contenteditableDirective)
Vue.use(Antv)

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
