import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import addProduct from "../components/add-product.vue"; // Import the add-product component
import productList from "../components/product-list.vue"; // Import the productList component

const routes: Array<RouteRecordRaw> = [
  {
    path: "/add-product", // Add a route for the add-product component
    name: "add-product",
    component: addProduct,
  },
  {
    path: "/products", // Add a route for the productList component
    name: "products",
    component: productList,
  },
  {
    path: "/", // Add a route for the productList component as default route
    name: "home",
    component: productList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
