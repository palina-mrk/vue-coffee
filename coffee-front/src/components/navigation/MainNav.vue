<script setup>

</script>

<template>
  <nav class="main-nav">
    <ul class="main-nav__list">
      <li class="main-nav__item">
        <router-link 
          class="main-nav__link" 
          :to="{ name: 'catalog-coffee' }"
          @click="$emit('leave-page')"
          >Каталог товаров</router-link>
      </li>
      <li class="main-nav__item">
        <a class="main-nav__link" 
        @click="$emit('leave-page')">Блог</a>
      </li>
      <li class="main-nav__item">
        <router-link 
        class="main-nav__link" 
        :to="{ name: 'contacts' }"
        @click="$emit('leave-page')">Контакты</router-link>
      </li>
    </ul>
  </nav>
  
</template>

<style lang="scss" scoped>
@import "@/scss/blocks/_main-nav.scss";
</style>