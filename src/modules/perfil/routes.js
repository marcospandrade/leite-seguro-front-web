export default [
    {
        name: 'Perfil',
        path: '/perfil',
        component: () => import(/* webpackChunkName: "perfil" */ './pages/Perfil.vue')
    }
]