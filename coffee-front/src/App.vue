<script setup>
import { onBeforeMount } from 'vue';
import { useCoffeeStore } from "./stores/coffee";

onBeforeMount(() => {
  const catalogStore = useCoffeeStore();
  catalogStore.loadCatalog();
})
</script>

<template>
  <RouterView></RouterView>
</template>

<style lang="scss" scoped>
</style>
