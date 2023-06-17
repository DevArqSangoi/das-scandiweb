<template>
  <form
    id="product_form"
    class="container dynamic-form"
    @submit.prevent="submitForm"
  >
    <div class="header">
      <h1>PRODUCT ADD</h1>
      <div class="button-group">
        <button type="submit" class="button">Save</button>
        <button type="button" class="button" @click="cancel">Cancel</button>
      </div>
    </div>
    <div class="line-divider"></div>
    <div class="input-group">
      <label for="sku">SKU:</label>
      <input
        type="text"
        id="sku"
        v-model="selectedProduct.sku"
        placeholder="SKU"
      />
    </div>
    <div class="input-group">
      <label for="name">Name:</label>
      <input
        type="text"
        id="name"
        v-model="selectedProduct.name"
        placeholder="Name"
      />
    </div>
    <div class="input-group">
      <label for="price">Price ($):</label>
      <input
        v-model.number="selectedProduct.price"
        id="price"
        placeholder="Price"
      />
    </div>
    <div class="select-type">
      <select v-model="selectedProduct.type">
        <option value="dvd">DVD</option>
        <option value="furniture">Furniture</option>
        <option value="book">Book</option>
      </select>
    </div>
    <div v-if="selectedProduct.type === 'dvd'">
      <div class="input-group">
        <label for="size">Size (mb):</label>
        <input
          v-model.number="selectedProduct.size"
          id="size"
          placeholder="Size"
        />
      </div>
    </div>
    <div v-if="selectedProduct.type === 'furniture'">
      <div class="input-group">
        <label for="height">Height:</label>
        <input
          v-model.number="selectedProduct.height"
          id="height"
          placeholder="Height"
        />
      </div>
      <div class="input-group">
        <label for="width">Width:</label>
        <input
          v-model.number="selectedProduct.width"
          id="width"
          placeholder="Width"
        />
      </div>
      <div class="input-group">
        <label for="length">Length:</label>
        <input
          v-model.number="selectedProduct.length"
          id="length"
          placeholder="Length"
        />
      </div>
    </div>
    <div v-if="selectedProduct.type === 'book'">
      <div class="input-group">
        <label for="weight">Weight (kg):</label>
        <input
          v-model.number="selectedProduct.weight"
          id="weight"
          placeholder="Weight"
        />
      </div>
    </div>
    <div class="line-divider"></div>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import useProducts, {
  DvdProduct,
  BookProduct,
  FurnitureProduct,
} from "../composables/useProducts";

const router = useRouter();
const { addProduct } = useProducts();

const productType = ref("dvd");

const dvdProduct = ref<DvdProduct>({
  sku: "",
  name: "",
  price: 0,
  type: "dvd",
  size: 0,
});

const bookProduct = ref<BookProduct>({
  sku: "",
  name: "",
  price: 0,
  type: "book",
  weight: 0,
});

const furnitureProduct = ref<FurnitureProduct>({
  sku: "",
  name: "",
  price: 0,
  type: "furniture",
  height: 0,
  width: 0,
  length: 0,
});

const selectedProduct = computed(() => {
  switch (productType.value) {
    case "dvd":
      return dvdProduct.value;
    case "book":
      return bookProduct.value;
    case "furniture":
      return furnitureProduct.value;
    default:
      throw new Error(`Unsupported product type: ${productType.value}`);
  }
});

async function submitForm() {
  try {
    console.log(selectedProduct.value);
    await addProduct(selectedProduct.value);
    router.push("/products");
  } catch (error) {
    console.error("Erro ao adicionar produto:", error);
  }
}

const cancel = () => {
  router.push("/products");
};
</script>
