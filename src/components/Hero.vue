<script setup>
</script>
<template>
<div class="w-full px-14 space-y-6 flex flex-col items-center justify-between mt-8 md:mt-16 md:space-y-0 md:flex-row">
    <div class="max-w-md md:w-1/2">
        <h2 class="text-white text-2xl text-center font-bold leading-12 md:leading-[60px] md:font-extrabold md:text-left md:text-5xl md:max-w-lg">The Easiest Way To Track Multiple Currencies</h2>
        <div class="max-w-md mt-2">
            <p class="text-gray-400 text-sm text-center md:text-base md:text-left">Market Watchman allows you to monitor your balances, to trade without limits and to earn rewards for specific coins</p>
        </div>
       <div class="flex flex-col justify-center space-x-0  md:flex-row md:space-x-4 md:justify-start">
         <button class="mt-6 text-white px-3 py-2 text-sm bg-blue-600 hover:bg-blue-700 outline-none rounded-md md:text-base md:py-2.5 md:px-6"><a href="#table" v-smooth-scroll>Get Started</a></button>
          <button class="mt-6 text-white px-3 py-2 text-sm bg-blue-600/50 hover:bg-blue-600 outline-none rounded-md md:text-base md:py-2.5 md:px-6"><router-link to="/coins">View All Coins</router-link></button>
       </div>
    </div>

    <div class="max-w-sm md:w-1/2">
        <img src="../assets/hero-bg.png" alt="Hero-bg" class="text-center -ml-2 w-54 h-54 md:w-full md:h-full">
    </div>
</div>
</template>