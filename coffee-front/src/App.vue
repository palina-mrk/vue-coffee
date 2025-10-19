<script setup>
import ProductCard from "./components/cards/ProductCard.vue";
import { reactive, ref } from "vue";

import { storeToRefs } from "pinia";
import { useCoffeeStore } from "./stores/coffee";

const catalogStore = useCoffeeStore();
const { catalog, isLoaded } = storeToRefs(catalogStore);

</script>

<template>
  <RouterView></RouterView>
</template>

<style lang="scss" scoped>
</style>
