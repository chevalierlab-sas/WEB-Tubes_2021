const routes = [
    {
        path:'/',
        name: 'AppLayout',
        component: () => import('../layouts/AppLayout.vue'),
        children: [
            {
                path: '/',
                name: 'Beranda',
                meta: { requiresAuth: false },
                component: () => import('../views/Beranda.vue')
            },
                {
                    path: '/lowongan',
                    name: 'Lowongan',
                    meta: { requiresAuth: true },
                    component: () => import('../views/Lowongan.vue')
            },
            {
                path: '/lowongan/:id',
                name: 'LowonganDetail',
                meta: { requiresAuth: true },
                component: () => import('../views/LowonganDetail.vue')
        },
        {
            path: '/forum',
            name: 'Forum',
            meta: { requiresAuth: true },
            component: () => import('../views/Forum.vue')
    },
        {
            path: '/forum/:id',
            name: 'ForumDetail',
            meta: { requiresAuth: true },
            component: () => import('../views/ForumDetail.vue')
    }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        meta: { requiresAuth: false },
        component: () => import('../views/auth/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        meta: { requiresAuth: false },
        component: () => import('../views/auth/Register.vue')
    }
];

export default routes;