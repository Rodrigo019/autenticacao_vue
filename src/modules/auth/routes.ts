const routes = [
    {
        name: 'login',
        path: '/login',
        component: () => import('./pages/Login.vue')
    }
]

export default routes;