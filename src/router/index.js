import Vue from "vue";
import VueRouter from "vue-router";
import Posts from "../views/Posts.vue";
//import ContactUs from "../views/ContactUs.vue";
import LogIn from "../views/LogIn.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/contactus",
    name: "ContactUs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // Added just to try out lazy-loading
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactUs.vue"),
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn
    },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
