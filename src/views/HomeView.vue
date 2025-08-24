<script setup lang="ts">
import Hero from "@/components/Hero.vue";
import HomeLayout from "@/layouts/HomeLayout.vue";
import JobsLayout from "@/layouts/JobsLayout.vue";
</script>

<template>
  <Hero />
  <HomeLayout />
  <JobsLayout :limit="3" :showButton="true" />
</template>
