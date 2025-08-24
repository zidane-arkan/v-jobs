<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";
import type { CompanyInfo } from "@/types/Job";
import type { PropType } from "vue";
import { useToast } from "vue-toastification";
import axios from "axios";
const props = defineProps({
  jobId: String,
  companyData: {
    type: Object as PropType<CompanyInfo>,
  },
});
const router = useRouter();
const toast = useToast();
const deleteJob = async () => {
  try {
    const confirm = window.confirm("Are you sure yo want to delete this Job ?");
    if (confirm) {
      const response = await axios.delete(`/api/jobs/${props.jobId}`);
      console.log(response);
      toast.success(
        `Job With title ${response?.data?.title} and id ${response?.data?.id} Deleted!`
      );
      router.push("/jobs/");
    } else {
      return;
    }
  } catch (error) {
    toast.error(`Error occured whet fetching jobs = ${error}`);
    console.error(error);
  }
};
</script>

<template>
  <!-- Sidebar -->
  <aside>
    <!-- Company Info -->
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-bold mb-6">Company Info</h3>

      <h2 class="text-2xl">{{ companyData?.name }}</h2>

      <p class="my-2">
        <!-- NewTek Solutions is a leading technology company specializing in web development
        and digital solutions. We pride ourselves on delivering high-quality products and
        services to our clients while fostering a collaborative and innovative work
        environment. -->
        {{ companyData?.description }}
      </p>

      <hr class="my-4" />

      <h3 class="text-xl">Contact Email:</h3>

      <p class="my-2 bg-green-100 p-2 font-bold">{{ companyData?.contactEmail }}</p>

      <h3 class="text-xl">Contact Phone:</h3>

      <p class="my-2 bg-green-100 p-2 font-bold">{{ companyData?.contactPhone }}</p>
    </div>

    <!-- Manage -->
    <div class="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 class="text-xl font-bold mb-6">Manage Job</h3>
      <RouterLink
        :to="`/jobs/edit/${jobId}`"
        class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
        >Edit Job
      </RouterLink>
      <button
        class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
        @click="deleteJob"
      >
        Delete Job
      </button>
    </div>
  </aside>
</template>
