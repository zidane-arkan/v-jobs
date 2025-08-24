<script setup lang="ts">
import jobData from "@/jobs.json";
import JobListCard from "@/components/Cards/JobListCard.vue";
import { reactive, onMounted } from "vue";
import { RouterLink } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import axios from "axios";

// Define an interface for the Job object
interface Job {
  id: number;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
}

defineProps({
  limit: { type: Number, default: undefined },
  showButton: { type: Boolean, default: false },
});
// const jobs = ref([]);
const state = reactive({
  jobs: [] as Job[],
  isLoading: true,
});
onMounted(async () => {
  try {
    const response = await axios("/api/jobs");
    state.jobs = response?.data;
  } catch (error) {
    console.error("error fetching data = " + error);
  } finally {
    setTimeout(() => {
      state.isLoading = false;
    }, 200);
  }
});
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
    </div>
    <!-- Job List -->
    <!-- <div v-if="state?.isLoading && state.jobs !== null" class="text-center">
      <PulseLoader />
    </div> -->
    <div v-if="state?.isLoading" class="text-center py-6">
      <PulseLoader />
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <JobListCard
        v-for="job in state?.jobs.slice(0, limit || state?.jobs.length)"
        :key="job?.id"
        :id="`job-${job?.id.toString()}`"
        :job="job"
      />
    </div>
  </section>
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs
    </RouterLink>
  </section>
</template>
