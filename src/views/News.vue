<script setup>
import { useFetch, newsOptions } from '../utils/useFetch';
import { ref } from "vue";
import NewsCard from "../components/NewsCard.vue";
import Loader from '../components/Loader.vue';
const newsData =  ref([]);
const loading = ref(false);
const fetchNewsData = async () => {
    loading.value = true;
    const url = 'https://bing-news-search1.p.rapidapi.com//news/search?q=cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=20';
    const response = await useFetch(url, newsOptions);
    loading.value = false;
    newsData.value = response.value;
};
fetchNewsData();
</script>
<template>
<main class="flex justify-center items-center flex-wrap mt-10">
    <div v-if="loading" class="grid place-items-center mt-20">
        <Loader/>
    </div>
    <div v-for="article in newsData" :key="article.name">
    <NewsCard 
    :name="article.name"
    :description="article.description"
    :published="article.datePublished"
    :url="article.url"
    />
    </div>
</main>
</template>