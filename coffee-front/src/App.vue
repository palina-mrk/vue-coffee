<script setup>
import ProductCard from "./components/cards/ProductCard.vue";
import { reactive, ref } from "vue";

import { storeToRefs } from "pinia";
import { useCatalogStore } from "./stores/catalog";

const catalogStore = useCatalogStore();
const { catalog, isLoaded } = storeToRefs(catalogStore);

</script>

<template>
  <p>{{ isLoaded }}</p>
  <p>{{ catalog[9] }}</p>
  <div v-if="isLoaded">
    <ProductCard v-for="product in catalog" :product="product" :isHomePage="true"></ProductCard>
  </div>
</template>

<style lang="scss" scoped>
* {
  font-family: $ff-gilroy;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
