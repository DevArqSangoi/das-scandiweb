<template>
  <form
    id="product_form"
    class="add-container dynamic-form"
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
        @input="validation.isValidSku = true"
        :class="{ error: !validation.isValidSku }"
      />
      <div class="description">
        >
        <span v-if="!validation.isValidSku" class="error-message"
          >Invalid SKU.</span
        >
      </div>
    </div>
    <div class="input-group">
      <label for="name">Name:</label>
      <input
        type="text"
        id="name"
        v-model="selectedProduct.name"
        placeholder="Name"
        @input="validation.isValidName = true"
        :class="{ error: !validation.isValidName }"
      />
      <div class="description">
        >
        <span v-if="!validation.isValidName" class="error-message"
          >Invalid name.</span
        >
      </div>
    </div>
    <div class="input-group">
      <label for="price">Price ($):</label>
      <input
        v-model.number="selectedProduct.price"
        id="price"
        placeholder="Price"
        @input="validation.isValidPrice = true"
        :class="{ error: !validation.isValidPrice }"
      />
      <div class="description">
        >
        <span v-if="!validation.isValidName" class="error-message"
          >Invalid price.</span
        >
      </div>
    </div>
    <div class="select-type">
      <label for="productType">Type:</label>
      <select v-model="selectedProduct.type" id="productType">
        <option value="dvd">DVD</option>
        <option value="book">Book</option>
        <option value="furniture">Furniture</option>
      </select>
    </div>
    <div v-if="selectedProduct.type === 'dvd'">
      <div class="input-group">
        <label for="size">Size (mb):</label>
        <input
          v-model.number="selectedProduct.size"
          id="size"
          placeholder="Size"
          @input="validation.isValidSize = true"
          :class="{ error: !validation.isValidSize }"
        />
      </div>
      <div class="description">
        >
        <span
          :class="{
            'error-message': !validation.isValidSize,
            blink: !selectedProduct.size,
          }"
        >
          {{
            validation.isValidSize
              ? "Please, provide size in mb."
              : "Invalid size."
          }}
        </span>
      </div>
    </div>
    <div v-if="selectedProduct.type === 'book'">
      <div class="input-group">
        <label for="weight">Weight (kg):</label>
        <input
          v-model.number="selectedProduct.weight"
          id="weight"
          placeholder="Weight"
          @input="validation.isValidWeight = true"
          :class="{ error: !validation.isValidWeight }"
        />
      </div>
      <div class="description">
        >
        <span
          :class="{
            'error-message': !validation.isValidWeight,
            blink: !selectedProduct.weight,
          }"
        >
          {{
            validation.isValidWeight
              ? "Please, provide weight in kg."
              : "Invalid weight."
          }}
        </span>
      </div>
    </div>
    <div v-if="selectedProduct.type === 'furniture'">
      <div class="input-group">
        <label for="height">Height (kg):</label>
        <input
          v-model.number="selectedProduct.height"
          id="height"
          placeholder="Height"
          @input="validation.isValidHeight = true"
          :class="{ error: !validation.isValidHeight }"
        />
      </div>
      <div class="description">
        >
        <span
          :class="{
            'error-message': !validation.isValidHeight,
            blink: !selectedProduct.height,
          }"
        >
          {{
            validation.isValidHeight
              ? "Please, provide height in meters."
              : "Invalid height."
          }}
        </span>
      </div>
      <div class="input-group">
        <label for="width">Width (kg):</label>
        <input
          v-model.number="selectedProduct.width"
          id="width"
          placeholder="Width"
          @input="validation.isValidWidth = true"
          :class="{ error: !validation.isValidWidth }"
        />
      </div>
      <div class="description">
        >
        <span
          :class="{
            'error-message': !validation.isValidWidth,
            blink: !selectedProduct.width,
          }"
        >
          {{
            validation.isValidWidth
              ? "Please, provide width in meters."
              : "Invalid width."
          }}
        </span>
      </div>
      <div class="input-group">
        <label for="length">Length (kg):</label>
        <input
          v-model.number="selectedProduct.length"
          id="length"
          placeholder="Length"
          @input="validation.isValidLength = true"
          :class="{ error: !validation.isValidLength }"
        />
      </div>
      <div class="description">
        >
        <span
          :class="{
            'error-message': !validation.isValidLength,
            blink: !selectedProduct.length,
          }"
        >
          {{
            validation.isValidLength
              ? "Please, provide length in meters."
              : "Invalid length."
          }}
        </span>
      </div>
    </div>
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
  </form>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import { useRouter } from "vue-router";
import useProducts, {
  DvdProduct,
  BookProduct,
  FurnitureProduct,
} from "../composables/useProducts";
import useTheme from "@/composables/useTheme";
const { addProduct } = useProducts();
const { toggleTheme, isDarkMode } = useTheme();

const router = useRouter();
const productType = reactive({ value: "dvd" });
const dvdProduct = reactive<DvdProduct>({
  sku: "",
  name: "",
  price: 0,
  type: "dvd",
  size: 0,
});

const bookProduct = reactive<BookProduct>({
  sku: "",
  name: "",
  price: 0,
  type: "book",
  weight: 0,
});

const furnitureProduct = reactive<FurnitureProduct>({
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
      return dvdProduct;
    case "book":
      return bookProduct;
    case "furniture":
      return furnitureProduct;
    default:
      throw new Error(`Unsupported product type: ${productType.value}`);
  }
});

// Validation refs
const validation = reactive({
  isValidSku: true,
  isValidName: true,
  isValidPrice: true,
  isValidSize: true,
  isValidWeight: true,
  isValidHeight: true,
  isValidWidth: true,
  isValidLength: true,
  isValidForm: true,
});

async function submitForm() {
  validation.isValidForm = validateForm();

  if (validation.isValidForm) {
    try {
      console.log(selectedProduct.value);
      await addProduct(selectedProduct.value);
      router.push("/products");
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
  }
}

function validateForm() {
  validation.isValidSku = selectedProduct.value.sku !== "";
  validation.isValidName = selectedProduct.value.name !== "";
  validation.isValidPrice = selectedProduct.value.price > 0;

  switch (selectedProduct.value.type) {
    case "dvd":
      validation.isValidSize =
        selectedProduct.value.size > 0 && selectedProduct.value.size <= 45000;
      break;
    case "book":
      validation.isValidWeight =
        selectedProduct.value.weight > 0 && selectedProduct.value.weight <= 10;
      break;
    case "furniture":
      validation.isValidHeight =
        selectedProduct.value.height > 0 && selectedProduct.value.height <= 5;
      validation.isValidWidth =
        selectedProduct.value.width > 0 && selectedProduct.value.width <= 5;
      validation.isValidLength =
        selectedProduct.value.length > 0 && selectedProduct.value.length <= 5;
      break;
  }

  return (
    validation.isValidSku &&
    validation.isValidName &&
    validation.isValidPrice &&
    validation.isValidSize &&
    validation.isValidWeight &&
    validation.isValidHeight &&
    validation.isValidWidth &&
    validation.isValidLength
  );
}

const cancel = () => {
  router.push("/products");
};
</script>
