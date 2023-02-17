<script setup></script>

<template>
  <section class="h-screen" id="home">
    <div class="px-6 pt-52 md:m-auto md:w-3/4 xl:w-2/3">
      <!-- Greeting -->
      <h3 class="font-thin text-slate-100 md:text-lg xl:text-xl">
        Hi, my name is
      </h3>
      <span
        class="bg-gradient-to-r from-teal-600 to-green-800 bg-clip-text text-2xl text-transparent md:text-3xl xl:text-4xl"
        >Matej Moucka.</span
      >
      <div class="text-xs font-thin text-neutral-700 md:text-sm xl:text-base">
        (You can call me matt!)
      </div>
      <!-- Short about me -->
      <div class="mt-10 flex justify-end text-right md:text-lg xl:text-xl">
        <p class="max-w-sm text-slate-100">
          I'm a front-end developer based in Czechia. I fell in love with making
          web applications and minimalistic designs.
        </p>
      </div>
      <!-- Current interest in tech -->
      <div class="text-center">
        <h1 class="mt-32 font-thin text-slate-100 md:text-lg xl:text-xl">
          my current interest in tech:
        </h1>
        <div class="mt-5 flex justify-evenly">
          <img src="../assets/vue.svg" alt="vue" class="mr-3 w-14 md:w-16" />
          <img
            src="../assets/typescript.svg"
            alt="typescript"
            class="mr-3 w-12 md:w-14"
          />
          <img
            src="../assets/tailwind.svg"
            alt="tailwind"
            class="mr-3 w-14 md:w-16"
          />
          <img src="../assets/vite.svg" alt="vite" class="mr-3 w-12 md:w-14" />
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="absolute bottom-0 left-1/2 right-1/2 -z-10 h-6 w-6 animate-bounce stroke-neutral-100/70 md:h-8 md:w-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
        />
      </svg>
    </div>
  </section>
</template>
