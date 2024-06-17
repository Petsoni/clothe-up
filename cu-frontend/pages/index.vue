<style scoped>

</style>

<template>
  <div>
    <h1 class="generic-header">Home</h1>
    <SearchButton @update:search-term-="setLocationForSearch"></SearchButton>
    <p>{{searchValue}}</p>
    <UButton @click="fetchData">Call api</UButton>
    <div v-if="response">
      <p>{{ response }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import {getWeather} from "~/server/weather-service";
import SearchButton from "~/components/Search.vue";

const response = ref(null);
const searchValue = ref("");

const setLocationForSearch = (location: string) => {
  console.log(location);
  searchValue.value = location;
}

const fetchData = () => {
  getWeather(searchValue).then((data) => {
    response.value = data;
  });
}

</script>

