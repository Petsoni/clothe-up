<style>

</style>

<template>
  <UInput @input="emitSearch" v-model="searchTerm" placeholder="Search for a city"></UInput>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:searchTerm'])

const searchTerm = ref("")

const emitSearch = () => {
  console.log(searchTerm.value);
  emit("update:searchTerm", searchTerm.value)
}

</script>