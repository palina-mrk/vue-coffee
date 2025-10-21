<script setup>
import ProductCard from '../components/cards/ProductCard.vue';
import ProductCardCopy from '../components/cards/ProductCardCopy.vue';
import { useCoffeeStore } from '../stores/coffee';
const catalogStore = useCoffeeStore();
import { storeToRefs } from "pinia";
const { catalog, isLoaded } = storeToRefs(catalogStore);
import {ref} from 'vue';

const cardsCount = ref(20);
function showMore() {
  cardsCount.value += 20;
  if(cardsCount.value > catalog.length)
    cardsCount.value = catalog.length
}
</script>

<template>
  <section class="products">
    <div class="container">
      <div class="products__wrapper">
        <h2 class="products__title visually-hidden">Отсортированные карточки товаров кофе</h2>  

        <button class="products__sort-btn btn-linked btn-linked--black-small" type="submit">Сортировка</button>

        <ul v-if="isLoaded" class="products__list">
          <li 
            class="products__item"
            v-for="n in cardsCount">
            <ProductCardCopy :product="catalog[120 + n - 1]"></ProductCardCopy>
          </li>
        </ul>
        
        <button class="products__button btn btn--white-xl" type="button"
        @click="showMore"
        >Показать ещё</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/scss/blocks/catalogs/_products.scss";
* {
  font-family: $ff-gilroy;
}
</style>
