export default [
    {
        name: 'landing',
        path: '/',
        component: () => import(/* webpackChunkName: "landing" */ './Landing')
    }
]