<script setup>
defineProps(['count'])
</script>

<template>
  <ul class="slider-corns">
    <li v-for="n in count" class="slider-corns__item">
      <svg class="slider-corns__svg" width="19" height="19" aria-hidden="true" id="icon-corn" viewBox="0 0 24 24" fill="none">
        <use xlink:href="../../assets/product-sprite.svg#icon-corn"></use>
      </svg>
    </li>
  </ul>
</template>

<style lang="scss" scoped>

@import "@/scss/blocks/_slider-corns.scss";
</style>
