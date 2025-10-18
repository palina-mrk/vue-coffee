<script setup>
import SliderCorns from '../sliders/SliderCorns.vue';
import SliderPoints from '../sliders/SliderPoints.vue';
import { computed, reactive } from 'vue';

const props = defineProps(['product', 'main'])
const isSale = computed(() => Boolean(props.product.category.find(el => el == 'Скидки')));
</script>

<template>
<div :class="{ 'product-card': true, 'product-card--sale': isSale,  'product-card--main-mobile': main}">
    <div class="product-card__sales-icon">%</div>
    <div class="product-card__top">
      <div class="product-card__categories">
        <ul class="product-card__category-list">
          <li v-for="category in product.category" class="product-card__category-item">{{ category }}</li>
        </ul>
      </div>
      <div class="custom-dropdown  product-card__dropdown">
        <button class="custom-dropdown__field custom-dropdown__field--main" type="button">
          <span class="custom-dropdown__chosen-text">250 г.</span>
          <svg class="custom-dropdown__icon" width="12" height="5" aria-hidden="true">
            <use xlink:href="./images/product-card/product-sprite.svg#icon-down-arrow"></use>
          </svg>
        </button>
        <ul class="custom-dropdown__list">
          <li class="custom-dropdown__item">
            <button class="custom-dropdown__field" type="button">250 г.</button>
          </li>
          <li class="custom-dropdown__item">
            <button class="custom-dropdown__field" type="button">1000 г.</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="product-card__middle">
      <div class="product-card__image-wrapper">
        <picture>
          <source media="(max-width: 767px)" srcset="../images/product-card/product-image-mobile.png">
          <source media="(max-width: 1348px)" srcset="../images/product-card/product-image-tablet.png">
          <source media="(max-width: 1903px)" srcset="../images/product-card/product-image-laptop.png">
          <img class="product-card__image" src="../images/product-card/product-image-desktop.png" width="311" height="172" alt="Карточка товара кофе">
        </picture>
      </div>
      <div class="product-card__details">
        <ul class="product-card__stars slider-stars">
          <li class="slider-stars__item slider-stars__item--selected">
            <svg class="slider-stars__svg" width="25" height="25" aria-hidden="true">
              <use xlink:href="../images/product-card/product-sprite.svg#icon-star"></use>
            </svg>
          </li>

          <li class="slider-stars__item slider-stars__item--selected">
            <svg class="slider-stars__svg" width="25" height="25" aria-hidden="true">
              <use xlink:href="../images/product-card/product-sprite.svg#icon-star"></use>
            </svg>
          </li>

          <li class="slider-stars__item slider-stars__item--selected">
            <svg class="slider-stars__svg" width="25" height="25" aria-hidden="true">
              <use xlink:href="../images/product-card/product-sprite.svg#icon-star"></use>
            </svg>
          </li>

          <li class="slider-stars__item slider-stars__item--selected">
            <svg class="slider-stars__svg" width="25" height="25" aria-hidden="true">
              <use xlink:href="../images/product-card/product-sprite.svg#icon-star"></use>
            </svg>
          </li>

          <li class="slider-stars__item">
            <svg class="slider-stars__svg" width="25" height="25" aria-hidden="true">
              <use xlink:href="../images/product-card/product-sprite.svg#icon-star"></use>
            </svg>
          </li>
        </ul>
        <div class="product-card__rating">
          <span class="product-card__rating-value">{{ product.rating }}</span>
          <span class="product-card__comments-count">({{ product.comments }} отзыва)</span>
        </div>
        <div class="product-card__corns"><slider-corns :count="product.roasting"></slider-corns></div>
        
        <div class="product-card__hue">
          <span class="product-card__hue-name">Кислинка</span>
          <slider-points :count="product.hue.acidity"></slider-points>
        </div>

        <div class="product-card__hue">
          <span class="product-card__hue-name">Горчинка</span>
          <slider-points :count="product.hue.bitterness"></slider-points>
        </div>

        <div class="product-card__hue">
          <span class="product-card__hue-name">Насыщенность</span>
          <slider-points :count="product.hue.richness"></slider-points>
        </div>
      </div>
    </div>
    <h3 class="product-card__title">{{ product.title }}</h3>
    <p class="product-card__description">{{ product.description }}</p>
    <div class="product-card__bottom">
      <span class="product-card__price product-card__price--crossed">{{ product.priceCrossed }} ₽</span>
      <span class="product-card__price">{{ product.price }} ₽</span>
      <button class="product-card__button btn btn--size-s">В&nbsp;корзину</button>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "@/scss/global/_fonts.scss";
@import "@/scss/blocks/_btn.scss";
@import "@/scss/blocks/_product-card.scss";
@import "@/scss/blocks/_custom-dropdown.scss";
@import "@/scss/blocks/_slider-large.scss";
@import "@/scss/blocks/_slider-stars.scss";
</style>
