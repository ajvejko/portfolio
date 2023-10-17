<script setup>
import Navbar from "./Components/Navbar.vue";
import Hero from "./Components/Hero.vue";
import About from "./Components/About.vue";
import Projects from "./Components/Projects.vue";
import Contact from "./Components/Contact.vue";
</script>

<template>
  <Navbar />
  <Hero />
  <About />
  <Projects />
  <Contact />
</template>

<style>
.transition_animation {
  transition: all ease 300ms;
}
</style>
