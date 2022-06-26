<script setup>
import NavbarSection from './NavbarSection.vue';
</script>
<template>
<header>
  <NavbarSection/>
  <nav class="w-full h-12 px-2 flex justify-between items-center p-4 md:px-8">
    <div>
      <h2 class="text-white text-lg md:text-2xl font-bold"><router-link to="/">Coinbase</router-link></h2>
    </div>
    <div>
      <ul class="inline-flex space-x-4 md:space-x-6">
        <li class="text-white text-sm font-bold md:text-lg"><router-link to="/">Home</router-link></li>
        <li class="text-white text-sm font-bold md:text-lg"><router-link to="/news">News</router-link></li>
      </ul>
    </div>
  </nav>
</header>
</template>