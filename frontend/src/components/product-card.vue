<template>
  <div class="product-card card">
    <input
      type="checkbox"
      class="delete-checkbox"
      :checked="selected"
      @change="update"
    />
    <div class="card-title">{{ product.name }}</div>
    <div class="card-attribute">{{ product.sku }}</div>
    <div class="card-price">{{ product.price }}</div>
    <div class="card-attribute">{{ product.type }}</div>
    <div v-if="product.type === 'dvd'" class="card-attribute">
      Size: {{ product.size }} MB
    </div>
    <div v-if="product.type === 'book'" class="card-attribute">
      Weight: {{ product.weight }} KG
    </div>
    <div v-if="product.type === 'furniture'" class="card-attribute">
      Dimensions: {{ product.height }} H x {{ product.width }} W x
      {{ product.length }} L
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from "vue";
import { Product } from "../composables/useProducts";

defineProps<{
  product: Product;
}>();

const selected = ref(false);

const emit = defineEmits(["update:checked"]);

watch(selected, (newValue: boolean) => {
  emit("update:checked", newValue);
});

const update = (event: Event) => {
  selected.value = (event.target as HTMLInputElement).checked;
};
</script>
