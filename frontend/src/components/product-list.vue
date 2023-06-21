<!--
Product List Component  

This component is used to display a list of products, allow users to add new products, and delete selected products.
A theme switcher is also provided at the bottom to switch between light and dark modes.
-->
<template>
  <div class="container">
    <div class="header">
      <h1>PRODUCT LIST</h1>
      <transition name="fade">
        <p v-if="deleteStatus !== 'idle'" class="delete">
          {{ deleteStatus === "deleting" ? "Deleting..." : "Deleted!" }}
        </p>
      </transition>
      <div class="button-group">
        <router-link to="/add-product" class="button">ADD</router-link>
        <button
          @click="deleteSelectedProducts"
          class="button"
          id="delete-product-btn"
        >
          MASS DELETE
        </button>
      </div>
    </div>
    <div class="line-divider"></div>
    <carousel
      :mouseDrag="false"
      :transition="1500"
      :items-to-show="1.3"
      :wrap-around="true"
    >
      <Slide v-for="(chunk, index) in chunkedProducts" :key="index">
        <div class="product-grid">
          <ProductCard
            v-for="(product, i) in chunk"
            :key="product.sku"
            :product="product"
            v-model:checked="selectedProducts[index * 16 + i]"
            class="card"
          />
        </div>
      </Slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
    <div class="line-divider"></div>
    <div class="footer">
      <div class="empty-div"></div>
      <span class="foottext">Scandiweb Test assignment</span>
      <div class="slider-container">
        <label class="switch">
          <input
            type="checkbox"
            v-model="isDarkMode"
            id="theme-switch"
            @change="toggleTheme"
          />
          <span class="slider round">
            <span class="moon">&#127769;</span>
            <span class="sun">&#9728;</span>
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Import necessary dependencies and hooks.
 */
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref, onMounted, computed } from "vue";
import { Product } from "../composables/useProducts";
import useProducts from "../composables/useProducts";
import ProductCard from "./product-card.vue";
import useTheme from "@/composables/useTheme";

/**
 * Define constants from useTheme and useProducts.
 */
const { toggleTheme, isDarkMode } = useTheme();
const { products, loadProducts, deleteProducts, deleteStatus } = useProducts();

/**
 * A ref to store the status of the selected products. Initialized as an empty array.
 */
const selectedProducts = ref<boolean[]>([]);

/**
 * Lifecycle hook for mounted. Load products data when component is mounted.
 */
onMounted(async () => {
  await loadProducts();
  selectedProducts.value = new Array(products.value.length).fill(false);
});

/**
 * Function to delete selected products. It maps over the selectedProducts to create a new array of products to be deleted.
 * After deletion, reload the product list and reset the selectedProducts array.
 */
const deleteSelectedProducts = async () => {
  const productsToDelete: Product[] = selectedProducts.value
    .map((isChecked, index) => (isChecked ? products.value[index] : null))
    .filter((product): product is Product => product !== null);
  await deleteProducts(productsToDelete);
  await loadProducts();
  selectedProducts.value = new Array(products.value.length).fill(false);
};

/**
 * Computed value for chunked products, it chunks the products array in chunks of 16 products.
 */
const chunkedProducts = computed(() => {
  let chunked = [];
  for (let i = 0; i < products.value.length; i += 16) {
    chunked.push(products.value.slice(i, i + 16));
  }
  return chunked;
});
</script>
