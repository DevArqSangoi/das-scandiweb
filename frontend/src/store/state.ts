// src/store/state.ts
console.log("Executando state.ts...");
import { Product } from "./productsModule";
export interface RootState {
  products: Product[];
}
console.log("Finalizado state.ts");
