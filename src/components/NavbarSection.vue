<script setup>
import { ref, computed, watchEffect } from "vue";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/solid";
import axios from "axios";
const coins = ref([]);
const duplicateCoins = ref(null)
const fetchAllCoins = async () => {
   try {
     const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h")
     coins.value = await response.data;
   } catch(err) {
    console.log(err.message)
   }
};
fetchAllCoins();
const topCoins = computed(() => {
    return coins.value.splice(0, 10);
});
watchEffect(() => {
      const duplicate = coins.value.slice(0, 10);
      duplicateCoins.value = duplicate;
    });
function priceChanged (value) {
    value = value.toString();
    if (value.includes("-")) {
      return value;
    } else {
      return "";
    }
}

function truncate(value,n) {
        return value?.length > n ? value.substr(0,n-1) : value;
}
</script>
<template>
  <div class="content w-full h-14 overflow-hidden bg-black relative">
    <ul class="animated-content h-full flex" ref="mq">
      <li v-for="coin in topCoins" :key="coin.name" class="flex justify-center items-center flex-shrink-0 text-white transform scale-75 lg:scale-100">
        <div class="flex justify-between w-3/4">
          <div class="flex items-center">
            <img
              :src="coin.image"
              alt="coin logo"
              class="w-4 h-4 lg:w-6 lg:h-6 rounded-full self-start mr-4 md:mr-4 object-cover"
            />
            <div class="hidden lg:block">
              <p class="font-bold">{{ truncate(coin.name, 8) }}</p>
              <p class="text-xs uppercase tracking-widest">
                {{ coin.symbol }}
              </p>
            </div>
          </div>
          <div>
            <p class="font-bold text-xs lg:text-base flex justify-center ">
              {{ truncate( coin.current_price, 2) }}
            </p>
            <p class="font-bold text-xs text-red-400 flex justify-end items-center " v-if="priceChanged(coin.price_change_percentage_24h)">
              <ChevronDownIcon class="mr-1 h-4 w-4"/>

              {{ truncate(coin.price_change_percentage_24h, 2) }}%
            </p>
            <p v-else class="font-bold text-xs text-green-400 flex justify-end items-center ">
              <ChevronUpIcon class="mr-1 h-4 w-4 "/>

              {{ truncate(coin.price_change_percentage_24h, 2) }}%
            </p>
          </div>
        </div>
      </li>
     <li v-for="duplicate in duplicateCoins" :key="duplicate.name" class="flex justify-center items-center flex-shrink-0 text-white transform scale-75 lg:scale-100">
        <div class="flex justify-between w-3/4">
          <div class="flex items-center">
            <img
              :src="duplicate.image"
              alt="coin logo"
              class="w-4 h-4 lg:w-6 lg:h-6 rounded-full mr-4 object-cover"
            />
            <div class="hidden lg:block">
              <p class="font-bold">{{ duplicate.name }}</p>
              <p class="text-xs uppercase tracking-widest">
                {{ duplicate.symbol }}
              </p>
            </div>
          </div>
          <div>
            <p class="font-bold flex justify-end text-xs lg:text-base">
              {{ truncate(duplicate.current_price, 3) }}
            </p>
            <p class="font-bold text-xs text-red-400 flex justify-end items-center" v-if="priceChanged(duplicate.price_change_percentage_24h)">
             <ChevronDownIcon class="mr-1 h-4 w-4 "/>
              {{ truncate(duplicate.price_change_percentage_24h, 5) }}%
            </p>
            <p v-else class="font-bold text-xs text-green-400 flex justify-end items-center">
              <ChevronUpIcon class="mr-1 h-4 w-4 "/>
              {{ truncate(duplicate.price_change_percentage_24h, 5) }}%
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>