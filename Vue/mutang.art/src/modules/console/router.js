import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { 
        path: '/', 
        name: 'console', 
        // component: r => { 
        //     require(['./login/Login'], r) 
        // },
        meta: { 
            title: 'console page' 
        }
    }
]

export default new VueRouter({
    routes: routes
})