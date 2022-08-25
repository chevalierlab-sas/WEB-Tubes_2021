const routes = [
    {
        path: '/',
        name: 'AppLayout',
        component: () => import('../layouts/AppLayout.vue'),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('../views/home.vue')
            },
            {
                path: '/creation',
                name: 'creation',
                component: () => import('../views/creation.vue')
            },
            {
                path: '/profile',
                name: 'profile',
                component: () => import('../views/profile.vue')
            },
            {
                path: '/home/:id',
                name: 'detail',
                component: () => import('../views/detail.vue')
            },
            {
                path: '/creation/:id',
                name: 'creationDetail',
                component: () => import('../views/creationDetail.vue')
            },

        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/auth/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/auth/register.vue')
    }
];

export default routes;