<script setup>
import dayjs from 'dayjs';
const props = defineProps({
    name: {
        type:String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    published: {
        type: String
    },
    url: {
        type: String,
        required: true
    }
});
function truncate(value,n) {
        return value?.length > n ? value.substr(0,n-1) + "....": value;
};
const formatDate = (dateString) => {
      const date = dayjs(dateString);
      return date.format('dddd MMMM D, YYYY');
}
</script>
<template>
<main>
    <div class="bg-gray-600/40 h-80 w-72 m-3 space-y-2 px-2 rounded-md">
        <h2 class="font-bold text-md text-white md:text-lg pt-3">{{truncate(props.name, 30)}}</h2>
        <p class="text-gray-400">{{truncate(props.description, 180)}}</p>
        <div>
            <p class="pt-2 pb-2 text-blue-500"><a :href="props.url">Read more..</a></p>
            <h4 class="text-white font-bold">Published: {{formatDate(props.published)}}</h4>
        </div>
    </div>
</main>
</template>