import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Login from '../components/page/Login'
import Form from '../components/page/Form'
import Table from '../components/page/Table'
import Error from '../components/page/Error'
import User from '../components/page/User'
import Home from '../components/page/Home'
import Chart from '../components/page/Charts'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },{
            path: '/',
            component: Main,
            children: [
                {
                    path: '/',
                    name: 'Home',
                    component: Home
                },{
                    path: '/form',
                    component: Form
                },{
                    path: '/table',
                    component: Table
                },{
                    path: '/user',
                    component: User
                },{
                    path: '/charts',
                    component: Chart
                },
            ]
        },

        {
            path: '*',
            name: 'Error',
            component: Error
        }
    ]
})
