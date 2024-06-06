<style scoped>

</style>

<template>
  <div>
    <h1>Home</h1>
    <UButton variant="soft" @click="fetchData">Call api</UButton>
    <div v-if="response">
      <p>{{ response }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">

import {ref} from "vue";
import {getWeather} from "~/server/weather-service";

const response = ref(null);

const fetchData = () => {
  getWeather("Belgrade").then((data) => {
    response.value = data;
  });
}

</script>

