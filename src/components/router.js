import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './MainPage';
import editPage from './editPage';

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainPage
        },
        {
            path: '/edit',
            name: 'edit',
            component: editPage
        }
    ]
})

export default router;
