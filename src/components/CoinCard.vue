<script setup>
const props = defineProps({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    marketCap: {
        type: String,
        required: true
    }
});
const comma = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
</script>
<template>
<main>
    <div class="w-72 h-72 bg-gray-600/40 rounded-md m-5 space-y-6">
       <div class="grid place-items-center">
         <img :src="props.url" :alt="props.name" class="w-20 h-20"/>
       </div>
       <div class="flex items-center justify-between px-4 pt-5">
        <h3 class="font-bold text-white">{{props.name}}</h3>
        <h4 class="font-bold text-white">{{props.symbol}}</h4>
       </div>
       <div class="px-4">
        <h2 class="text-white font-bold">Price : {{comma(props.price)}}</h2>
       </div>
           <div class=" px-4">
        <h2 class="text-white font-bold">Market Cap: {{comma(props.marketCap)}}</h2>
       </div>
    </div>
</main>
</template>