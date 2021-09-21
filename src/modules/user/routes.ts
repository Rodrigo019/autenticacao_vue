const routes = [
    {
        name: 'users',
        path: '/users',
        component: () => import(/*webpackChunkName: login*/ './pages/UserList.vue')
    }
]

export default routes;