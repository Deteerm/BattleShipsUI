import { createRouter, createWebHistory } from "vue-router";
import GameView from "../views/GameView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: GameView,
    },
    {
      path: "/highscore",
      name: "highscore",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HighscoreView.vue"),
    },
  ],
});

export default router;
