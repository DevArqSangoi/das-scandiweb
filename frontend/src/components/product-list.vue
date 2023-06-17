<template>
  <div class="container">
    <div class="header">
      <h1>PRODUCT LIST</h1>
      <div class="button-group">
        <router-link to="/add-product" class="button">Add Product</router-link>
        <button
          @click="deleteSelectedProducts"
          class="button"
          id="delete-product-btn"
        >
          Mass Delete
        </button>
      </div>
    </div>
    <div class="line-divider"></div>
    <carousel
      class="meupau"
      :mouseDrag="true"
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
        <pagination />
      </template>
    </carousel>
    <div class="line-divider"></div>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref, onMounted, computed } from "vue";
import { Product } from "../composables/useProducts";
import useProducts from "../composables/useProducts";
import ProductCard from "./product-card.vue";

const { products, loadProducts, deleteProducts } = useProducts();
const selectedProducts = ref<boolean[]>([]);

onMounted(async () => {
  await loadProducts();
  selectedProducts.value = new Array(products.value.length).fill(false);
});

const deleteSelectedProducts = async () => {
  const productsToDelete: Product[] = selectedProducts.value
    .map((isChecked, index) => (isChecked ? products.value[index] : null))
    .filter((product): product is Product => product !== null);
  await deleteProducts(productsToDelete);
  await loadProducts();
  selectedProducts.value = new Array(products.value.length).fill(false);
};

const chunkedProducts = computed(() => {
  let chunked = [];
  for (let i = 0; i < products.value.length; i += 16) {
    chunked.push(products.value.slice(i, i + 16));
  }
  return chunked;
});
</script>
