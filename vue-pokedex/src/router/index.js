import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "poke",
    component: () => import("../views/PokeView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
