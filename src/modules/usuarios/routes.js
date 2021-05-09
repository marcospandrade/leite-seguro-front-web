export default [
    {
        name: 'Usuarios',
        path: '/usuarios',
        component: () => import(/* webpackChunkName: "usuarios" */ './pages/Usuarios.vue')
    }
]