import { ref, onMounted, Ref } from "vue";
import axios from "axios";

const api = axios.create({
  baseURL: "https://das-scandiweb.000webhostapp.com",
});

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
  deleteStatus: Ref<"idle" | "deleting" | "deleted">;
}

export default function useProducts(): UseProductsReturn {
  const products = ref<Product[]>([]);
  const isLoading = ref<boolean>(true);
  const deleteStatus = ref<"idle" | "deleting" | "deleted">("idle");
  const error = ref<Error | null>(null);

  const loadProducts = async () => {
    try {
      const response = await api.get("/api/products");
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
      await api.post("/api/products", product);
      loadProducts();
    } catch (error) {
      throw new Error(`Erro ao adicionar produto: ${error}`);
    }
  };

  onMounted(loadProducts);

  const deleteProduct = (product: Product) => {
    return new Promise<void>((resolve, reject) => {
      api
        .delete(`/api/products/${product.sku}`)
        .then(() => resolve())
        .catch((e: unknown) => {
          if (axios.isAxiosError(e)) {
            reject({ message: e.message });
          } else {
            reject({
              message: "An error occurred while deleting a product",
            });
          }
        });
    });
  };

  const deleteProducts = async (productsToDelete: Product[]) => {
    deleteStatus.value = "deleting";
    for (const product of productsToDelete) {
      try {
        await deleteProduct(product);
      } catch (caughtError) {
        error.value = caughtError as Error;
      }
    }
    await loadProducts();
    deleteStatus.value = "deleted";
    setTimeout(() => {
      deleteStatus.value = "idle";
    }, 1000);
  };

  return {
    products,
    isLoading,
    deleteStatus,
    error,
    loadProducts,
    addProduct,
    deleteProducts,
  };
}
