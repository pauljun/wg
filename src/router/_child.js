export default [
    {
        id: '0',
        title: '登录',
        // component: lazy(() => import('../views/login')),
        component: require('../views/login').default,
        path: '/',
        exact: true
    },
    {
        id: '1',
        title: '登录',
        // component: lazy(() => import('../views/login')),
        component: require('../views/login').default,
        path: '/login',
    },
    {
        id: '2',
        title: '首页',
        // component: lazy(() => import('../views/layout')),
        component: require('../views/layout').default,
        path: '/:id'
    }
]