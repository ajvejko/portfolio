<script setup>
import { ref } from "vue";
const opened = ref(false);
</script>
<template>
  <nav>
    <!-- Desktop -->
    <div class="hidden w-full justify-evenly md:flex">
      <!-- Logo -->
      <div class="p-3 font-sarabun">
        <a href="#" class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="mx-3 h-8 w-8 stroke-teal-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <span class="text-2xl text-neutral-100 hover:text-teal-600"
            >Matt</span
          >
        </a>
      </div>
      <!-- Navigations -->
      <div class="hidden justify-evenly p-3 font-sarabun md:flex">
        <a href="#" class="mr-3 text-xl text-neutral-300/90 hover:text-teal-300"
          >About</a
        >
        <a href="#" class="mr-3 text-xl text-neutral-300/90 hover:text-teal-400"
          >Projects</a
        >
        <a href="#" class="mr-3 text-xl text-neutral-300/90 hover:text-teal-500"
          >Contact</a
        >
      </div>
    </div>

    <!-- Mobile -->
    <div class="flex justify-between md:hidden">
      <!-- Logo -->
      <div class="p-3 font-sarabun">
        <a href="#" class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="mx-3 h-6 w-6 stroke-teal-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <span class="text-xl text-teal-600">Matt</span>
        </a>
      </div>
      <!-- Menu -->
      <div class="p-3 font-sarabun md:hidden">
        <div class="text-right">
          <button @click="opened = !opened">
            <!-- Menu Icon -->
            <svg
              v-if="!opened"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="h-6 w-6 stroke-neutral-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
            <!-- Close menu Icon -->
            <svg
              v-if="opened"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6 stroke-neutral-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <!-- Navigations -->
        <div v-if="opened" class="flex flex-col text-right font-sarabun">
          <a href="#" class="text-l text-neutral-300/90">About</a>
          <a href="#" class="text-l text-neutral-300/90">Projects</a>
          <a href="#" class="text-l text-neutral-300/90">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>
