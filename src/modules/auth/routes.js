export default [
    {
        name: 'Login',
        path: '/login',
        component: () => import(/* webpackChunkName: "login" */ './pages/Login')
    },
    {
        name: 'Register',
        path: '/register',
        component: () => import(/* webpackChunkName: "register" */ './pages/Register')
    },
    {
        name: 'RecuperarSenha',
        path: '/recuperar-senha',
        component: () => import(/* webpackChunkName: "recover-password" */ './pages/RecoverPassword')
    }
]