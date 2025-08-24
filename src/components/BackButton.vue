<script setup lang="ts">
import { RouterLink } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink
        to="/jobs"
        class="text-green-500 hover:text-green-600 flex items-center"
      >
        <FontAwesomeIcon :icon="faArrowLeft" class="mr-2"></FontAwesomeIcon>
        Back to Job Listings
      </RouterLink>
    </div>
  </section>
</template>
