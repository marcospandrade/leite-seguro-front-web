export default [
    {
        name: 'Relatorios',
        path: '/relatorios',
        component: () => import(/* webpackChunkName: "relatorio" */ './pages/Relatorios.vue')
    }
]