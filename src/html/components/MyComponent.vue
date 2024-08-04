<template>
  <div>
    <h1>Hello from Vue!</h1>
    <input type="text" v-model="color"/>
    <p>{{ color }}</p> 
  </div>
</template>

<script setup>
  // Your Vue component logic here
  import { ref } from "vue"
  const color = ref("green");
</script>

<style scoped>
  /* Your Vue component styles here */
</style>