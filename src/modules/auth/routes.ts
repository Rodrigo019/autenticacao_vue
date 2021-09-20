const routes = [
    {
        name: 'login',
        path: '/login',
        component: () => import(/*webpackChunkName: login*/ './pages/Login.vue')
    }
]

export default routes;