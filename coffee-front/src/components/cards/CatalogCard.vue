<script setup>
const props = defineProps(['page','title'])
</script>

<template>
  <div class="catalog-card">
    <div class="catalog-card__image-wrapper">
      <picture>
        <source
          media="(max-width: 767px)"
          :srcset="`../../src/images/catalog-card/catalog-${page}-desktop.png`"
        />
        <source
          media="(max-width: 1348px)"
          :srcset="`../../src/images/catalog-card/catalog-${page}-desktop.png`"
        />
        <source
          media="(max-width: 1903px)"
          :srcset="`../../src/images/catalog-card/catalog-${page}-desktop.png`"
        />
        <img
          class="catalog-card__image"
          :src="`../../src/images/catalog-card/catalog-${page}-desktop.png`"
          width="295"
          height="212"
          :alt="`Карточка каталога ${page}`"
        />
      </picture>
    </div>
    <h3 class="catalog-card__title">{{ title }}</h3>
    <router-link 
      class="catalog-card__button btn btn--size-m"
      :to="{ name: `catalog-${page}` }"
      >Купить</router-link
    >
  </div>
</template>


<style lang="scss" scoped>
@import "@/scss/blocks/_catalog-card.scss";
* {
  font-family: $ff-gilroy;
}
</style>