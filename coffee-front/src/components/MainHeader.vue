<script setup></script>

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
              <use xlink:href="./images/btn/btn-sprite.svg#burger-icon"></use>
            </svg>
          </button>
        </div>
        <a
          class="header__logo-link"
          href="#"
          aria-label="Ссылка на главную страницу"
        >
          <picture>
            <source
              media="(max-width: 767px)"
              srcset="./images/header/logo/image-logo-mobile.png"
            />
            <source
              media="(max-width: 1348px)"
              srcset="./images/header/logo/image-logo-tablet.png"
            />
            <source
              media="(max-width: 1903px)"
              srcset="./images/header/logo/image-logo-laptop.png"
            />
            <img
              class="header__logo-img"
              src="./images/header/logo/image-logo-desktop.png"
              width="260"
              height="116"
              alt="Ссылка на главную страницу"
            />
          </picture>
        </a>
        <div class="header__nav">
          <nav class="main-nav">
            <ul class="main-nav__list">
              <li class="main-nav__item">
                <a class="main-nav__link" href="#catalogs-overview"
                  >Каталог товаров</a
                >
              </li>
              <li class="main-nav__item">
                <a class="main-nav__link" href="#">Блог</a>
              </li>
              <li class="main-nav__item">
                <a class="main-nav__link" href="#">Контакты</a>
              </li>
            </ul>
          </nav>
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
                xlink:href="./images/header/header-sprite.svg#icon-search"
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
                  xlink:href="./images/header/header-sprite.svg#icon-search"
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
                  xlink:href="./images/header/header-sprite.svg#icon-basket"
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
                  xlink:href="./images/header/header-sprite.svg#icon-user"
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
          <use xlink:href="./images/header/header-sprite.svg#icon-close"></use>
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
                    xlink:href="./images/header/header-sprite.svg#icon-phone"
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
                    xlink:href="./images/header/header-sprite.svg#icon-instagram"
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
@import "@/scss/blocks/_btn.scss";
@import "@/scss/blocks/_custom-search.scss";
@import "@/scss/blocks/_background.scss";
@import "@/scss/blocks/_main-nav.scss";
@import "@/scss/blocks/_socials.scss";
@import "@/scss/blocks/_header.scss";
</style>
