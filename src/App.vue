<script setup lang="ts">
import BaseCard from './components/BaseCard.vue';
// import { RouterLink, RouterView } from 'vue-router'



</script>

<template>
  <!-- <header>
    <img src="/src/assets/img/blue_rectangle.png" alt="blue rectangle">
    <h1 style="color: white;">The Magnificent Seven Companies</h1>
  </header> -->
  <BaseCard />

  <RouterView />
</template>

<style>
body {
  margin: 0;
}
</style>