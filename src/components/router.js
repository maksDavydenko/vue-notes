import Vue from 'vue'
import Router from 'vue-router'
import Notes from './Notes';
import TodoItem from './TodoItem';
Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'todoItem',
            component: TodoItem
        }, {
            path: '/notes',
            name: 'notes',
            component: Notes
        }
    ]
})

export default router;
