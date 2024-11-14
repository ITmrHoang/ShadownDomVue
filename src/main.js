import { createApp, defineCustomElement } from "vue";
import "./style.css";
import App from "./App.vue";
import InputWithShadown from "./components/InputWithShadown.vue";

const app = createApp(App);
// Định nghĩa Custom Element bằng Vue component
const InputWithShadownEl = defineCustomElement(InputWithShadown);

// Đăng ký custom element trong document
customElements.define("my-component", InputWithShadownEl);
app.mount("#app");
