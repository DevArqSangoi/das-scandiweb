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
 * Import necessary dependencies and hooks.
 */
import { onMounted, onUnmounted, ref, watch } from "vue";
import { Product } from "../composables/useProducts";
import $ from "jquery";

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

/**
 * This function is a Vue lifecycle hook that is called when the component is mounted.
 * It starts a setInterval which checks every 2 seconds if the state of the checkbox
 * (checked or unchecked) has changed, and if it has, it updates the 'selected' variable
 * and logs a message to the console.
 *
 * This function was implemented because of a specific requirement for QA. The QA team
 * manipulates checkbox states directly through the developer tools, and Vue.js isn't
 * designed to detect these types of state changes natively. This function helps Vue.js
 * recognize those state changes.
 */
let intervalId: number;
onMounted(() => {
  intervalId = window.setInterval(() => {
    const checkbox = $(".delete-checkbox")[0] as HTMLInputElement;
    if (checkbox.checked !== selected.value) {
      selected.value = checkbox.checked;
    }
  }, 2000);
});

/**
 * This function is a Vue lifecycle hook that is called when the component is unmounted.
 * It clears the setInterval which was set up in the onMounted function. This is done to
 * avoid unnecessary operations and possible errors or memory leaks after the component
 * has been unmounted.
 */
onUnmounted(() => {
  window.clearInterval(intervalId);
});
</script>
