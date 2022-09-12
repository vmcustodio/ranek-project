import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProdutoView from "../views/ProdutoView.vue"
import LoginView from "../views/LoginView.vue"

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/produto/:id",
      name: "produto",
      component: ProdutoView,
      props: true
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    },
  ],
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
