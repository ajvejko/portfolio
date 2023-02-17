<script setup></script>
<template>
  <section class="relative h-screen px-3 pt-16" id="projects">
    <div class="md:m-auto md:w-3/4">
      <h1 class="text-center text-xl font-semibold text-slate-100 md:text-2xl">
        <span class="text-base font-normal md:text-lg">2.</span> projects
      </h1>
      <!-- Better Search Project -->
      <div class="mt-16 divide-y">
        <div class="relative p-3">
          <div
            class="absolute top-0 left-0 h-6 w-6 rounded-br-full bg-purple-500/30 blur md:h-8 md:w-8"
          ></div>
          <div
            class="absolute bottom-0 right-0 h-6 w-6 rounded-tl-full bg-pink-400/30 blur md:h-8 md:w-8"
          ></div>
          <h2
            class="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-xl font-bold text-transparent md:text-2xl"
          >
            Better Search
          </h2>
          <p class="mt-3 text-center text-sm text-stone-300 md:text-base">
            Better search is a site that allows you to make shortcuts to make
            your searching experience better.<br />
            <br />
            I first built this in
            <span class="text-yellow-200">Javascript</span> then tried it in
            <span class="text-sky-500">React</span> and ended up using
            <span class="text-emerald-400">Vue</span> +
            <span class="text-blue-500">Tailwind</span>.
          </p>
        </div>
        <div class="flex justify-between py-2">
          <a
            href="https://www.bettersrch.com/"
            class="text-sm font-thin italic text-slate-100 hover:underline md:text-base"
            >check it out</a
          >
          <div>
            <a href="https://github.com/ajvejko/bettersearch-vue" alt="github"
              ><img class="w-6 md:w-8" src="../assets/github.svg"
            /></a>
          </div>
        </div>
      </div>

      <div class="mt-32 text-center font-bold text-slate-100 md:text-lg">
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
