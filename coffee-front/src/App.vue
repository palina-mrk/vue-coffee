<script setup>
import { onBeforeMount } from 'vue';
import { useCatalogStore } from "./stores/catalog";

onBeforeMount(() => {
  const catalogStore = useCatalogStore();
  catalogStore.loadCatalog();
})
</script>

<template>
  <RouterView></RouterView>
</template>

<style lang="scss" scoped>
</style>
