import Vue from 'vue'
import Client from './Client.vue'
import router from './router'

Vue.use(require('vue-wechat-title'))

new Vue({
    router,
    render: h => h(Client)
}).$mount('#client')