<script setup>
import MainHeader from "./MainHeader.vue";
import CatalogHero from "./CatalogHero.vue";
import CatalogInner from "./CatalogInner.vue";
import MainFooter from "./MainFooter.vue";
</script>

<template>
  <MainHeader></MainHeader>
  <CatalogHero></CatalogHero>
  <CatalogInner></CatalogInner>
  <MainFooter></MainFooter>
</template>

<style lang="scss" scoped>
@import "@/scss/blocks/_btn.scss";
* {
  font-family: $ff-gilroy;
}
</style>
