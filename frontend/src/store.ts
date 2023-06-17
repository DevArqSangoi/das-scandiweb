// src/store.ts
import { createStore } from "vuex";
import products from "./store/productsModule";

export default createStore({
  modules: {
    products,
  },
});
