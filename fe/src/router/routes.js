const routes = [
  {
    path: "/",
    name: "AppLayout",
    component: () => import("../layouts/AppLayout.vue"),
    children: [
      {
        path: "/",
        name: "Beranda",
        component: () => import("../views/Beranda.vue"),
      },
  
      {
        path: "/pelaporan",
        name: "Pelaporan",
        component: () => import("../views/Pelaporan.vue"),
      },
      {
        path: "/profil",
        name: "Profil",
        component: () => import("../views/Profil.vue"),
      },
      {
        path: "/tentang",
        name: "Tentang",
        component: () => import("../views/Tentang.vue"),
      },
      {
        path: "/pelaporan/:id",
        name: "PelaporanDetail",
        component: () => import("../views/PelaporanDetail.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/auth/Register.vue"),
  },
];

export default routes;
