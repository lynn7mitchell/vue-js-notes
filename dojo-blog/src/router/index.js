import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ComputedWatchWatchEffect from "../views/computed_watch_watchEffect.vue";
import ReactiveVsRefs from "../views/ReactiveVsRefs.vue";
import Refs from "../views/Refs.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/computed_watch_watchEffect",
    name: "computed_watch_watchEffect",
    component: ComputedWatchWatchEffect,
  },
  {
    path: "/reactive_vs_refs",
    name: "reactive_vs_refs",
    component: ReactiveVsRefs,
  },
  {
    path: "/refs",
    name: "refs",
    component: Refs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
