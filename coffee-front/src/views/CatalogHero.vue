<script setup>
import BgCatalog from '../components/backgrounds/BgCatalog.vue';
import FilterCoffee from '../components/forms/FilterCoffee.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>

  <section class="hero">
    <bg-catalog></bg-catalog>
    
    <div class="container">
      <div class="hero__wrapper">
        <ul class="hero__breadcrumbs-list">
          <li class="hero__breadcrumbs-item">
            <router-link 
              class="hero__breadcrumbs-link"  
              :to="{ name: 'home' }"
            >Главная</router-link>
          </li>
          <li class="hero__breadcrumbs-item">
            <router-link class="hero__breadcrumbs-link"  
              :to="{ name: 'catalog-coffee' }"
            >Каталог товаров</router-link>
          </li>
          <li class="hero__breadcrumbs-item">
            <a class="hero__breadcrumbs-link"  href="#">{{  route.meta.title }}</a>
          </li>
        </ul>
        <h2 class="hero__title">{{ route.meta.title }}</h2>
        <filter-coffee class="hero__form filter-form"></filter-coffee>
        
      </div>
    </div>
  </section>

</template>

<style lang="scss" scoped>
@import "@/scss/blocks/catalogs/_hero.scss";
@import "@/scss/blocks/catalogs/_filter-form.scss";
@import "@/scss/blocks/catalogs/_custom-checkbox-card.scss";
@import "@/scss/blocks/catalogs/_custom-checkbox-corns.scss";
@import "@/scss/blocks/catalogs/_custom-checkbox-words.scss";
* {
  font-family: $ff-gilroy;
}
</style>
