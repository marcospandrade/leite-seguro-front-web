export default [
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: () => import(/* webpackChunkName: "login" */ './pages/Dashboard.vue')
    }
]