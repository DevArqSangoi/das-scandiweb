import { ref, onMounted, Ref } from "vue";

/**
 * Base interface for a product.
 */
export interface ProductBase {
  name: string;
  sku: string;
  price: number;
}

/**
 * DVD product, extending the base product interface.
 */
export interface DvdProduct extends ProductBase {
  type: "dvd";
  size: number;
}

/**
 * Book product, extending the base product interface.
 */
export interface BookProduct extends ProductBase {
  type: "book";
  weight: number;
}

/**
 * Furniture product, extending the base product interface.
 */
export interface FurnitureProduct extends ProductBase {
  type: "furniture";
  height: number;
  width: number;
  length: number;
}

/**
 * Product type encompassing all possible products.
 */
export type Product = DvdProduct | BookProduct | FurnitureProduct;

/**
 * Error interface.
 */
interface Error {
  message: string;
}

/**
 * Interface for useProducts return.
 */
interface UseProductsReturn {
  products: Ref<(DvdProduct | BookProduct | FurnitureProduct)[]>;
  isLoading: Ref<boolean>;
  error: Ref<Error | null>;
  loadProducts: () => Promise<void>;
  addProduct: (product: Product) => Promise<void>;
  deleteProducts: (productsToDelete: Product[]) => Promise<void>;
  deleteStatus: Ref<"idle" | "deleting" | "deleted">;
}

/**
 * Main function that handles products.
 *
 * @returns An object of products, loading status, error, and methods to manipulate products.
 */
export default function useProducts(): UseProductsReturn {
  const products = ref<Product[]>([]);
  const isLoading = ref<boolean>(true);
  const deleteStatus = ref<"idle" | "deleting" | "deleted">("idle");
  const error = ref<Error | null>(null);

  /**
   * Function to load products.
   */
  const loadProducts = async () => {
    try {
      const response = await fetch(
        "https://das-scandiweb.000webhostapp.com/api/products"
      );
      if (!response.ok) {
        throw new Error("Network error. Response wasn't 'ok'.");
      }
      products.value = await response.json();
    } catch (e) {
      if (e instanceof Error) {
        error.value = { message: e.message };
        console.error(e);
      }
    } finally {
      isLoading.value = false;
    }
  };

  /**
   * Function to add a product.
   *
   * @param product The product to add.
   */
  const addProduct = async (product: Product) => {
    try {
      const response = await fetch(
        "https://das-scandiweb.000webhostapp.com/api/products",
        {
          method: "POST",
          body: JSON.stringify(product),
        }
      );
      if (!response.ok) {
        throw new Error("Network error. Response wasn't 'ok'.");
      }
      loadProducts();
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        throw new Error(`Error adding product: ${error}`);
      }
    }
  };

  /**
   * Function to delete a product with HTTP POST
   *
   * @param sku The product to delete.
   * @note This function uses the POST method to send the deletion request because of the limitations of the free plan of 000webhost.
   */
  const deleteProduct = async (product: Product) => {
    try {
      console.log({ delete: product.sku });
      const response = await fetch(
        "https://das-scandiweb.000webhostapp.com/api/products",
        {
          method: "POST",
          body: JSON.stringify({ delete: product.sku }),
        }
      );
      if (!response.ok) {
        throw new Error("Network error. Response wasn't 'ok'.");
      }
      loadProducts();
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        throw new Error(`Error deleting product: ${error}`);
      }
    }
  };
  onMounted(loadProducts);

  /**
   * Function to delete a single product.
   *
   * @param product The product to delete.
   * @returns A promise indicating the completion of the delete operation.
   */
  /*const deleteProduct = (product: Product) => {
    return new Promise<void>((resolve, reject) => {
      fetch(`https://das-scandiweb.000webhostapp.com/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sku: product.sku }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network error. Response wasn't 'ok'.");
          }
          resolve();
        })
        .catch((error) => {
          if (error instanceof Error) {
            console.error(error);
            reject({
              message: "An error occurred while deleting a product.",
            });
          }
        });
    });
  };*/

  /**
   * Function to delete multiple products.
   *
   * @param productsToDelete The array of products to delete.
   * @returns A promise indicating the completion of the delete operations.
   */
  const deleteProducts = async (productsToDelete: Product[]) => {
    deleteStatus.value = "deleting";
    for (const product of productsToDelete) {
      try {
        await deleteProduct(product);
      } catch (caughtError) {
        if (caughtError instanceof Error) {
          error.value = { message: caughtError.message };
          console.error(caughtError);
        }
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
