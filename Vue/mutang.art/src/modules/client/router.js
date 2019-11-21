import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/', 
        name: 'client', 
        component: r => { 
            require(['./login/Login'], r) 
        },
        meta: {
            title: 'client page' 
        }
    }
]

export default new VueRouter({
    routes: routes
})