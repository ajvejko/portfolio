<script setup>
import { ref } from "vue";
const show = ref(false);
</script>
<template>
  <nav>
    <!-- Something like a logo -->
    <div class="fixed left-0 right-0 top-0">
      <div class="flex justify-between px-6 pt-6">
        <a href="#" class="text-xl font-bold text-slate-100">matt</a>
        <!-- Navigation menu button -->
        <button @click="show = !show" class="text-xl text-slate-100">
          menu.
        </button>
      </div>
      <!-- Navigation options -->
      <Transition name="fade">
        <div v-if="show" class="px-6 text-right">
          <a href="#" class="text-l ml-3 text-neutral-300">about.</a>
          <a href="#" class="text-l ml-3 text-neutral-300">projects.</a>
          <a href="#" class="text-l ml-3 text-neutral-300">contact.</a>
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
