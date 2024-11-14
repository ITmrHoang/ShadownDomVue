import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // This is where you tell Vue that a custom element is not a Vue component
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("my-"), // Customize this to match your custom element
        },
      },
    }),
  ],
});
