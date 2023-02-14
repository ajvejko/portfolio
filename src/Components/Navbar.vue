<script setup>
import { ref } from "vue";
const show = ref(false);
</script>
<template>
  <nav>
    <!-- Something like a logo -->
    <div class="fixed top-0 left-0 right-0">
      <div
        class="flex justify-between bg-bgCustom px-6 py-3 shadow-xl shadow-bgCustom"
      >
        <a href="#" class="text-xl font-bold text-slate-100">matt</a>
        <!-- Navigation menu button -->
        <button @click="show = !show" class="text-xl text-slate-100">
          menu.
        </button>
      </div>
      <!-- Navigation options -->
      <Transition name="fade">
        <div v-if="show" class="flex flex-col bg-bgCustom/90 px-6 text-right">
          <a href="#" class="text-l mx-3 mt-1 text-neutral-300">1. projects</a>
          <a href="#" class="text-l mx-3 mt-1 text-neutral-300">2. about</a>
          <a href="#" class="text-l mx-3 mt-1 text-neutral-300">3. contact</a>
        </div>
      </Transition>
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
