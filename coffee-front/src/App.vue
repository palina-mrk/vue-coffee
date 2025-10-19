<script setup>
import ProductCard from './components/cards/ProductCard.vue';
import {reactive, ref} from 'vue'

import { storeToRefs } from 'pinia'
import { useCatalogStore } from './stores/catalog'

const catalogStore = useCatalogStore()
const { catalog, isLoaded } = storeToRefs(catalogStore)



const product = reactive({
  "id": 3,
  "title": "Brazil Santos",
  "category": "coffee",
  "description": "Свежеобжаренный кофе - мягкий, слегка орехово-шоколадный вкус.",
  "weights": [
    {"value": 250, "price": 200, "priceCrossed": 260},
    {"value": 1000, "price": 700, "priceCrossed": 1000},
  ],
  "rate": {
    "rating": 4.2,
    "comments": 250
  },
  "actions": {
    "Скидки": true, 
    "Популярное": true, 
    "Новый урожай": true,
    "Микролот": false,
    "Ваш выбор": false,
    "Новинка": false,
    "Сорт недели": false,
  },
  "hue": {
    "acidity": 2, 
    "bitterness": 4, 
    "richness": 8
  },
  "details": [
    { "kind": "Арабика", "variery": "Кот Бразилио", "geography": "Бразилия"},
    { "kind": "Арабика", "variery": "Перу гр.2", "geography": "Перу"},
    { "kind": "Арабика", "variery": "Эфиопия Сидамогр.4", "geography": "Эфиопия"},
    { "kind": "Арабика", "variery": "Премиум Амхара Айеху", "geography": "Эфиопия"},
    { "kind": "Робуста", "processing": "Мытая", "geography": "Индия"},
    { "kind": "Робуста", "processing": "Сухой", "geography": "Вьетнам"}, 
  ],
  "taste": ["Шоколад", "Яблоко", "Какао" ],
});
</script>

<template>
  <p>{{isLoaded}}</p>
  <p>{{ catalog[9] }}</p>
<ProductCard :product="product" :isHomePage="true"></ProductCard>
</template>

<style lang="scss" scoped>
* {
  font-family: $ff-gilroy;
}
</style>
