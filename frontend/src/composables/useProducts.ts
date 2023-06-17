// src/composables/useProducts.ts
import { ref, onMounted, Ref } from "vue";
import axios from "axios";

export interface ProductBase {
  name: string;
  sku: string;
  price: number;
}

export interface DvdProduct extends ProductBase {
  type: "dvd";
  size: number;
}

export interface BookProduct extends ProductBase {
  type: "book";
  weight: number;
}

export interface FurnitureProduct extends ProductBase {
  type: "furniture";
  height: number;
  width: number;
  length: number;
}

export type Product = DvdProduct | BookProduct | FurnitureProduct;

interface Error {
  message: string;
}

interface UseProductsReturn {
  products: Ref<(DvdProduct | BookProduct | FurnitureProduct)[]>;
  isLoading: Ref<boolean>;
  error: Ref<Error | null>;
  loadProducts: () => Promise<void>;
  addProduct: (product: Product) => Promise<void>;
  deleteProducts: (productsToDelete: Product[]) => Promise<void>;
}

export default function useProducts(): UseProductsReturn {
  const products = ref<Product[]>([]);
  const isLoading = ref<boolean>(true);
  const error = ref<Error | null>(null);

  const loadProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      products.value = response.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        error.value = { message: e.message };
      } else {
        error.value = { message: "An error occurred while fetching products" };
      }
    } finally {
      isLoading.value = false;
    }
  };

  const addProduct = async (product: Product) => {
    try {
      console.log(product);
      await axios.post("/api/products", product);
      loadProducts();
    } catch (error) {
      throw new Error(`Erro ao adicionar produto: ${error}`);
    }
  };

  onMounted(loadProducts);

  const deleteProducts = async (productsToDelete: Product[]) => {
    for (const product of productsToDelete) {
      try {
        await axios.delete(`/api/products/${product.sku}`);
      } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
          error.value = { message: e.message };
        } else {
          error.value = {
            message: "An error occurred while deleting a product",
          };
        }
      }
    }
    await loadProducts();
  };

  return {
    products,
    isLoading,
    error,
    loadProducts,
    addProduct,
    deleteProducts,
  };
}
