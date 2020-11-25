import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import store from "../store/";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Home.vue"),
  },
  {
    path: "/supplier-orders",
    name: "SupplierOrders",
    component: () =>
      import(
        /* webpackChunkName: "supplier-orders" */ "../views/supplier-orders/SupplierOrders.vue"
      ),
    // children: [
    //   {
    //     path: "/supplier-orders/all",
    //     name: "all",
    //     component: () =>
    //       import(
    //         /* webpackChunkName: "all" */ "../views/supplier-orders/all.vue"
    //       ),
    //   },
    // ],
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

router.afterEach(() => {
  store.state.loading = true;
});

export default router;
