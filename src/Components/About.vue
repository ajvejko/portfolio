<script setup></script>

<template>
  <section class="relative h-screen px-6 pt-16" id="about">
    <div class="flex flex-col md:m-auto md:w-3/4 xl:w-2/3 2xl:w-1/2">
      <h1
        class="text-center text-xl font-semibold text-slate-100 md:text-2xl xl:text-3xl"
      >
        <span class="text-base font-normal md:text-lg xl:text-xl">1.</span>
        about
      </h1>
      <div class="divide-y">
        <p class="mt-10 text-sm text-stone-300 md:text-base xl:text-lg">
          Hello, my name is
          <span
            class="bg-gradient-to-r from-teal-600 to-green-800 bg-clip-text text-base font-bold text-transparent md:text-lg xl:text-lg"
            >Matej</span
          >. I enjoy creating things on the web. My love for web development
          started in late 2022.<br />
          <br />
          I started with a gimmick portfolio to learn basic of HTML&CSS and
          later moved to <span class="text-yellow-200">Javascript</span>. <br />
          Then I dipped my toes in <span class="text-sky-500">React</span> and
          today I work with <span class="text-emerald-400">Vue</span>. For the
          styling I
          <span class="font-bold italic text-slate-200">absolutely</span> fell
          in love with <span class="text-blue-500">Tailwind</span>!<br />
          <br />
          I have successfully graduated High School and
          <a href="contact" class="font-bold text-slate-200 hover:underline"
            >I am looking for my first job experience in web development!</a
          >
        </p>

        <div class="mt-24 mb-3 pt-3">
          <h2 class="text-sm font-thin text-slate-100 md:text-base xl:text-lg">
            What's next?
          </h2>
          <ol class="mt-2">
            <li class="text-slate-100 md:text-lg xl:text-xl">
              <span class="mr-2 text-sm font-thin md:text-base xl:text-lg"
                >1.</span
              >Typescript
            </li>
            <li class="text-slate-100 md:text-lg xl:text-xl">
              <span class="mr-2 text-sm font-thin md:text-base xl:text-lg"
                >2.</span
              >Working with APIs
            </li>
            <li class="text-slate-100 md:text-lg xl:text-xl">
              <span class="mr-2 text-sm font-thin md:text-base xl:text-lg"
                >3.</span
              >NuxtJS
            </li>
            <li
              class="mr-2 text-sm font-thin text-slate-100 md:text-base xl:text-xl"
            >
              and more..
            </li>
          </ol>
        </div>
        <div></div>
      </div>
      <div class="flex justify-center">
        <div class="absolute bottom-0">
          <div
            class="mb-3 text-sm font-thin text-stone-300 md:text-base xl:text-lg"
          >
            checkout my projects!
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
