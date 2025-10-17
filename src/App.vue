<script setup>
import HomeView from './views/HomeView.vue';
import ProductCard from './components/cards/ProductCard.vue';
import {reactive} from 'vue'

const product = reactive({
    "id": 120,
    "title": "Greenland Greenland Glacier",
    "description": "Гренландский ледяной кофе с хрустящим холодным вкусом и необычайной свежестью.",
    "price": 290,
    "priceCrossed": 390,
    "category": ["Популярное", "Микролот"],
    "hue": {"acidity": 4, "bitterness": 6, "richness": 8},
    "roasting": 4, /* от 1  до 5 */
    "rating": 4.6,
    "comments": 150
  });
</script>

<template>
<ProductCard :product="product" :main="true"></ProductCard>
</template>

<style lang="scss">
@import "@/scss/blocks/_btn.scss";
* {
  font-family: $ff-gilroy;
}
</style>
