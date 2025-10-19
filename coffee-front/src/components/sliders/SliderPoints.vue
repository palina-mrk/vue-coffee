<script setup>
defineProps(["count"]);
</script>

<template>
  <ul class="slider-points">
    <li
      v-for="n in count"
      class="slider-points__item slider-points__item--selected"
    ></li>
    <li v-for="n in 10 - count" class="slider-points__item"></li>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/scss/blocks/_slider-points.scss";
</style>
