<script setup>
import MainNav from '../components/navigation/MainNav.vue';
import LogoNav from '../components/navigation/LogoNav.vue';
import CustomSearch from '../components/inputs/CustomSearch.vue';
import UsersList from '../components/navigation/UsersList.vue';

import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';
const route = useRoute();

const isHomePage = computed(() => route.name == 'home');
const isMenu = ref(false)
const isSearch = ref(false)
</script>

<template>
  <header :class="{'header': true, 'header--background': !isHomePage, 'header--menu': isMenu, 'header--search': isSearch}">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__burger">
          <button
            class="btn-icon btn-icon--burger"
            type="button"
            aria-label="Открыть бургерное меню"
            @click="isMenu = true"
          >
            <svg
              class="btn-icon__svg"
              width="59"
              height="30"
              aria-hidden="true"
            >
              <use xlink:href="../assets/btn-sprite.svg#burger-icon"></use>
            </svg>
          </button>
        </div>
        <logo-nav class="header__logo-link"></logo-nav>
        
        <div 
          class="header__nav"
        >
          <MainNav
            @leave-page="isMenu = false"
          ></MainNav>
        </div>

        <custom-search 
          class="header__search"
          @close-search="isSearch = false"
        ></custom-search>
        
        <users-list 
          class="header__users-list"
          :isSearch="isSearch"
          :isMenu="isMenu"
          @setSearch="isSearch = true"
          @leave-page="isMenu = false"
        ></users-list>

        <svg
          class="header__menu-close btn-icon btn-icon--close"
          width="40"
          height="40"
          aria-hidden="true"
          @click = "isMenu = false"
        >
          <use xlink:href="../assets/header-sprite.svg#icon-close"></use>
        </svg>

        <div class="header__menu-contacts">
          <a class="header__email" href="mailto:Import@kldrefine.com"
            >Import@kldrefine.com</a
          >
          <ul class="socials">
            <li class="socials__item">
              <a class="socials__link" href="#">
                <svg
                  class="socials__icon"
                  width="53"
                  height="53"
                  aria-hidden="true"
                >
                  <use
                    xlink:href="../assets/header-sprite.svg#icon-phone"
                  ></use>
                </svg>
              </a>
            </li>
            <li class="socials__item">
              <a class="socials__link socials__link--filled" href="#">
                <svg
                  class="socials__icon"
                  width="102"
                  height="102"
                  aria-hidden="true"
                >
                  <use
                    xlink:href="../assets/header-sprite.svg#icon-instagram"
                  ></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/scss/blocks/_custom-search.scss";
@import "@/scss/blocks/_socials.scss";
@import "@/scss/blocks/_header.scss";
* {
  font-family: $ff-gilroy;
}
</style>
