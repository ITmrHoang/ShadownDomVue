<template>
  <div>
    <label for="input">Nhập giá trị: </label>
    <input
      id="input"
      type="text"
      :value="modelValue" 
      @input="updateValue">
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// Định nghĩa các props nhận giá trị từ component cha
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});

// Định nghĩa emit để phát ra sự kiện thay đổi giá trị
const emit = defineEmits(['update:modelValue']);

// Hàm để cập nhật giá trị khi người dùng thay đổi input
const updateValue = (event) => {
  const inputElement = event.target;
  emit('update:modelValue', event.target.value);
  const customEvent = new CustomEvent('inputChanged', {
    detail: event.target.value,
    bubbles: true,  // Nếu bạn muốn sự kiện bubble lên các phần tử cha
    composed: true, // Cho phép sự kiện đi qua Shadow DOM
  });
  
  console.log(event.target.value, 'innn')
  // Phát sự kiện lên window hoặc một phần tử DOM nào đó
  inputElement.dispatchEvent(customEvent);
};
</script>

<style scoped>
/* Các style đặc trưng cho component con */
</style>
