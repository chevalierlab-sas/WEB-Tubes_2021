const routes = [
    {
        path: '/',
        name: "AppLayout",
        component: () => import ('../layouts/AppLayout.vue'),
        children: [
            {
                path: '/',
                name: "Home",
                component: () => import ('../views/Home.vue')
            },
            {
                path: '/jual',
                name: "TitipJual",
                component: () => import ('../views/TitipJual.vue')
            }
        ]

    },
    {
        path: '/login',
        name: 'Login',
        component: () => import ('../views/auth/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import ('../views/auth/Register.vue')
    }
];

export default routes;