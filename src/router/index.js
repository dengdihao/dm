import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
/*import Login from '@/views/login/login.vue'*/
import Main from '@/views/main/main.vue'
import Home from '@/views/home/home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }, {
            path: '/main',
            name: 'Main',
            component: Main
        },{
            path:'/home',
            name:'Home',
            component:Home
        }
    ]
})
