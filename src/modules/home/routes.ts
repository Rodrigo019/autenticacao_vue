const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import(/*webpackChunkName: login*/ './pages/Home.vue')
    }
]

export default routes;