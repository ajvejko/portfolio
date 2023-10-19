<script setup></script>
<template>
  <section class="relative min-h-screen px-3 pt-16" id="projects">
    <div class="md:m-auto md:w-3/4 xl:w-2/3">
      <h1
        class="text-center text-xl font-semibold text-textMainCustom md:text-2xl"
      >
        <span class="text-base font-normal md:text-lg">2.</span> projects
      </h1>
      <!-- Better Search Project -->
      <div class="mt-16 divide-y xl:mx-auto xl:w-3/4">
        <div class="relative p-3">
          <div
            class="absolute top-0 left-0 h-6 w-6 rounded-br-full bg-purple-500/30 blur md:h-8 md:w-8 xl:h-10 xl:w-10 2xl:w-12"
          ></div>
          <div
            class="absolute bottom-0 right-0 h-6 w-6 rounded-tl-full bg-pink-400/30 blur md:h-8 md:w-8 xl:h-10 xl:w-10 2xl:w-12"
          ></div>
          <h2 class="text-xl font-bold md:text-2xl xl:text-3xl">
            <span
              class="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent"
              >Better Search</span
            >
          </h2>
          <p
            class="mt-3 text-center text-sm text-stone-300 md:text-base xl:text-lg"
          >
            Better search is a site that allows you to make shortcuts to make
            your searching experience better.<br />
            <br />
            Tools I used:<br />
            <span class="text-emerald-400">Vue</span> +
            <span class="text-green-600">VueUse</span> +
            <span class="text-blue-800">Typescript</span> +
            <span class="text-blue-500">Tailwind</span> +
            <span class="text-pink-400">Vite</span>
            .
          </p>
        </div>
        <div class="flex justify-between py-2">
          <a
            href="https://www.bettersrch.com/"
            class="text-sm font-thin italic text-textMainCustom hover:underline md:text-base xl:text-lg"
            >check it out</a
          >
          <div>
            <a href="https://github.com/ajvejko/Bettersearch" alt="github"
              ><img
                class="transition_animation w-6 hover:scale-110 md:w-8 xl:w-10"
                src="../assets/github.svg"
            /></a>
          </div>
        </div>
      </div>

      <!-- Spin the Wheel Project -->
      <div class="mt-16 divide-y xl:mx-auto xl:w-3/4">
        <div class="relative p-3">
          <div
            class="animation_spinning absolute top-1/2 left-1/2 -z-10 -mt-16 -ml-16 h-32 w-32 rounded-full bg-gradient-to-b from-red-500 via-yellow-300 to-blue-500 blur-3xl filter"
          ></div>
          <h2 class="text-xl font-bold text-slate-100 md:text-2xl xl:text-3xl">
            Spin the Wheel
          </h2>
          <p
            class="mt-3 text-center text-sm text-stone-300 md:text-base xl:text-lg"
          >
            Spin the Wheel is a site where you can choose entries for a wheel of
            fortune like randomizer and spin it to see who wins! Built it to try
            out Canvas and animation.<br />
            <br />
            Tools I used:<br />
            <span class="text-emerald-400">Vue</span> +
            <span class="text-blue-800">Typescript</span> +
            <span class="text-blue-500">Tailwind</span> +
            <span class="text-pink-400">Vite</span>
            .
          </p>
        </div>
        <div class="flex justify-between py-2">
          <a
            href="https://spin-the-wheel-swart.vercel.app/"
            class="text-sm font-thin italic text-textMainCustom hover:underline md:text-base xl:text-lg"
            >check it out</a
          >
          <div>
            <a href="https://github.com/ajvejko/WheelOfFortune" alt="github"
              ><img
                class="transition_animation w-6 hover:scale-110 md:w-8 xl:w-10"
                src="../assets/github.svg"
            /></a>
          </div>
        </div>
      </div>

      <div
        class="mb-32 text-center font-bold text-textMainCustom md:mt-16 md:text-lg lg:mt-8"
      >
        More to come!
      </div>
      <div class="flex justify-center">
        <div class="absolute bottom-0">
          <div class="mb-3 text-sm font-thin text-stone-300 md:text-base">
            get in touch!
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="mx-auto h-6 w-6 animate-bounce stroke-neutral-100/70 md:h-8 md:w-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animation_spinning {
  animation: spin 4s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
