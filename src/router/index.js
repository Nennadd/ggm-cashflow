import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/supplier-orders",
    name: "SupplierOrders",
    component: () =>
      import(
        /* webpackChunkName: "supplier-orders" */ "../views/SupplierOrders.vue"
      ),
  },
  {
    path: "/supplier-sellout",
    name: "SupplierSellout",
    component: () =>
      import(
        /* webpackChunkName: "supplier-sellout" */ "../views/SupplierSellout.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
