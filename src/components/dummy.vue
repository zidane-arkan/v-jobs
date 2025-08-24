<!--
export default {
  data() {
    return {
      name: "daniz",
      status: "active",
      tasks: ["task 1", "task 2", "task 3", "task 4"],
      link: "https://google.com",
    };
  },
  methods: {
    toggleStatus() {
      // alert("Status changed");
      if (this.status === "active") {
        this.status = "pending";
      } else if (this.status === "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    },
  },
};
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <h3>Tasks:</h3>
  <!-- v-for directive -->
  <ul>
    <li v-for="task in tasks" :key="task">
      {{ task }}
    </li>
  </ul>
  <!-- v-bind (add value to attribute) -->
  <!-- <a v-bind:href="link" target="blank">Click for google</a> -->
  <!-- if receive data use ':' but if changed data use @ for attribute -->
  <a :href="link" target="blank">Click for google</a>
  <br />
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>
</template>

<!-- <script setup lang="ts">
import { ref, onMounted } from "vue";
// Long Version [Composition API]
// export default {
//   // Long Version [Composition API]
//   setup() {
//     const name = ref("daniz");
//     const status = ref("active");
//     const tasks = ref(["Task 1", "Task 2", "Task 3", "Task 4"]);

//     const toggleStatus = () => {
//       if (status.value === "active") {
//         status.value = "pending";
//       } else if (status.value === "pending") {
//         status.value = "inactive";
//       } else {
//         status.value = "active";
//       }
//     };

//     return {
//       name,
//       status,
//       tasks,
//       toggleStatus,
//     };
//   },
// ---------------------------------------------------------
// Short Version
const name = ref("daniz");
const status = ref("active");
const tasks = ref(["Task 1", "Task 2", "Task 3", "Task 4"]);
const newTask = ref("");
// Methods
const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const deleteTask = (taskId: number) => {
  // console.log(taskName);
  // tasks.value = tasks.value.filter((task) => task !== taskId);
  tasks.value.splice(taskId, 1);
};

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await response.json();
    tasks.value = data.map((item: Todo) => item?.title);
  } catch (error) {
    console.log("Error while fetching tasks", error);
  }
});
</script>

<template>
  <h1 class="text-2xl">{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>
  <br />
  <form @submit.prevent="addTask" class="grid grid-cols-70-30 gap-8">
    <div>
      <label for="newTask">Add New task</label>
      <input type="text" name="newTask" id="newTask" v-model="newTask" />
    </div>
    <button type="submit">Submit</button>
  </form>
  <br />
  <h3>Tasks:</h3>
  <!-- v-for directive -->
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>
        {{ task }}
      </span>
      <button @click="deleteTask(index)">x</button>
    </li>
  </ul>

  <br />
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>
</template>

<style scoped></style> -->
