<script setup>
const props = defineProps(["rating"]);
import { computed } from "vue";
const count = computed(() => Number(props.rating.toFixed(0)));
</script>

<template>
  <ul class="slider-stars">
    <li
      v-for="n in count"
      class="slider-stars__item slider-stars__item--selected"
    >
      <svg class="slider-stars__svg" width="25" height="25" aria-hidden="true">
        <use xlink:href="../../assets/product-sprite.svg#icon-star"></use>
      </svg>
    </li>
    <li v-for="n in (5 - count)" class="slider-stars__item">
      <svg class="slider-stars__svg" width="25" height="25" aria-hidden="true">
        <use xlink:href="../../assets/product-sprite.svg#icon-star"></use>
      </svg>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/scss/blocks/_slider-stars.scss";
</style>
