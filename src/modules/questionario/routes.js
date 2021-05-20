export default [
    {
        name: 'Questionarios',
        path: '/questionarios',
        component: () => import(/* webpackChunkName: "Questionarios" */ './pages/Questionarios.vue')
    }
]