const routes = [
    {
        path: '/',
        name: 'AppLayout',
        component: () => import('../layouts/AppLayout.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                meta: { requiresAuth: false },
                component: () => import('../views/Home.vue'),

            },
            {
                path: '/watchlist',
                name: 'Watchlist',
                meta: { requiresAuth: false },
                component: () => import('../views/Watchlist.vue'),

            },
            {
                path: '/your-rating',
                name: 'YourRating',
                meta: { requiresAuth: false },
                component: () => import('../views/YourRating.vue'),

            },
            {
                path: '/movie/:id',
                name: 'Movie Detail',
                meta: { requiresAuth: false },
                component: () => import('../views/MovieDetail.vue'),
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/auth/Login.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/auth/Register.vue'),
    }
];

export default routes;