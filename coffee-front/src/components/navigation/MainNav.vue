<script setup>

</script>

<template>
  <nav class="main-nav">
    <ul class="main-nav__list">
      <li class="main-nav__item">
        <router-link 
          class="main-nav__link" 
          :to="{ name: 'catalog-coffee' }"
          >Каталог товаров</router-link>
      </li>
      <li class="main-nav__item">
        <a class="main-nav__link" href="#">Блог</a>
      </li>
      <li class="main-nav__item">
        <a class="main-nav__link" href="#">Контакты</a>
      </li>
    </ul>
  </nav>
  
</template>

<style lang="scss" scoped>
@import "@/scss/blocks/_main-nav.scss";
</style>