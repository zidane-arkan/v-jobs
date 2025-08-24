<script setup lang="ts">
import { defineProps, type PropType, ref, computed } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { RouterLink } from "vue-router";

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
const props = defineProps({
  id: {
    type: String,
  },
  job: {
    type: Object as PropType<Job>,
  },
});

const showFullDesc = ref(false);
const truncatedDesc = computed(() => {
    let desc = props.job?.description;
    if(!showFullDesc.value){
        desc = desc?.substring(0, 120) + '...'
    }
    return desc;
})
const toggleFullDesc = () => {
    showFullDesc.value = !showFullDesc.value;
}
</script>

<template>
  <!-- Job Listing -->
  <div :id="id" class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ job?.type }}</div>
        <h3 class="text-xl font-bold">{{ job?.title }}</h3>
      </div>

      <div class="mb-5">
        <!-- We are seeking a talented Front-End Developer to join our team in Boston, MA.
          The ideal candidate will have strong skills in HTML, CSS, and JavaScript... -->
        <div>
          {{ truncatedDesc }}
        </div>
        <button @click="toggleFullDesc" class="cursor-pointer underline text-blue-500">
          {{ showFullDesc ? "Less" : "More" }}
        </button>
      </div>

      <h3 class="text-green-500 mb-2">{{ job?.salary }} / Year</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <FontAwesomeIcon :icon="faLocationDot" />
          {{ job?.location }}
        </div>
        <RouterLink
          :to="`/jobs/${job?.id}`"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>
