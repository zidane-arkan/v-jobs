<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import { RouterView } from "vue-router";

// onMounted(async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
//     const data = await response.json();
//     tasks.value = data.map((item: Todo) => item?.title);
//   } catch (error) {
//     console.log("Error while fetching tasks", error);
//   }
// });
</script>

<template>
  <Navbar />
  <RouterView />
  <!-- <Hero title="Test Title" subtitle="Find the Vue job that fits your skills and needs" /> -->
  <!-- <HomeView /> -->
</template>

<style scoped></style>
