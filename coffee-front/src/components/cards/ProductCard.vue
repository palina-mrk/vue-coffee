<script setup>
import SliderCorns from "../sliders/SliderCorns.vue";
import SliderPoints from "../sliders/SliderPoints.vue";
import SliderStars from "../sliders/SliderStars.vue";
import CustomDropdown from "../inputs/CustomDropdown.vue";
import { useCartStore } from "../../stores/cart";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
const props = defineProps(["product"]);
const cartStore = useCartStore();
const route = useRoute();

const isSale = computed(() => props.product.actions.includes("Скидки"));
const weightIndex = ref(0);

const weightVariants = computed(() =>
  props.product.weights.map((el) => el.value),
);
const currentWeight = computed(
  () => props.product.weights[weightIndex.value].value,
);
const currentPrice = computed(
  () => props.product.weights[weightIndex.value].price,
);
const currentPriceCrossed = computed(
  () => props.product.weights[weightIndex.value].priceCrossed,
);

function changeWeight(newValue) {
  weightIndex.value = props.product.weights.findIndex(
    (weight) => weight.value == newValue,
  );
}

function addToCart() {
  cartStore.addToCart(props.product.id, currentWeight.value);
}

const imageVariant = computed(() => {
  switch (props.product.kind) {
    case "Черный чай":
    case "Травяной чай":
      return "black";
    case "Зелёный чай":
    case "Матча":
      return "green";
    case "Молочный улунг":
    case "Пуэр":
      return "milk";
    case "Кофейные напитки":
      return "drinks";
    default:
      return "product";
  }
});
</script>

<template>
  <div
    v-if="product.category == 'coffee'"
    :class="{
      'product-card': true,
      'product-card--sale': isSale,
      'product-card--main-mobile':
        route.name == 'home' || route.name == 'catalogs',
      'product-card--bordered': !(
        route.name == 'home' || route.name == 'catalogs'
      ),
    }"
  >
    <div v-show="isSale" class="product-card__sales-icon">%</div>
    <div class="product-card__top">
      <div class="product-card__actions">
        <ul class="product-card__actions-list">
          <li
            v-if="!isSale"
            v-for="action in product.actions"
            class="product-card__actions-item"
          >
            {{ action }}
          </li>
          <li v-else class="product-card__actions-item">Скидки</li>
        </ul>
      </div>
      <custom-dropdown
        class="product-card__dropdown"
        :class="{
          'custom-dropdown--main-mobile':
            route.name == 'home' || route.name == 'catalogs',
        }"
        :weightVariants="weightVariants"
        :weightUnit="product.category == 'vending' ? 'кг' : 'г'"
        :defaultValue="currentWeight"
        @set-value="changeWeight($event)"
      >
      </custom-dropdown>
    </div>
    <div class="product-card__middle">
      <div class="product-card__image-wrapper">
        <picture>
          <source
            media="(max-width: 767px)"
            srcset="../../images/product-card/product-image-mobile.png"
          />
          <source
            media="(max-width: 1348px)"
            srcset="../../images/product-card/product-image-tablet.png"
          />
          <source
            media="(max-width: 1903px)"
            srcset="../../images/product-card/product-image-laptop.png"
          />
          <img
            class="product-card__image"
            src="../../images/product-card/product-image-desktop.png"
            width="311"
            height="172"
            alt="Карточка товара кофе"
          />
        </picture>
      </div>
      <div class="product-card__details">
        <slider-stars
          :class="{
            'product-card__stars': true,
            'slider-stars--main-mobile':
              route.name == 'home' || route.name == 'catalogs',
          }"
          :rating="product.rate.rating"
        ></slider-stars>

        <div class="product-card__rating">
          <span class="product-card__rating-value">{{
            product.rate.rating
          }}</span>
          <span class="product-card__comments-count"
            >({{ product.rate.comments }} отзыва)</span
          >
        </div>

        <slider-corns
          class="product-card__corns"
          :count="product.roasting"
        ></slider-corns>

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
    <router-link
      :to="{ name: 'catalogs.product', params: { productID: product.id } }"
      class="product-card__title"
      >{{ product.title }}</router-link
    >
    <p class="product-card__description">{{ product.description }}</p>
    <div class="product-card__bottom">
      <span
        v-show="isSale"
        class="product-card__price product-card__price--crossed"
        >{{ currentPriceCrossed }} ₽</span
      >
      <span class="product-card__price">{{ currentPrice }} ₽</span>
      <button @click="addToCart" class="product-card__button btn btn--size-s">
        В&nbsp;корзину
      </button>
    </div>
  </div>

  <div
    v-else
    :class="[
      'product-card--' + product.category,
      { 'product-card--sale': isSale },
      'product-card',
    ]"
  >
    <div class="product-card__top">
      <div class="product-card__rating-wrapper">
        <slider-stars
          class="product-card__stars slider-stars--tea"
          :rating="product.rate.rating"
        ></slider-stars>

        <div class="product-card__rating">
          <span class="product-card__rating-value">{{
            product.rate.rating
          }}</span>
          <span class="product-card__comments-count"
            >({{ product.rate.comments }} отзыва)</span
          >
        </div>
      </div>

      <custom-dropdown
        class="product-card__dropdown"
        :class="{
          'custom-dropdown--main-mobile':
            route.name == 'home' || route.name == 'catalogs',
        }"
        :weightVariants="weightVariants"
        :weightUnit="product.category == 'vending' ? 'кг' : 'г'"
        :defaultValue="currentWeight"
        @set-value="changeWeight($event)"
      >
      </custom-dropdown>
    </div>
    <div class="product-card__middle">
      <div class="product-card__image-wrapper">
        <div v-show="isSale" class="product-card__sales-icon">%</div>
        <picture>
          <source
            media="(max-width: 767px)"
            :srcset="`../../src/images/${product.category}-card/${product.category}-product-mobile.png`"
          />
          <source
            media="(max-width: 1348px)"
            :srcset="`../../src/images/${product.category}-card/${product.category}-product-tablet.png`"
          />
          <source
            media="(max-width: 1903px)"
            :srcset="`../../src/images/${product.category}-card/${product.category}-${imageVariant}-laptop.png`"
          />
          <img
            class="product-card__image"
            :src="`../../src/images/${product.category}-card/${product.category}-${imageVariant}-desktop.png`"
            width="223"
            height="312"
            alt="Карточка товара"
          />
        </picture>
      </div>
    </div>
    <router-link
      :to="{ name: 'catalogs.product', params: { productID: product.id } }"
      class="product-card__title"
      >{{ product.title }}</router-link
    >
    <p class="product-card__description">{{ product.description }}</p>
    <div class="product-card__bottom">
      <span
        v-show="isSale"
        class="product-card__price product-card__price--crossed"
        >{{ currentPriceCrossed }} ₽</span
      >
      <span class="product-card__price">{{ currentPrice }} ₽</span>
      <button @click="addToCart" class="product-card__button btn btn--size-s">
        В&nbsp;корзину
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  padding: 20px 38px 48px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  box-shadow: 0px 0px 20px 0px $color-philippine-gray-25;
  max-width: 400px;
  height: 100%;
  border-radius: 20px;
  background-color: $color-white;
  color: $color-raising-black;
  font-family: $ff-gilroy, sans-serif;
  position: relative;

  @include vp-laptop {
    padding: 13px 24px 37px;
    box-shadow: 0px 0px 20px 0px $color-chinese-silver-25;
    border: 0.7px solid $color-platinum;
    max-width: 282px;
    border-radius: 14px;
  }

  @include vp-tablet {
    padding: 21px 33px 42px 35px;
    box-shadow: 0px 0px 17px 0px $color-chinese-silver-25;
    border: none;
    max-width: 340px;
    border-radius: 10px;
  }

  @include vp-mobile {
    box-shadow: none;
    padding: 17px 32px 43px;
    border: 1px solid $color-platinum;
    border-radius: 20px;
    max-width: unset;
  }

  &__sales-icon {
    color: $color-black;
    background-color: $color-ucla-gold;
    border-radius: 50%;
    font-weight: 700;
    font-size: 35px;
    line-height: 42px;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 70px;
    height: 70px;
    top: 2px;
    left: 3px;
    display: none;
    transform: translate(50%, -50%);
    font-family: $ff-gilroy, sans-serif;

    @include vp-laptop {
      width: 50px;
      height: 50px;
      left: -1px;
      top: 0;
      font-size: 25px;
      line-height: 30px;
    }

    @include vp-tablet {
      width: 60px;
      height: 60px;
      left: 5px;
      top: 1px;
      font-size: 29.5px;
      line-height: 36px;
    }
  }

  &__top {
    display: flex;
    align-items: start;
    justify-content: space-between;
    padding: 0 0 0 4px;
    margin: 0 0 20px;
    width: 100%;

    @include vp-laptop {
      padding: 0;
      margin: 0 0 14px;
    }

    @include vp-tablet {
      padding: 0;
      margin: 0 0 22px;
    }

    @include vp-mobile {
      padding: 0 5px 0 2px;
      margin: 0 0 18px;
    }
  }

  &__actions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;
    gap: 10px;

    @include vp-laptop {
      margin: 1px 0 0;
      gap: 6px;
    }

    @include vp-tablet {
      margin: 0;
      gap: 5px;
    }

    @include vp-mobile {
      gap: 9px;
    }
  }

  &__actions-item {
    font-family: $ff-gilroy, sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: $color-ucla-gold;

    @include vp-laptop {
      font-size: 12px;
      line-height: 15px;
    }

    @include vp-tablet {
      font-size: 14px;
      line-height: 17px;
    }
  }

  &__actions-item:nth-child(n + 3) {
    display: none;
  }

  &__dropdown {
    font-family: $ff-gilroy, sans-serif;
    margin: 1px 0 auto auto;
    width: 132px;
    z-index: 1;

    @include vp-laptop {
      margin: 0 0 auto auto;
      width: 93px;
    }

    @include vp-tablet {
      width: 110px;
    }

    @include vp-mobile {
      width: 106px;
    }
  }

  &__middle {
    margin: 0 0 38px;
    display: flex;
    width: 100%;
    justify-content: space-between;

    @include vp-laptop {
      margin: 0 0 28px;
    }

    @include vp-tablet {
      margin: 0 0 32px;
    }

    @include vp-mobile {
      margin: 0 0 31px;
    }
  }

  &__image-wrapper {
    width: 172px;
    height: 311px;
    display: flex;
    justify-content: center;

    @include vp-laptop {
      width: 120px;
      height: 218px;
    }

    @include vp-tablet {
      width: 144px;
      height: 260px;
    }

    @include vp-mobile {
      width: 146px;
      height: 264px;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &__details {
    width: 134px;
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: end;

    @include vp-laptop {
      width: 94px;
      margin: 0 0 -2px;
    }

    @include vp-tablet {
      margin: 0 15px 32px 0;
    }

    @include vp-mobile {
      width: 113px;
      margin: 0;
    }
  }

  &__stars {
    margin: 0 0 12px;
    padding: 0 2px;
    width: 100%;

    @include vp-laptop {
      margin: 0 0 8px;
      padding: 0;
    }

    @include vp-tablet {
      margin: 0 0 6px;
    }

    @include vp-mobile {
      margin: 0 0 7px;
    }
  }

  &__rating {
    margin: 0 0 26px 4px;
    padding: 0;
    display: flex;
    gap: 7px;
    align-items: baseline;
    font-family: $ff-gilroy, sans-serif;

    @include vp-laptop {
      margin: 0 0 17px;
      gap: 4px;
    }

    @include vp-mobile {
      margin: 0 0 25px 1px;
      gap: 6px;
    }
  }

  &__rating-value {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    font-family: $ff-gilroy, sans-serif;

    @include vp-laptop {
      font-size: 14px;
      line-height: 17px;
    }

    @include vp-mobile {
      font-size: 17px;
      line-height: 21px;
    }
  }

  &__comments-count {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: $color-davys-gray;
    font-family: $ff-gilroy, sans-serif;

    @include vp-laptop {
      font-size: 10px;
      line-height: 12px;
    }

    @include vp-mobile {
      font-size: 12px;
      line-height: 14px;
    }
  }

  &__corns {
    margin: 0 0 30px;

    @include vp-laptop {
      margin: 0 0 26px;
    }

    @include vp-mobile {
      margin: 0 0 25px;
    }
  }

  &__hue {
    width: 100%;
    align-items: end;
    padding: 0 2px;
    margin: 0 0 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @include vp-laptop {
      margin: 0 0 14px;
      padding: 0;
      align-items: start;
      gap: 5px;
    }

    @include vp-mobile {
      margin: 0 0 13px;
      padding: 0 0 0 2px;
      gap: 10px;
    }
  }

  &__hue:last-of-type {
    margin: 0;
  }

  &__hue-name {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    align-self: start;
    font-family: $ff-gilroy, sans-serif;

    @include vp-laptop {
      font-size: 12px;
      line-height: 14px;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 16px;
    }
  }

  &__title {
    font-weight: 900;
    font-size: 25px;
    line-height: 31px;
    margin: 0 0 10px;
    padding: 0;
    font-family: $ff-gilroy, sans-serif;
    color: $color-raising-black;
    cursor: pointer;
    position: relative;

    @include vp-laptop {
      font-size: 18px;
      line-height: 22px;
      margin: 0 0 8px;
    }

    @include vp-tablet {
      font-size: 22px;
      line-height: 27px;
      margin: 0 0 10px;
    }

    @include vp-mobile {
      font-size: 20px;
      line-height: 25px;
      margin: 0 0 10px;
    }

    &:hover::after {
      content: "";
      width: 100%;
      height: 5px;
      border-radius: 2px;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: $color-ucla-gold;

      @include vp-laptop {
        height: 3px;
        border-radius: 1px;
      }

      @include vp-tablet {
        height: 2px;
      }
    }
  }

  &__description {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    overflow: hidden;
    padding: 0;
    margin: 0;
    font-family: $ff-gilroy, sans-serif;

    @include vp-laptop {
      font-size: 12px;
      line-height: 14px;
    }

    @include vp-tablet {
      font-size: 16px;
      line-height: 19px;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 16px;
    }
  }

  &__bottom {
    display: flex;
    margin: auto 0 0;
    padding: 20px 4px 0 0;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;

    @include vp-laptop {
      padding: 20px 0 0;
    }

    @include vp-tablet {
      padding: 19px 5px 0 0;
    }
  }

  &__price {
    font-weight: 900;
    font-size: 35px;
    line-height: 44px;
    font-family: $ff-gilroy, sans-serif;

    @include vp-laptop {
      font-size: 24px;
      line-height: 30px;
      padding: 0 0 0 4px;
    }

    @include vp-tablet {
      font-size: 26px;
      line-height: 32px;
      padding: 0 0 2px 4px;
    }

    @include vp-mobile {
      font-size: 25px;
      line-height: 31px;
      padding: 0 0 3px;
    }
  }

  &__price--crossed {
    font-family: $ff-gilroy, sans-serif;
    font-weight: 500;
    font-size: 25px;
    line-height: 29px;
    color: $color-silver-sand-c6;
    position: absolute;
    top: 0;
    left: 0;
    display: none;

    @include vp-laptop {
      top: 3px;
      font-size: 18px;
      line-height: 21px;
    }

    @include vp-tablet {
      top: 1px;
      font-size: 22px;
      line-height: 26px;
    }

    &::after {
      content: "";
      background-color: $color-silver-sand-c6;
      width: 100%;
      height: 2px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-100%);

      @include vp-laptop {
        height: 1px;
      }
    }
  }

  &__button {
    width: 178px;

    @include vp-laptop {
      width: 125px;
    }

    @include vp-tablet {
      width: 149px;
    }

    @include vp-mobile {
      width: 151px;
    }
  }
}

.product-card--sale {
  .product-card__sales-icon {
    display: flex;
  }

  .product-card__actions-list {
    padding: 34px 0 0;

    @include vp-laptop {
      padding: 23px 0 0;
    }

    @include vp-tablet {
      padding: 29px 0 0;
      margin: 0 0 -5px;
    }

    @include vp-mobile {
      padding: 19px 0 0;
      margin: 0;
    }
  }

  .product-card__actions-item:nth-child(n + 2) {
    display: none;
  }

  .product-card__price--crossed {
    display: flex;
  }
}

.product-card--main-mobile {
  @include vp-mobile {
    box-shadow: 0px 0px 12.5px 0px $color-chinese-silver-25;
    padding: 14px 23px 30px 24px;
    border: none;
    border-radius: 12px;
    width: 250px;
    min-height: 407px;
  }

  .product-card__top {
    @include vp-mobile {
      padding: 0 0 0 2px;
      margin: 0 0 13px;
    }
  }

  .product-card__sales-icon {
    @include vp-mobile {
      width: 44px;
      height: 44px;
      left: 2px;
      top: -1px;
      font-size: 22px;
      line-height: 26px;
    }
  }

  .product-card__actions-item {
    font-family: $ff-gilroy, sans-serif;

    @include vp-mobile {
      font-size: 10px;
      line-height: 12px;
    }
  }

  .product-card__dropdown {
    @include vp-mobile {
      width: 82px;
    }
  }

  .product-card__middle {
    @include vp-mobile {
      margin: 0 0 22px;
    }
  }

  .product-card__image-wrapper {
    @include vp-mobile {
      width: 107px;
      height: 193px;
      margin: 0 0 2px;
    }
  }

  .product-card__details {
    @include vp-mobile {
      width: 83px;
    }
  }

  .product-card__stars {
    @include vp-mobile {
      margin: 0 0 4px;
    }
  }

  .product-card__rating {
    @include vp-mobile {
      margin: 0 0 18px 1px;
      gap: 4px;
    }
  }

  .product-card__rating-value {
    font-family: $ff-gilroy, sans-serif;

    @include vp-mobile {
      font-size: 12.5px;
      line-height: 15px;
    }
  }

  .product-card__comments-count {
    font-family: $ff-gilroy, sans-serif;

    @include vp-mobile {
      font-size: 9px;
      line-height: 10px;
    }
  }

  .product-card__corns {
    @include vp-mobile {
      margin: 0 0 18px 1px;
    }
  }

  .product-card__hue {
    @include vp-mobile {
      margin: 0 0 9px;
      gap: 7px;
    }
  }

  .product-card__hue:last-of-type {
    @include vp-mobile {
      margin: 0;
    }
  }

  .product-card__hue-name {
    font-family: $ff-gilroy, sans-serif;

    @include vp-mobile {
      font-size: 10px;
      line-height: 13px;
    }
  }

  .product-card__title {
    font-family: $ff-gilroy, sans-serif;

    @include vp-mobile {
      font-size: 16px;
      line-height: 19px;
      margin: 0 0 7px;
    }
  }

  .product-card__description {
    font-family: $ff-gilroy, sans-serif;

    @include vp-mobile {
      font-size: 10px;
      line-height: 13px;
      max-width: 160px;
    }
  }

  .product-card__bottom {
    @include vp-mobile {
      padding: 14px 2px 0 0;
    }
  }

  .product-card__price {
    font-family: $ff-gilroy, sans-serif;

    @include vp-mobile {
      font-size: 20px;
      line-height: 25px;
      padding: 0 0 4px;
    }
  }

  .product-card__price--crossed {
    font-family: $ff-gilroy, sans-serif;

    @include vp-mobile {
      font-size: 16px;
      line-height: 19px;
      top: 0;
    }
  }

  .product-card__button {
    @include vp-mobile {
      width: 111px;
    }
  }
}

.product-card--bordered {
  border: 1px solid $color-platinum;
  box-shadow: none;
  height: 100%;

  @include vp-laptop {
    width: 280px;
    min-height: 461px;
  }

  @include vp-tablet {
    box-shadow: 0px 0px 17px 0px $color-chinese-silver-25;
    border: none;
    min-height: 552px;
    width: 340px;
  }

  @include vp-mobile {
    min-height: 554px;
    border-radius: 17px;
    border: 1px solid $color-platinum;
    box-shadow: none;
  }
}

.product-card--tea {
  padding: 28px 40px 50px;

  @include vp-laptop {
    padding: 18px 25px 38px;
  }

  @include vp-tablet {
    padding: 30px 37px 42px;
  }

  @include vp-mobile {
    padding: 26px 34px 43px;
  }

  .product-card__top {
    justify-content: space-between;
    margin: 0 0 15px;
    padding: 0 6px 0 0;

    @include vp-laptop {
      margin: 0 0 8px;
      padding: 0 1px 0 0;
    }

    @include vp-tablet {
      margin: 0 0 8px;
      padding: 0;
    }

    @include vp-mobile {
      margin: 0 0 15px;
      padding: 0 5px 0 0;
    }
  }

  .product-card__rating-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 12px;

    @include vp-laptop {
      gap: 8px;
    }

    @include vp-tablet {
      gap: 12px;
    }

    @include vp-mobile {
      gap: 10px;
    }
  }

  .product-card__rating-value {
    font-family: $ff-gilroy, sans-serif;

    @include vp-tablet {
      font-size: 16px;
      line-height: 20px;
    }
  }

  .product-card__comments-count {
    font-family: $ff-gilroy, sans-serif;

    @include vp-tablet {
      font-size: 12px;
      line-height: 14px;
    }
  }

  .product-card__stars,
  .product-card__rating,
  .product-card__dropdown {
    margin: 0;
    padding: 0;
    align-self: unset;
  }

  .product-card__middle {
    display: flex;
    align-items: center;
    justify-content: center;

    @include vp-tablet {
      margin: 0 0 20px;
    }
  }

  .product-card__image-wrapper {
    width: 223px;
    height: 312px;
    display: flex;
    position: relative;

    @include vp-laptop {
      width: 158px;
      height: 221px;
    }

    @include vp-tablet {
      width: 187px;
      height: 262px;
    }

    @include vp-mobile {
      width: 190px;
      height: 265px;
    }
  }

  .product-card__title {
    font-family: $ff-gilroy, sans-serif;

    @include vp-tablet {
      font-size: 20px;
      line-height: 25px;
    }
  }

  .product-card__description {
    font-family: $ff-gilroy, sans-serif;

    @include vp-tablet {
      font-size: 16px;
      line-height: 20px;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 16px;
    }
  }

  .product-card__sales-icon {
    position: absolute;
    top: 26px;
    right: -31px;
    transform: unset;
    left: unset;

    @include vp-laptop {
      top: 22px;
      right: -19px;
    }

    @include vp-tablet {
      top: 31px;
      right: -15px;
    }

    @include vp-mobile {
      top: 35px;
      right: -10px;
    }
  }

  .product-card__price {
    font-family: $ff-gilroy, sans-serif;

    @include vp-tablet {
      font-size: 24px;
      line-height: 31px;
    }

    @include vp-tablet {
      font-size: 25px;
      line-height: 31px;
    }
  }

  .product-card__price--crossed {
    font-family: $ff-gilroy, sans-serif;

    @include vp-tablet {
      font-size: 18px;
      line-height: 21px;
    }
    @include vp-mobile {
      font-size: 22px;
      line-height: 26px;
    }
  }
}

.product-card--vending {
  padding: 28px 40px 50px;

  @include vp-laptop {
    padding: 18px 25px 25px;
  }

  @include vp-tablet {
    padding: 28px 32px 30px;
  }

  @include vp-mobile {
    padding: 25px 25px 30px;
  }

  .product-card__top {
    justify-content: space-between;
    margin: 0 0 15px;
    padding: 0 6px 0 0;

    @include vp-laptop {
      margin: 0 0 8px;
      padding: 0 1px 0 0;
    }

    @include vp-tablet {
      margin: 0 0 8px;
      padding: 0 2px 0;
    }

    @include vp-mobile {
      margin: 0 0 15px;
      padding: 0 5px 0;
    }
  }

  .product-card__rating-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 12px;

    @include vp-laptop {
      gap: 8px;
    }

    @include vp-tablet {
      gap: 12px;
    }

    @include vp-mobile {
      gap: 10px;
    }
  }

  .product-card__rating-value {
    @include vp-laptop {
      font-size: 18px;
      line-height: 23px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 26px;
    }
  }

  .product-card__comments-count {
    @include vp-laptop {
      font-size: 14px;
      line-height: 18px;
    }

    @include vp-tablet {
      font-size: 16px;
      line-height: 21px;
    }
  }

  .product-card__stars,
  .product-card__rating,
  .product-card__dropdown {
    margin: 0;
    padding: 0;
    align-self: unset;
  }

  .product-card__middle {
    display: flex;
    align-items: center;
    justify-content: center;

    @include vp-laptop {
      margin: 0 0 18px;
    }
  }

  .product-card__image-wrapper {
    width: 320px;
    height: 250px;
    display: flex;
    position: relative;
    border-radius: 20px;

    @include vp-laptop {
      width: 230px;
      height: 177px;
      border-radius: 14px;
      margin: 0;
    }

    @include vp-tablet {
      width: 274px;
      height: 211px;
      border-radius: 10px;
    }

    @include vp-mobile {
      width: 279px;
      height: 215px;
      border-radius: 17px;
    }
  }

  .product-card__title {
    @include vp-laptop {
      font-size: 21px;
      line-height: 26px;
      margin: 0 0 5px;
    }

    @include vp-tablet {
      font-size: 23px;
      line-height: 28px;
      margin: 0 0 3px;
    }

    @include vp-mobile {
      margin: 0 5px 3px;
    }
  }

  .product-card__description {
    min-height: unset;

    @include vp-laptop {
      font-size: 16px;
      line-height: 21px;
      margin: 0;
    }

    @include vp-tablet {
      font-size: 18px;
      line-height: 23px;
      margin: 0 0 3px;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 16px;
      margin: 0 5px 3px;
    }
  }

  .product-card__sales-icon {
    position: absolute;
    top: 26px;
    right: 31px;
    transform: unset;
    left: unset;

    @include vp-laptop {
      top: 22px;
      right: 19px;
    }

    @include vp-tablet {
      top: 31px;
      right: 25px;
    }

    @include vp-mobile {
      top: 35px;
      right: 30px;
    }
  }

  .product-card__bottom {
    @include vp-tablet {
      margin: 0 3px;
    }

    @include vp-mobile {
      margin: 0 5px;
    }
  }

  .product-card__price {
    @include vp-laptop {
      font-size: 23px;
      line-height: 27px;
    }

    @include vp-tablet {
      font-size: 25px;
      line-height: 31px;
    }

    @include vp-tablet {
      font-size: 26px;
      line-height: 32px;
    }
  }

  .product-card__price--crossed {
    @include vp-laptop {
      font-size: 20px;
      line-height: 23px;
    }

    @include vp-mobile {
      font-size: 22px;
      line-height: 26px;
    }
  }
}

.product-card--healthy {
  padding: 28px 40px 30px;

  @include vp-laptop {
    padding: 18px 25px 38px;
  }

  @include vp-tablet {
    padding: 30px 37px 42px;
  }

  @include vp-mobile {
    padding: 26px 34px 43px;
  }

  .product-card__top {
    justify-content: space-between;
    margin: 0 0 15px;
    padding: 0 6px 0 0;

    @include vp-laptop {
      margin: 0 0 8px;
      padding: 0 1px 0 0;
    }

    @include vp-tablet {
      margin: 0 0 8px;
      padding: 0;
    }

    @include vp-mobile {
      margin: 0 0 15px;
      padding: 0 5px 0 0;
    }
  }

  .product-card__rating-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 12px;

    @include vp-laptop {
      gap: 8px;
    }

    @include vp-tablet {
      gap: 12px;
    }

    @include vp-mobile {
      gap: 10px;
    }
  }

  .product-card__rating-value {
    font-family: $ff-gilroy, sans-serif;

    @include vp-tablet {
      font-size: 16px;
      line-height: 20px;
    }
  }

  .product-card__comments-count {
    font-family: $ff-gilroy, sans-serif;

    @include vp-tablet {
      font-size: 12px;
      line-height: 14px;
    }
  }

  .product-card__stars,
  .product-card__rating,
  .product-card__dropdown {
    margin: 0;
    padding: 0;
    align-self: unset;
  }

  .product-card__middle {
    display: flex;
    align-items: center;
    justify-content: center;

    @include vp-tablet {
      margin: 0 0 20px;
    }
  }

  .product-card__image-wrapper {
    width: 182px;
    height: 279px;
    display: flex;
    justify-content: center;
    position: relative;

    @include vp-laptop {
      width: 128px;
      height: 196px;
    }

    @include vp-tablet {
      width: 184px;
      height: 281px;
    }

    @include vp-mobile {
      width: 182px;
      height: 279px;
    }
  }

  .product-card__title {
    font-family: $ff-gilroy, sans-serif;

    @include vp-tablet {
      font-size: 20px;
      line-height: 25px;
    }
  }

  .product-card__description {
    font-family: $ff-gilroy, sans-serif;

    @include vp-tablet {
      font-size: 16px;
      line-height: 20px;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 16px;
    }
  }

  .product-card__sales-icon {
    position: absolute;
    top: 35px;
    right: -10px;
    transform: unset;
    left: unset;

    @include vp-laptop {
      top: 25px;
      right: -10px;
    }

    @include vp-tablet {
      top: 40px;
      right: 5px;
    }

    @include vp-mobile {
      top: 40px;
      right: 15px;
    }
  }

  .product-card__price {
    font-family: $ff-gilroy, sans-serif;

    @include vp-tablet {
      font-size: 24px;
      line-height: 31px;
    }

    @include vp-tablet {
      font-size: 25px;
      line-height: 31px;
    }
  }

  .product-card__price--crossed {
    font-family: $ff-gilroy, sans-serif;

    @include vp-tablet {
      font-size: 18px;
      line-height: 21px;
    }
    @include vp-mobile {
      font-size: 22px;
      line-height: 26px;
    }
  }
}

.btn--size-s {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-white;
  background-color: $color-ucla-gold;
  font-weight: 700;
  font-family: $ff-gilroy, sans-serif;
  border-radius: 5px;
  border: none;
  margin: 0;
  cursor: pointer;
  user-select: none;
  padding: 13px;
  font-size: 18px;
  line-height: 22px;

  @include vp-laptop {
    padding: 9px 9px 10px;
    font-size: 12px;
    line-height: 15px;
    border-radius: 4px;
  }

  @include vp-tablet {
    padding: 11px 11px 10px;
    font-size: 16px;
    line-height: 19px;
    border-radius: 5px;
  }

  @include vp-mobile {
    padding: 12px 11px 9px;
    border-radius: 4px;
  }

  &:hover {
    background-color: $color-mustard-yellow;
  }
}

.product-card--main-mobile {
  .btn--size-s {
    font-family: $ff-gilroy, sans-serif;

    @include vp-mobile {
      font-size: 12px;
      line-height: 14px;
      padding: 8px 7px 8px;
      border-radius: 3px;
    }
  }
}
</style>
