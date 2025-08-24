<script setup lang="ts">
import JobsLayout from "@/layouts/JobsLayout.vue";
</script>

<template>
  <!-- Filter Jobs -->
  <section class="bg-green-50 py-4">
    <div class="container mx-auto px-4">
      <div class="relative">
        <input
          type="text"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          placeholder="Filter jobs..."
        />
      </div>
    </div>
  </section>
  <!-- All Jobs -->
  <JobsLayout :limit="0" :showButton="false" />
</template>
