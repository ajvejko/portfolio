<script setup>
import { ref } from "vue";
const show = ref(false);
</script>
<template>
  <nav>
    <!-- Something like a logo -->
    <div class="fixed top-0 left-0 right-0 z-10 xl:hidden">
      <div
        class="flex justify-between bg-bgCustom px-6 py-3 shadow-xl shadow-bgCustom"
      >
        <a
          href="#home"
          class="text-xl font-bold text-textMainCustom md:text-2xl"
          >matt</a
        >
        <!-- Navigation menu button -->
        <button
          @click="show = !show"
          class="text-xl text-textMainCustom md:text-2xl"
        >
          menu.
        </button>
      </div>
      <!-- Navigation options -->
      <Transition name="fade">
        <div
          v-if="show"
          class="flex flex-col bg-bgCustom/90 px-6 pb-3 text-right"
        >
          <a
            @click="show = !show"
            href="#about"
            class="mx-3 mt-1 text-neutral-300 md:text-lg"
            >1. about</a
          >
          <a
            @click="show = !show"
            href="#projects"
            class="mx-3 mt-1 text-neutral-300 md:text-lg"
            >2. projects</a
          >
          <a
            @click="show = !show"
            href="#contact"
            class="mx-3 mt-1 text-neutral-300 md:text-lg"
            >3. contact</a
          >
        </div>
      </Transition>
    </div>
    <!-- Desktop view -->
    <div class="fixed top-0 left-0 right-0 z-10 hidden xl:block">
      <div
        class="flex justify-between bg-bgCustom px-6 py-3 shadow-xl shadow-bgCustom"
      >
        <a
          href="#home"
          class="text-xl font-bold text-textMainCustom hover:underline md:text-2xl"
          >matt</a
        >
        <!-- Navigation options -->
        <div class="flex justify-evenly bg-bgCustom/90 pb-3 text-right">
          <a
            href="#about"
            class="mx-3 mt-1 text-neutral-300 hover:text-textMainCustom md:text-lg"
            >1. about</a
          >
          <a
            href="#projects"
            class="mx-3 mt-1 text-neutral-300 hover:text-textMainCustom md:text-lg"
            >2. projects</a
          >
          <a
            href="#contact"
            class="mx-3 mt-1 text-neutral-300 hover:text-textMainCustom md:text-lg"
            >3. contact</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
