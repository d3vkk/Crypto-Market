<script setup>
import { ref, computed } from "vue";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/solid";
import axios from "axios";
const coins = ref([]);
const searchTerm = ref("");
const fetchAllCoins = async () => {
   try {
     const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h")
     coins.value = await response.data;
   } catch(err) {
    console.log(err.message)
   }
};
fetchAllCoins();

const coinFilter = computed(() => {
    return coins.value.filter((coin) => coin.id.includes(searchTerm.value))
});
console.log(coinFilter);
const comma = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function priceChanged (value) {
    value = value.toString();
    if (value.includes("-")) {
      return value;
    } else {
      return "";
    }
}
</script>
<template>
<main id="table">
    <div class="relative my-10 grid place-items-center md:place-items-end md:mt-20 md:mx-6">
        <div class="hidden absolute inset-y-0 right-0 items-center pr-4 cursor-pointer md:flex">
            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block py-2 pl-2 w-48 text-sm text-white bg-black rounded-md border border-gray-600 focus:ring-blue-500 focus:border-blue-500 focus:outline-none md:w-96" placeholder="Search" v-model="searchTerm">
    </div>

    <div class="bg-white overflow-x-auto text-white bg-opacity-10 backdrop-filter backdrop-blur-lg mx-6">
        <table class="table-fixed cursor-pointer">
        <thead>
        <tr class="text-left text-white text-sm">
          <th class="w-1/4 p-4">Name</th>
          <th class="w-1/4 pl-6 md:pl-0">Price</th>
          <th class="w-1/4 text-center md:text-start">1hr</th>
          <th class="w-1/4 mx-2">Market Cap</th>
          <th class="w-1/4 mx-2">Volume</th>
        </tr>
      </thead>
       <tbody class="divide-y divide-gray-700">
        <tr class="text-base hover:bg-gray-100/10 transition duration-300" v-for="coin in coinFilter" :key="coin.name">
          <td class="p-4 flex items-center">
            <p class="mr-2">{{ coin.market_cap_rank }}</p>
            <img :src="coin.image" :alt="coin.name" class="w-6 h-6 rounded-full mr-1"/>
            <p class="font-bold mr-1 hidden md:block">{{ coin.name }}</p>
            <p class="uppercase text-gray-500 mx-2">
              {{ coin.symbol }}
            </p>
          </td>
          <td class="font-bold px-4 md:px-0">
            ${{ comma(coin.current_price) }}
          </td>
          <td class="px-4 font-bold md:px-0">
            <div v-if="priceChanged(coin.price_change_percentage_24h)" class="text-red-500 flex items-center">
                <ChevronDownIcon class="mr-1 h-4 w-4 "/>
                {{ coin.market_cap_change_percentage_24h }}%
            </div>
            <div v-else class="text-green-500 flex items-center">
                <ChevronUpIcon class="mr-1 h-4 w-4 "/>
                {{ coin.market_cap_change_percentage_24h }}%
            </div>
          </td>
          <td class="mx-4 md:mx-2">
            ${{ comma(coin.market_cap) }}
          </td>
          <td class="pl-6 pr-4 mx-4 md:mx-2 md:pr-4 md:pl-0">
            {{ comma(coin.total_volume) }}
          </td>
        </tr>
      </tbody>
        </table>
    </div>
</main>
</template>