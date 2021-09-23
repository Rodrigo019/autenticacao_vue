const routes = [
    {
        name: 'users',
        path: '/users',
        component: () => import('./pages/UserList.vue')
    },
    {
        name: 'users-create',
        path: '/users/:id',
        component: () => import('./pages/UserCreate.vue')
    }
]

export default routes;