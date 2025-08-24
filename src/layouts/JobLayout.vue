<script setup lang="ts">
import type { Job } from "@/types/Job";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import Sidebar from "@/components/Sidebar.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import BounceLoader from "vue-spinner/src/BounceLoader.vue";
const route = useRoute();
const jobId = route?.params?.id;
// console.log(jobId);
const jobState = reactive({
  job: {} as Job,
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios(`/api/jobs/${jobId}`);
    jobState.job = response?.data;
  } catch (error) {
    console.error("Fethcing data is error = " + error);
  } finally {
    setTimeout(() => (jobState.isLoading = false), 1000);
  }
});
</script>

<template>
  <section class="bg-green-50">
    <!-- {{ jobState.job }} -->
    <div
      v-if="jobState.isLoading"
      class="w-full absolute top-1/2 left-1/2 right-0 mx-auto"
    >
      <BounceLoader />
    </div>
    <div v-else class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-[70%_28%] w-full gap-6">
        <!-- Main Content -->
        <main>
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <div class="text-gray-500 mb-4">{{ jobState.job.type }}</div>
            <h1 class="text-3xl font-bold mb-4">{{ jobState.job.title }}</h1>
            <div
              class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
            >
              <FontAwesomeIcon
                :icon="faLocationDot"
                class="text-lg text-orange-700 mr-2"
              ></FontAwesomeIcon>
              <p class="text-orange-700">{{ jobState.job.location }}</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">Job Description</h3>

            <p class="mb-4">
              <!-- We are seeking a talented Front-End Developer to join our team in Boston,
              MA. The ideal candidate will have strong skills in HTML, CSS, and
              JavaScript, with experience working with modern JavaScript frameworks such
              as Vue or Angular. -->
              {{ jobState.job.description }}
            </p>

            <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>

            <p class="mb-4">{{ jobState.job.salary }} / Year</p>
          </div>
        </main>
        <!-- SideBar -->
        <Sidebar :job-id="jobState.job.id" :company-data="jobState.job.company" />
      </div>
    </div>
  </section>
</template>
