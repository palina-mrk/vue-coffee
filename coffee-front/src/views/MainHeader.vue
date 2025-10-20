<script setup>
import MainNav from '../components/navigation/MainNav.vue';
import LogoNav from '../components/navigation/LogoNav.vue';

</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__burger">
          <button
            class="btn-icon btn-icon--burger"
            type="button"
            aria-label="Открыть бургерное меню"
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
        
        <div class="header__nav">
          <MainNav></MainNav>
        </div>
        <form class="header__search" method="POST" action="#">
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
                xlink:href="../assets/header-sprite.svg#icon-search"
              ></use>
            </svg>
            <a class="custom-search__btn btn-linked" href="#">
              <span class="btn-linked__text">Отменить</span>
            </a>
          </div>
        </form>
        <ul class="header__users-list">
          <li class="header__users-item">
            <a
              class="header__users-link"
              href="#"
              aria-label="Открыть поле поиска"
            >
              <svg
                class="header__search-icon"
                width="36"
                height="31"
                aria-hidden="true"
              >
                <use
                  xlink:href="../assets/header-sprite.svg#icon-search"
                ></use>
              </svg>
            </a>
          </li>
          <li class="header__users-item">
            <a
              class="header__users-link"
              href="#"
              aria-label="Перейти в корзину"
            >
              <svg
                class="header__basket-icon"
                width="33"
                height="31"
                aria-hidden="true"
              >
                <use
                  xlink:href="../assets/header-sprite.svg#icon-basket"
                ></use>
              </svg>
            </a>
          </li>
          <li class="header__users-item">
            <a
              class="header__users-link"
              href="#"
              aria-label="Войти в личный кабинет"
            >
              <svg
                class="header__user-icon"
                width="33"
                height="36"
                aria-hidden="true"
              >
                <use
                  xlink:href="../assets/header-sprite.svg#icon-user"
                ></use>
              </svg>
            </a>
          </li>
        </ul>
        <svg
          class="header__menu-close btn-icon btn-icon--close"
          width="40"
          height="40"
          aria-hidden="true"
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
@import "@/scss/blocks/_main-nav.scss";
@import "@/scss/blocks/_socials.scss";
@import "@/scss/blocks/_news.scss";
@import "@/scss/blocks/_header.scss";
* {
  font-family: $ff-gilroy;
}
</style>
