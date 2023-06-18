// src/store/products.ts
import { reactive, computed } from "vue";
import axios from "axios";
export interface Product {
  name: string;
  sku: string;
  price: number;
}

export interface ProductsState {
  products: Product[];
}

const state = reactive<ProductsState>({
  products: [],
});

const products = computed(() => state.products);

async function loadProducts() {
  try {
    console.log("albuble no nessa buceta");
    const response = await axios.get("/api/products");
    state.products = response.data as Product[];
  } catch (error) {
    throw new Error(`Erro ao carregar produtos: ${error}`);
  }
}

async function deleteProducts(productSKUs: string[]) {
  try {
    console.log("abluble products delete");
    await Promise.all(
      productSKUs.map((sku) => axios.delete(`/api/products/${sku}`))
    );
  } catch (error) {
    throw new Error(`Erro ao excluir produtos: ${error}`);
  }
}

export default {
  state,
  products,
  loadProducts,
  deleteProducts,
};
