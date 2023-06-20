<!-- 
Product Card Component

This component represents a product card that shows various details about the product 
including its name, SKU, price, type, and other attributes depending on the type of the product.
The card also includes a checkbox which can be checked or unchecked to select the product.
-->
<template>
  <div class="product-card">
    <input
      type="checkbox"
      class="delete-checkbox"
      :class="{ checked: selected }"
      @click="toggle"
    />
    <div class="card-content">
      <div class="card-title">{{ product.name }}</div>
      <div class="card-attribute">{{ product.sku }}</div>
      <div class="card-price">US$ {{ product.price }}</div>
      <div class="card-attribute">{{ typeMapping[product.type] }}</div>
      <div v-if="product.type === 'dvd'" class="card-attribute">
        Size: {{ product.size }} MB
      </div>
      <div v-if="product.type === 'book'" class="card-attribute">
        Weight: {{ product.weight }} KG
      </div>
      <div v-if="product.type === 'furniture'" class="card-attribute">
        Dimensions:
        <div>
          {{ product.height }} H x {{ product.width }} W x
          {{ product.length }} L
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Import the necessary dependencies and hooks.
 */
import { ref, watch } from "vue";
import { Product } from "../composables/useProducts";

/**
 * Define the props that this component receives.
 * The component receives a product prop of type Product.
 */
defineProps<{
  product: Product;
}>();

/**
 * Ref to store whether the product is selected or not.
 * It's initially set to false.
 */
const selected = ref(false);

/**
 * Define the events that this component emits.
 * The component emits an "update:checked" event with the new value of the selected ref.
 */
const emit = defineEmits(["update:checked"]);

/**
 * Watch the selected ref for changes.
 * When selected changes, emit the "update:checked" event with the new value.
 */
watch(selected, (newValue: boolean) => {
  emit("update:checked", newValue);
});

/**
 * Function to toggle the selected status of the product.
 * When invoked, it flips the value of the selected ref.
 */
const toggle = () => {
  selected.value = !selected.value;
};

/**
 * Mapping from product types to their corresponding display names.
 * This is used to adjust the presentation of product types.
 */
const typeMapping = {
  dvd: "DVD",
  book: "Book",
  furniture: "Furniture",
};
</script>
