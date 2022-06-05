import { createWebHistory, createRouter } from "vue-router";

// lazy-loaded
const MainPage = () => import("./components/MainPage.vue")
const AboutPage = () => import("./components/AboutPage.vue")
const DevelopmentPage = () => import("./components/DevelopmentPage.vue")
const Home = () => import("./components/Home.vue")
const PlayerPage = () => import("./components/PlayerPage.vue")

const routes = [

  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/home",
    // eslint-disable-next-line
    component: Home,
  },
  {
    path: "/development",
    component: DevelopmentPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/players",
    component: PlayerPage,
  },
//   { path: '/:pathMatch(.*)*', component: error404 },

];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

export default router;