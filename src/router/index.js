import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProductView from "@/views/ProductView.vue";
import AboutView from "@/views/AboutView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import ProductsView from "@/views/ProductsView.vue";
import BasketView from "@/views/BasketView.vue";
/* Categories */
import EquipmentsView from "@/views/Categories/EquipmentsView.vue";
import GraphicCardsView from "@/views/Categories/GraphicCardsView.vue";
import DisplaysView from "@/views/Categories/DisplaysView.vue";
import ComputerView from "@/views/Categories/ComputerView.vue";

Vue.use(VueRouter);

const routes = [
  /* Home Route */
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  /* About Us Route */
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  /* Single Product Route */
  {
    path: "/product/:id",
    name: "product",
    component: ProductView,
  },
  /* Multi Products Route */
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
  /* 404 Not Found Route */
  {
    path: "*",
    name: "404",
    component: NotFoundView,
  },
  /* Category -> Equipments Route*/
  {
    path: "/category/equipments",
    name: "equipments",
    component: EquipmentsView,
  },
  /* Category -> Graphic Cards Route*/
  {
    path: "/category/graphic-cards",
    name: "graphic-cards",
    component: GraphicCardsView,
  },
  /* Category -> Displays Route*/
  {
    path: "/category/displays",
    name: "displays",
    component: DisplaysView,
  },
  /* Category -> Computer Route*/
  {
    path: "/category/computer",
    name: "computer",
    component: ComputerView,
  },
  /* Basket Route*/
  {
    path: "/basket",
    name: "basket",
    component: BasketView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
