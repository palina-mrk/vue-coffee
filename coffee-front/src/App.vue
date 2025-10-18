<script setup>
import ProductCard from './components/cards/ProductCard.vue';
import {reactive} from 'vue'

import { storeToRefs } from 'pinia'
import { useCatalogStore } from './stores/catalog'

const catalogStore = useCatalogStore()
const { catalog, isLoading } = storeToRefs(catalogStore)

catalogStore.loadCatalog().then((data) => (catalog.concat(data)))

const product = reactive({
  "id": 3,
  "title": "Brazil Santos",
  "description": "Свежеобжаренный кофе - мягкий, слегка орехово-шоколадный вкус.",
  "weights": [
    {"value": 250, "price": 200, "priceCrossed": 260},
    {"value": 1000, "price": 700, "priceCrossed": 1000},
  ],
  "category": ["Скидки", "Популярное"],
  "hue": {"acidity": 2, "bitterness": 4, "richness": 8},
  "rating": 4.2,
  "comments": 250});
</script>

<template>
<ProductCard :product="product" :isHomePage="true"></ProductCard>
</template>

<style lang="scss" scoped>
* {
  font-family: $ff-gilroy;
}
</style>
