import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/country",
    name: "Country",
    component: () => import("../views/country/Country.vue"),
  },
  {
    path: "/weather",
    name: "Weather",
    component: () => import("../views/weather/Weather.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/user/User.vue"),
  },
  {
    path: "/post",
    name: "Post",
    component: () => import("../views/post/Post.vue"),
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: () => import("../views/post/CreatePost.vue"),
  },
  {
    path: "/post/:id",
    name: "PostDetail",
    component: () => import("../views/post/PostDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
