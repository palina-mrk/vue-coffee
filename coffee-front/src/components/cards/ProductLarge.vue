<script setup>
import SliderCorns from "../sliders/SliderCorns.vue";
import SliderPoints from "../sliders/SliderPoints.vue";
import SliderStars from "../sliders/SliderStars.vue";
import RadioBlock from "../fieldsets/RadioBlock.vue";
import LargeCounter from "../inputs/LargeCounter.vue";
import LargeDropdown from "../inputs/LargeDropdown.vue";
import { computed, ref, watch } from "vue";

import { useRoute } from "vue-router";
const route = useRoute();

import { useCartStore } from "../../stores/cart";
const cartStore = useCartStore();

import { useCatalogStore } from "../../stores/catalog";
const catalogStore = useCatalogStore();

const product = computed(() =>
  catalogStore.isLoaded
    ? catalogStore.getFullInfo(Number(route.params.productID))
    : {},
);

const weightValue = ref(0);
watch(
  () => product?.value,
  () => {
    weightValue.value = product?.value.weights[0].value;
  },
);

const priceVariant = computed(
  () =>
    product?.value.weights.find((el) => el.value == weightValue.value)?.price,
);

const weightVariants = computed(() =>
  product.value.weights.map((el) => el.value),
);
const weightLabels = computed(() =>
  product.value.weights.map(
    (el) => el.value + (product.value.category == "vending" ? " кг." : " г."),
  ),
);
const showFullText = ref(false);
</script>

<template>
  <div
    v-if="catalogStore.isLoaded"
    :class="['large-card', 'large-card--' + product.category]"
  >
    <div class="large-card__inner">
      <div class="large-card__images-wrapper">
        <picture class="large-card__product-picture">
          <source
            v-if="product.category != 'vending'"
            media="(max-width: 1904px)"
            :srcset="`../../src/images/${product.category}-view/main-${product.category}-laptop.png`"
          />
          <img
            class="large-card__product-image"
            :src="`../../src/images/${product.category}-view/main-${product.category}-desktop.png`"
            width="311"
            height="172"
            alt="Карточка товара"
          />
        </picture>

        <picture
          class="large-card__preview-picture"
          v-if="product.category == 'coffee' || product.category == 'tea'"
        >
          <source
            media="(max-width: 1904px)"
            :srcset="`../../src/images/${product.category}-view/icon-preview-laptop.png`"
          />
          <img
            class="large-card__preview-image"
            :src="`../../src/images/${product.category}-view/icon-preview-desktop.png`"
            width="206"
            height="196"
            alt="Фото сырья"
          />
        </picture>
      </div>

      <div class="large-card__content">
        <div class="large-card__top">
          <div class="large-card__headings-rating">
            <div class="large-card__headings-actions">
              <div
                class="large-card__images-wrapper large-card__images-wrapper--tablet"
                v-if="product.category == 'vending'"
              >
                <picture class="large-card__product-picture">
                  <source
                    media="(max-width: 768px)"
                    :srcset="`../../src/images/${product.category}-view/main-${product.category}-mobile.png`"
                  />
                  <img
                    class="large-card__product-image"
                    :src="`../../src/images/${product.category}-view/main-${product.category}-tablet.png`"
                    width="311"
                    height="172"
                    alt="Карточка товара"
                  />
                </picture>
              </div>

              <div class="large-card__headings">
                <slider-corns
                  v-if="product.category == 'coffee'"
                  class="large-card__corns slider-corns--large"
                  :count="product.roasting"
                ></slider-corns>
                <h3 class="large-card__title">{{ product.title }}</h3>
                <p class="large-card__description">
                  {{ catalogStore.getShortDescription(product.id) }}
                </p>
              </div>

              <ul class="large-card__actions-list">
                <li
                  class="large-card__actions-item"
                  v-for="action in product.actions"
                >
                  {{ action }}
                </li>
              </ul>
            </div>

            <div class="large-card__rating">
              <slider-stars
                class="slider-stars--large large-card__stars"
                :rating="product.rate.rating"
              ></slider-stars>
              <span class="large-card__rating-value">{{
                product.rate.rating
              }}</span>
              <a class="large-card__comments-count" href="#"
                >({{ product.rate.comments }} отзыва)</a
              >
            </div>
          </div>
          <div
            class="large-card__images-wrapper large-card__images-wrapper--tablet"
            v-if="product.category != 'vending'"
          >
            <picture class="large-card__product-picture">
              <source
                media="(max-width: 768px)"
                :srcset="`../../src/images/${product.category}-view/main-${product.category}-mobile.png`"
              />
              <img
                class="large-card__product-image"
                :src="`../../src/images/${product.category}-view/main-${product.category}-tablet.png`"
                width="311"
                height="172"
                alt="Карточка товара"
              />
            </picture>

            <picture
              class="large-card__preview-picture"
              v-if="product.category == 'coffee' || product.category == 'tea'"
            >
              <source
                media="(max-width: 768px)"
                :srcset="`../../src/images/${product.category}-view/icon-preview-mobile.png`"
              />
              <img
                class="large-card__preview-image"
                :src="`../../src/images/${product.category}-view/icon-preview-tablet.png`"
                width="206"
                height="196"
                alt="Фото сырья"
              />
            </picture>
          </div>
        </div>
        <p class="large-card__product-text">{{ product.description }}</p>
        <p
          :class="{
            'large-card__company-text': true,
            'large-card__company-text--full': showFullText,
          }"
        >
          Компания Нью Рефайнинг Груп находится в&nbsp;г. Калининграде
          и&nbsp;имеет свой склад и&nbsp;представительство в&nbsp;Москве. Завод
          работает на&nbsp;рынке свежеобжаренного кофе и&nbsp;растворимой
          продукции более 15&nbsp;лет. Завод имеет немецкое оборудование марки
          Probat по&nbsp;обжарке кофе и&nbsp;итальянские агломераторы для
          производства растворимой продукции.
        </p>

        <button
          class="large-card__btn-expand btn-expand"
          type="button"
          @click="showFullText = !showFullText"
        >
          <span class="btn-expand__text">{{
            showFullText ? "Свернуть текст" : "Читать полностью"
          }}</span>
          <svg
            class="btn-expand__icon"
            width="20"
            height="9"
            aria-hidden="true"
            v-show="!showFullText"
          >
            <use
              xlink:href="../../assets/product-sprite.svg#icon-down-arrow"
            ></use>
          </svg>

          <svg
            class="btn-expand__icon-rotated"
            width="20"
            height="9"
            aria-hidden="true"
            v-show="showFullText"
          >
            <use
              xlink:href="../../assets/product-sprite.svg#icon-down-arrow"
            ></use>
          </svg>
        </button>

        <div
          class="large-card__coffee-details"
          v-if="product.category == 'coffee'"
        >
          <div class="large-card__hue">
            <span class="large-card__hue-name">Кислинка</span>
            <slider-points
              class="slider-points--large"
              :count="product.hue.acidity"
            ></slider-points>
          </div>

          <div class="large-card__hue">
            <span class="large-card__hue-name">Горчинка</span>
            <slider-points
              class="slider-points--large"
              :count="product.hue.bitterness"
            ></slider-points>
          </div>

          <div class="large-card__hue">
            <span class="large-card__hue-name">Насыщенность</span>
            <slider-points
              class="slider-points--large"
              :count="product.hue.richness"
            ></slider-points>
          </div>
        </div>

        <div class="large-card__weight-slider"></div>

        <radio-block
          :class="[
            'large-card__weight-radio',
            'radio-block--' + product.category,
          ]"
          :name="product.id + 'weights'"
          :labels="weightLabels"
          :values="weightVariants"
          :fields-count="weightVariants.length"
          :selectedValue="weightValue"
          @set-value="weightValue = $event"
        >
        </radio-block>

        <div class="large-card__bottom">
          <large-dropdown
            class="large-card__weight-dropdown"
            :labels="weightLabels"
            :values="weightVariants"
            :fields-count="weightVariants.length"
            :selectedValue="weightValue"
            @set-value="weightValue = $event"
          >
          </large-dropdown>

          <large-counter
            class="large-card__counter"
            :productId="product.id"
            :productWeight="weightValue"
          ></large-counter>
          <button
            class="large-card__btn btn-gold"
            @click="cartStore.addToCart(product.id, weightValue)"
          >
            Купить за {{ priceVariant }} ₽
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-gold {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-white;
  background-color: $color-ucla-gold;
  border-radius: 5px;
  border: none;
  margin: 0;
  cursor: pointer;
  user-select: none;
  font-weight: 600;
  font-family: $ff-gilroy, sans-serif;
  padding: 20px;
  font-size: 25px;
  line-height: 30px;

  @include vp-laptop {
    padding: 14px;
    font-size: 18px;
    line-height: 21px;
    border-radius: 4px;
  }

  @include vp-tablet {
    padding: 18px 11px 17px;
    font-size: 25px;
    line-height: 35px;
    border-radius: 5px;
    opacity: 0.7;
  }

  @include vp-mobile {
    padding: 12px 11px 11px;
    font-size: 14px;
    line-height: 17px;
    border-radius: 5px;
  }

  &:hover {
    background-color: $color-mustard-yellow;
  }
}

.btn-expand {
  align-items: center;
  color: $color-ucla-gold;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  user-select: none;
  gap: 14px;
  position: relative;
  display: none;

  @include vp-tablet {
    display: flex;
  }

  @include vp-mobile {
    gap: 10px;
  }

  &__text {
    font-weight: 500;
    font-family: $ff-gilroy, sans-serif;
    font-size: 25px;
    line-height: 29px;
    flex-shrink: 0;
    z-index: 0;

    @include vp-mobile {
      font-size: 12px;
      line-height: 14px;
    }
  }

  &__icon {
    width: 20px;
    height: 10px;
    z-index: 0;

    @include vp-mobile {
      width: 10px;
      height: 5px;
    }
  }

  &__icon-rotated {
    width: 20px;
    height: 10px;
    z-index: 0;
    rotate: 180deg;

    @include vp-mobile {
      width: 10px;
      height: 5px;
    }
  }

  &::before {
    position: absolute;
    content: "";
    top: -15px;
    bottom: -12px;
    left: -27px;
    right: -27px;
    cursor: pointer;
    border-radius: 35px;
    background-color: $color-white;

    @include vp-mobile {
      top: -7px;
      bottom: -5px;
      left: -13px;
      right: -13px;
      border-radius: 20px;
    }
  }

  &:hover::before {
    background-color: $color-ghost-white;
  }
}

.large-card {
  padding: 73px 132px 121px;
  box-shadow: 0px 0px 50px 0px $color-quick-silver-25;
  border-radius: 20px;
  border-width: 1px;
  border-color: $color-platinum;
  border-style: solid;
  background-color: $color-white;
  color: $color-raising-black;
  font-family: $ff-gilroy, sans-serif;

  @include vp-laptop {
    padding: 46px 94px 94px;
    box-shadow: 0px 0px 35px 0px $color-quick-silver-25;
    border-radius: 14px;
    border-width: 0.7px;
  }

  @include vp-tablet {
    padding: 50px 40px 70px;
    box-shadow: 0px 0px 103px 0px $color-quick-silver-25;
    border-radius: 20px;
    border-width: 2px;
  }

  @include vp-mobile {
    box-shadow: 0px 0px 50px 0px $color-quick-silver-25;
    padding: 25px 20px 40px;
    border-width: 1px;
  }

  &__inner {
    display: flex;
    gap: 150px;

    @include vp-laptop {
      gap: 112px;
    }
  }

  &__images-wrapper {
    display: flex;
    position: relative;
    width: 416px;
    height: 767px;

    @include vp-laptop {
      width: 294px;
      height: 542px;
    }

    @include vp-tablet {
      display: none;
    }
  }

  &__images-wrapper--tablet {
    display: none;

    @include vp-tablet {
      display: flex;
      width: 260px;
      height: 495px;
    }

    @include vp-mobile {
      width: 136px;
      height: 259px;
    }
  }

  &__product-image {
    width: 100%;
    height: 100%;
  }

  &__preview-image {
    position: absolute;
    overflow: hidden;
    border-radius: 50%;
    width: 206px;
    height: 196px;
    top: 70px;
    right: -21px;

    @include vp-laptop {
      width: 145px;
      height: 145px;
      top: 50px;
      right: -15px;
    }

    @include vp-tablet {
      width: 120px;
      height: 120px;
      top: 41px;
      right: -3px;
    }

    @include vp-mobile {
      width: 66px;
      height: 66px;
      top: 21px;
      right: -5px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    width: 740px;
    justify-content: center;
    padding: 27px 0 10px;

    @include vp-laptop {
      width: 536px;
      padding: 14px 0 4px;
    }

    @include vp-tablet {
      width: 100%;
      padding: 0;
      align-items: start;
      justify-content: start;
    }
  }

  &__top {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 0 33px;

    @include vp-laptop {
      margin: 0 0 25px;
    }

    @include vp-tablet {
      flex-direction: row;
      gap: 70px;
      margin: 0 0 45px;
    }

    @include vp-mobile {
      gap: 5px;
      margin: 0 0 20px;
    }
  }

  &__headings-rating {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 38px;

    @include vp-laptop {
      gap: 20px;
    }

    @include vp-tablet {
      flex-direction: column-reverse;
      width: 290px;
      justify-content: space-between;
    }

    @include vp-mobile {
      width: 164px;
    }
  }

  &__headings-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include vp-tablet {
      flex-direction: column-reverse;
      align-items: start;
      min-height: 60%;
      gap: 20px;
    }

    @include vp-mobile {
      gap: 15px;
    }
  }

  &__headings {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 400px;
    gap: 20px;

    @include vp-laptop {
      gap: 16px;
      width: 300px;
    }

    @include vp-tablet {
      gap: 20px;
      width: 100%;
    }

    @include vp-mobile {
      gap: 5px;
    }
  }

  &__title {
    font-family: $ff-gilroy, sans-serif;
    color: $color-raising-black;
    font-weight: 900;
    font-size: 40px;
    line-height: 50px;
    margin: 0;
    padding: 0;

    @include vp-laptop {
      font-size: 28px;
      line-height: 40px;
    }

    @include vp-tablet {
      font-size: 30px;
      line-height: 37px;
    }

    @include vp-mobile {
      font-size: 18px;
      line-height: 22px;
      margin: 5px 0 0;
    }
  }

  &__description {
    font-family: $ff-gilroy, sans-serif;
    color: $color-raising-black;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    margin: 0;
    padding: 0;

    @include vp-laptop {
      font-size: 14px;
      line-height: 17px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 24px;
    }

    @include vp-mobile {
      font-size: 12px;
      line-height: 14px;
    }
  }

  &__actions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: start;
    min-width: 180px;

    @include vp-laptop {
      min-width: 142px;
    }

    @include vp-tablet {
      gap: 15px;
      min-width: unset;
    }

    @include vp-mobile {
      gap: 5px;
    }
  }

  &__actions-item {
    font-family: $ff-gilroy, sans-serif;
    color: $color-ucla-gold;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    margin: 0;
    padding: 0;

    @include vp-laptop {
      font-size: 14px;
      line-height: 17px;
    }

    @include vp-tablet {
      font-size: 25px;
      line-height: 30px;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 17px;
    }
  }

  &__rating {
    display: flex;
    gap: 20px;
    flex-direction: row;
    align-items: flex-end;

    @include vp-laptop {
      gap: 15px;
    }

    @include vp-tablet {
      gap: 30px;
      justify-content: start;
      align-items: center;
      flex-wrap: wrap;
    }

    @include vp-mobile {
      gap: 15px 13px;
    }
  }

  &__rating-value {
    font-weight: 700;
    font-size: 30px;
    line-height: 26px;
    font-family: $ff-gilroy, sans-serif;
    color: $color-raising-black;

    @include vp-laptop {
      font-size: 22px;
      line-height: 16px;
    }

    @include vp-tablet {
      font-size: 32px;
      line-height: 43px;
    }

    @include vp-mobile {
      font-size: 16px;
      line-height: 21px;
    }
  }

  &__comments-count {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: $color-davys-gray;
    font-family: $ff-gilroy, sans-serif;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-color: $color-davys-gray;
    padding: 0;
    margin: 0;

    @include vp-laptop {
      font-size: 12px;
      line-height: 14px;
    }

    @include vp-tablet {
      font-size: 24px;
      line-height: 29px;
    }

    @include vp-mobile {
      line-height: 14px;
      font-size: 12px;
    }

    &:hover {
      color: $color-raising-black;
      text-decoration-color: $color-ucla-gold;
    }
  }

  &__product-text,
  &__company-text {
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    padding: 0;
    margin: 0;
    color: $color-raising-black;
    font-family: $ff-gilroy, sans-serif;
    max-width: 700px;

    @include vp-laptop {
      max-width: 500px;
      font-size: 14px;
      line-height: 18px;
    }

    @include vp-tablet {
      max-width: 600px;
      font-size: 20px;
      line-height: 26px;
    }

    @include vp-mobile {
      max-width: 250px;
      font-size: 12px;
      line-height: 16px;
    }
  }

  &__product-text {
    margin: 0 0 15px;

    @include vp-laptop {
      margin: 0 0 10px;
    }

    @include vp-tablet {
      margin: 0 0 15px;
    }

    @include vp-mobile {
      margin: 0 0 8px;
    }
  }

  &__company-text {
    margin: 0 0 30px;

    @include vp-laptop {
      margin: 0 0 20px;
    }

    @include vp-tablet {
      margin: 0 0 30px;
      max-height: 4em;
      overflow: hidden;
    }

    @include vp-mobile {
      margin: 0 0 20px;
    }
  }

  &__company-text--full {
    @include vp-tablet {
      max-height: unset;
    }
  }

  &__btn-expand {
    margin: 0 0 50px;

    @include vp-mobile {
      margin: 0 0 30px;
    }
  }

  &__coffee-details {
    display: flex;
    justify-content: space-between;
    margin: 0 0 40px;

    @include vp-laptop {
      margin: 0 0 30px;
    }

    @include vp-tablet {
      margin: 0 0 54px;
      flex-wrap: wrap;
      justify-content: start;
      gap: 30px 118px;
    }

    @include vp-mobile {
      margin: 0 0 20px;
      gap: 10px 53px;
    }
  }

  &__hue {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @include vp-laptop {
      gap: 8px;
    }

    @include vp-tablet {
      gap: 10px;
    }

    @include vp-mobile {
      gap: 5px;
    }
  }

  &__hue-name {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: $color-raising-black;
    font-family: $ff-gilroy, sans-serif;

    @include vp-laptop {
      font-size: 14px;
      line-height: 17px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 24px;
    }

    @include vp-mobile {
      font-size: 12px;
      line-height: 15px;
    }
  }

  &__weight-radio {
    align-self: start;
    gap: 60px;
    margin: auto auto 33px 0;

    @include vp-laptop {
      gap: 44px;
      margin: auto auto 20px 0;
    }

    @include vp-tablet {
      display: none;
    }
  }

  &__bottom {
    align-self: start;
    display: flex;
    gap: 20px;

    @include vp-laptop {
      gap: 15px;
    }

    @include vp-tablet {
      width: 100%;
      gap: 19px;
      flex-wrap: wrap;
    }

    @include vp-mobile {
      gap: 20px 9px;
    }
  }

  &__weight-dropdown {
    display: none;

    @include vp-tablet {
      display: flex;
      width: calc(50% - 10px);
    }

    @include vp-mobile {
      width: calc(50% - 5px);
    }
  }

  &__counter {
    width: 260px;

    @include vp-laptop {
      width: 184px;
    }

    @include vp-tablet {
      width: calc(50% - 10px);
    }

    @include vp-mobile {
      width: calc(50% - 5px);
    }
  }

  &__btn {
    width: 400px;

    @include vp-laptop {
      width: 184px;
    }

    @include vp-tablet {
      width: 100%;
    }
  }
}

.large-card--tea {
  padding: 98px 109px 92px;

  @include vp-laptop {
    padding: 74px 78px 61px;
  }

  @include vp-tablet {
    padding: 50px 40px 70px;
  }

  @include vp-mobile {
    padding: 25px 20px 40px;
  }

  .large-card {
    &__inner {
      gap: 95px;

      @include vp-laptop {
        gap: 71px;
      }
    }

    &__images-wrapper {
      width: 496px;
      height: 676px;

      @include vp-laptop {
        width: 351px;
        height: 478px;
      }

      @include vp-tablet {
        display: none;
      }
    }

    &__images-wrapper--tablet {
      display: none;

      @include vp-tablet {
        display: flex;
        width: 291px;
        height: 396px;
      }

      @include vp-mobile {
        width: 143px;
        height: 194px;
      }
    }

    &__preview-image {
      top: unset;
      width: 194px;
      height: 194px;
      bottom: 74px;
      right: 17px;

      @include vp-laptop {
        width: 132px;
        height: 139px;
        bottom: 50px;
        right: 14px;
      }

      @include vp-tablet {
        width: 110px;
        height: 110px;
        bottom: 48px;
        right: 1px;
      }

      @include vp-mobile {
        width: 54px;
        height: 56px;
        bottom: 24px;
        right: 0;
      }
    }

    &__content {
      width: 700px;
      padding: 12px 0 70px;

      @include vp-laptop {
        width: 500px;
        padding: 6px 0 50px;
      }

      @include vp-tablet {
        width: 100%;
        padding: 0;
      }
    }

    &__top {
      @include vp-tablet {
        justify-content: space-between;
        gap: 5px;
        margin: 0 0 30px;
      }

      @include vp-mobile {
        margin: 0 0 15px;
      }
    }

    &__headings-rating {
      @include vp-tablet {
        width: 290px;
      }

      @include vp-mobile {
        width: 145px;
      }
    }

    &__headings-actions {
      @include vp-tablet {
        min-height: 60%;
      }
    }

    &__headings {
      @include vp-tablet {
        gap: 15px;
      }

      @include vp-mobile {
        gap: 5px;
      }
    }

    &__actions-list {
      @include vp-tablet {
        gap: 10px;
      }

      @include vp-mobile {
        gap: 5px;
      }
    }

    &__rating {
      @include vp-tablet {
        gap: 15px 30px;
      }

      @include vp-mobile {
        gap: 8px 13px;
      }
    }

    &__product-text,
    &__company-text {
      @include vp-tablet {
        max-width: 500px;
      }

      @include vp-mobile {
        max-width: 250px;
      }
    }
  }
}

.large-card--healthy {
  padding: 90px 145px 96px;

  @include vp-laptop {
    padding: 54px 100px 76px;
  }

  @include vp-tablet {
    padding: 50px 50px 70px;
  }

  @include vp-mobile {
    padding: 25px 30px 40px;
  }

  .large-card {
    &__inner {
      gap: 110px;

      @include vp-laptop {
        gap: 80px;
      }
    }

    &__images-wrapper {
      width: 361px;
      height: 680px;

      @include vp-laptop {
        width: 256px;
        height: 483px;
      }

      @include vp-tablet {
        display: none;
      }
    }

    &__images-wrapper--tablet {
      display: none;

      @include vp-tablet {
        display: flex;
        width: 231px;
        height: 398px;
      }

      @include vp-mobile {
        width: 95px;
        height: 171px;
      }
    }

    &__content {
      width: 850px;
      padding: 42px 0 47px;

      @include vp-laptop {
        width: 640px;
        padding: 26px 0 35px;
      }

      @include vp-tablet {
        width: 100%;
        padding: 0;
      }
    }

    &__top {
      @include vp-tablet {
        justify-content: space-between;
        gap: 5px;
        margin: 0 0 30px;
      }

      @include vp-mobile {
        margin: 0 0 15px;
      }
    }

    &__headings-rating {
      @include vp-tablet {
        width: 300px;
      }

      @include vp-mobile {
        width: 145px;
      }
    }

    &__headings-actions {
      @include vp-tablet {
        min-height: 60%;
      }
    }

    &__headings {
      @include vp-tablet {
        gap: 15px;
      }

      @include vp-mobile {
        gap: 5px;
      }
    }

    &__actions-list {
      @include vp-tablet {
        gap: 10px;
      }

      @include vp-mobile {
        gap: 5px;
      }
    }

    &__rating {
      @include vp-tablet {
        gap: 15px 30px;
      }

      @include vp-mobile {
        gap: 8px 13px;
      }
    }

    &__product-text,
    &__company-text {
      max-width: 760px;

      @include vp-tablet {
        max-width: 550px;
      }

      @include vp-mobile {
        max-width: 250px;
      }
    }

    &__weight-radio {
      align-self: start;
      width: 100%;
      justify-content: start;
      gap: 25px;
      margin: auto auto 33px 0;

      @include vp-laptop {
        gap: 18px;
        margin: auto auto 28px 0;
      }

      @include vp-tablet {
        display: none;
      }
    }
  }
}

.large-card--vending {
  padding: 110px 164px 165px;

  @include vp-laptop {
    padding: 60px 90px 70px;
  }

  @include vp-tablet {
    padding: 50px 38px 111px;
  }

  @include vp-mobile {
    padding: 25px 20px 40px;
  }

  .large-card {
    &__inner {
      gap: 100px;

      @include vp-laptop {
        gap: 90px;
      }
    }

    &__images-wrapper {
      width: 433px;
      height: 591px;
      border-radius: 20px;
      overflow: hidden;

      @include vp-laptop {
        width: 350px;
        height: 483px;
        border-radius: 14px;
      }

      @include vp-tablet {
        display: none;
      }
    }

    &__images-wrapper--tablet {
      display: none;

      @include vp-tablet {
        display: flex;
        width: 100%;
        height: 348px;
        border-radius: 20px;
      }

      @include vp-mobile {
        height: 170px;
        border-radius: 10px;
      }
    }

    &__content {
      width: 760px;
      padding: 10px 0 14px;

      @include vp-laptop {
        width: 540px;
      }

      @include vp-tablet {
        width: 100%;
      }
    }

    &__top {
      @include vp-tablet {
        justify-content: space-between;
        gap: 45px;
        margin: 0 0 45px;
      }

      @include vp-mobile {
        margin: 0 0 23px;
      }
    }

    &__headings-rating {
      @include vp-tablet {
        width: 100%;
        gap: 45px;
        justify-content: center;
      }

      @include vp-mobile {
        gap: 25px;
      }
    }

    &__stars {
      @include vp-tablet {
        flex-grow: 1;
      }
    }

    &__headings-actions {
      @include vp-tablet {
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        width: 100%;
        gap: 45px 20px;
      }

      @include vp-mobile {
        gap: 25px 13px;
      }
    }

    &__headings {
      width: 600px;

      @include vp-laptop {
        width: 500px;
      }

      @include vp-tablet {
        width: 60%;
        gap: 15px;
      }

      @include vp-mobile {
        gap: 5px;
      }
    }

    &__actions-list {
      @include vp-tablet {
        gap: 10px;
        width: 30%;
      }

      @include vp-mobile {
        gap: 5px;
      }
    }

    &__rating {
      @include vp-tablet {
        flex-direction: row;
        gap: 30px;
        justify-content: start;
        align-items: center;
      }

      @include vp-mobile {
        gap: 8px 13px;
      }
    }

    &__product-text,
    &__company-text {
      max-width: 700px;

      @include vp-laptop {
        max-width: 460px;
      }

      @include vp-tablet {
        max-width: 550px;
      }

      @include vp-mobile {
        max-width: 250px;
      }
    }

    &__weight-radio {
      align-self: start;
      width: 100%;
      gap: 35px;
      justify-content: start;
      margin: auto auto 30px 0;

      @include vp-laptop {
        gap: 18px;
        margin: auto auto 28px 0;
      }

      @include vp-tablet {
        display: none;
      }
    }
  }
}
</style>
