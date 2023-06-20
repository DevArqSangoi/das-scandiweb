// store/index.ts
import { Store, createStore } from "vuex";
import products, { Product } from "./productsModule";

export interface RootState {
  products: ProductsState;
}

export interface ProductsState {
  products: Product[];
}

const store = createStore<RootState>({
  modules: {
    products,
  },
});

export function useStore() {
  return store as Store<RootState>;
}
