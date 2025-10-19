<script setup>
import SliderCorns from '../sliders/SliderCorns.vue';
import SliderPoints from '../sliders/SliderPoints.vue';
import SliderStars from '../sliders/SliderStars.vue';
import CustomDropdown from '../inputs/CustomDropdown.vue';
import { useCartStore } from '../../stores/cart';
import { computed, ref } from 'vue';
const props = defineProps(['product', 'isHomePage'])
const cartStore = useCartStore();

const isSale = computed(() => props.product.actions.includes('Скидки'));
const weightIndex = ref(0);

const weightVariants = computed(() => props.product.weights.map(el => el.value)); 
const currentWeight = computed(() => props.product.weights[weightIndex.value].value);
const currentPrice = computed(() => props.product.weights[weightIndex.value].price);
const currentPriceCrossed = computed(() => props.product.weights[weightIndex.value].priceCrossed);

function changeWeight(newValue) {
  weightIndex.value = props.product.weights.findIndex((weight) => weight.value == newValue);
}

function addToCart() {
  cartStore.addToCart(props.product.id, currentWeight.value);
  console.log(cartStore.totalCount)
}
</script>

<template>
<div :class="{ 'product-card': true, 'product-card--sale': isSale,  'product-card--main-mobile': isHomePage}">
    <div class="product-card__sales-icon">%</div>
    <div class="product-card__top">
      <div class="product-card__actions">
        <ul class="product-card__actions-list">
          <li v-if="!isSale" v-for="action in product.actions" class="product-card__actions-item">{{ action }}</li>
          <li v-else class="product-card__actions-item">Скидки</li>
        </ul>
      </div>
      <custom-dropdown class="product-card__dropdown" :weightVariants="weightVariants"
      :defaultValue="currentWeight"
      @set-value="changeWeight($event)">
      </custom-dropdown>
    </div>
    <div class="product-card__middle">
      <div class="product-card__image-wrapper">
        <picture>
          <source media="(max-width: 767px)" srcset="../../images/product-card/product-image-mobile.png">
          <source media="(max-width: 1348px)" srcset="../../images/product-card/product-image-tablet.png">
          <source media="(max-width: 1903px)" srcset="../../images/product-card/product-image-laptop.png">
          <img class="product-card__image" src="../../images/product-card/product-image-desktop.png" width="311" height="172" alt="Карточка товара кофе">
        </picture>
      </div>
      <div class="product-card__details">
        <slider-stars class="product-card__stars" :rating="product.rate.rating"></slider-stars>
        
        <div class="product-card__rating">
          <span class="product-card__rating-value">{{ product.rate.rating }}</span>
          <span class="product-card__comments-count">({{ product.rate.comments }} отзыва)</span>
        </div>

        <slider-corns class="product-card__corns" :count="product.roasting"></slider-corns>
        
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
      <span class="product-card__price product-card__price--crossed">{{ currentPriceCrossed }} ₽</span>
      <span class="product-card__price">{{ currentPrice }} ₽</span>
      <button 
        @click="addToCart" 
        class="product-card__button btn btn--size-s"
      >В&nbsp;корзину</button>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "@/scss/blocks/_product-card.scss";
@import "@/scss/blocks/_custom-dropdown.scss";
</style>