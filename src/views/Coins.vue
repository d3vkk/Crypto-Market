<script setup>
import { useFetch, options } from '../utils/useFetch';
import { ref } from "vue";
import CoinCard from "../components/CoinCard.vue";
import Loader from '../components/Loader.vue';
const coins = ref([]);
const loading = ref(false);
const fetchAllCoins = async () => {
  loading.value = true;
  const url = "https://coinranking1.p.rapidapi.com/coins?limit=50";
  const response = await useFetch(url, options);
  loading.value = false;
  coins.value = response.data.coins;
};
fetchAllCoins();
</script>
<template>
<main class="flex justify-center items-center flex-wrap mt-5">
  <div v-if="loading" class="grid place-items-center mt-20">
    <Loader />
  </div>
  <div v-for="coin in coins" :key="coin.uuid">
  <CoinCard 
  :id="coin.uuid"
  :name="coin.name"
  :price="coin.price"
  :url="coin.iconUrl"
  :symbol="coin.symbol"
  :marketCap="coin.marketCap"
  />
  </div>
</main>
</template>

