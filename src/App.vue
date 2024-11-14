<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const test = ref('131233')

// Lắng nghe sự kiện 'inputChanged' từ custom element
const handleInputChanged = (event) => {
  console.log('Giá trị input đã thay đổi:', event.detail); // In giá trị mới
  test.value = event.detail; // Cập nhật giá trị trong Vue
};
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <p>{{test}}</p>
  <my-component v-model="test" @inputChanged="handleInputChanged"></my-component>
</template>

<style global>

input {
  background-color: red;
}
</style>
