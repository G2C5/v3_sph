const routes = [
    {
        path: "/home",
        name: "home",
        component: () => import("@/views/Home/index.vue"),
    },
    {
        path: "/search/:keyword?",
        name: "search",
        component: () => import("@/views/Search/index.vue"),
    },
    {
        path: "/test",
        name: "test",
        component: () => import("@/views/testImg.vue"),
    },
    {
        // 重定向
        path: "/",
        redirect: "/test",
    },
];
export default routes;
