<template>
  <div class="custom-search">
    <input
      class="custom-search__field"
      type="search"
      name="search-field"
      placeholder="Поиск по&nbsp;товарам"
    />
    <svg
      class="custom-search__icon"
      width="36"
      height="35"
      aria-hidden="true"
    >
      <use
        xlink:href="../../assets/header-sprite.svg#icon-search"
      ></use>
    </svg>
    <button 
      class="custom-search__btn"
      @click="$emit('close-search')">
      <svg
        class="custom-search__btn-icon"
        width="36"
        height="35"
        aria-hidden="true"
      >
        <use
          xlink:href="../../assets/header-sprite.svg#icon-close"
        ></use>
      </svg>
      <span class="custom-search__btn-text">Отменить</span>
    </button>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "@/scss/blocks/_custom-search.scss";
</style>