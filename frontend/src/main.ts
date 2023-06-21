// src/main.ts
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import "@/assets/colorMode.scss";

createApp(App).use(router).mount("#app");
