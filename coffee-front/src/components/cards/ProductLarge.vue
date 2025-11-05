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

const product = computed(() => catalogStore.isLoaded ? catalogStore.getFullInfo(Number(route.params.productID)) : {});

const weightValue = ref(0);
watch (() => product?.value, () => {
  weightValue.value = product?.value.weights[0].value
})

const priceVariant = computed(() => product?.value.weights.find(el => el.value == weightValue.value)?.price)


const weightVariants = computed(() =>
  product.value.weights.map((el) => el.value),
);
const weightLabels = computed(() =>
  product.value.weights.map((el) => el.value + (product.value.category == 'vending' ? ' кг.' : ' г.')),
);

const imageVariant = computed(() => {
  switch (product.kind) {
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
  <div class="large-card" v-if="catalogStore.isLoaded">
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

        <picture class="large-card__preview-picture"
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
              <div class="large-card__headings">
                <slider-corns
                  v-if="product.category == 'coffee'"
                  class="large-card__corns slider-corns--large"
                  :count="product.roasting"
                ></slider-corns>
                <h3 class="large-card__title">{{ product.title }}</h3>
                <p class="large-card__description">{{ catalogStore.getShortDescription(product.id) }}</p>
              </div>
            
              <ul class="large-card__actions-list">
                <li class="large-card__actions-item"
                  v-for="action in product.actions"
                >
                  {{ action }}
                </li>
              </ul>
            </div>

            <div class="large-card__rating">
                <slider-stars
                  class="slider-stars--large"
                  :rating="product.rate.rating"
                ></slider-stars>      
                <span class="large-card__rating-value">{{
                  product.rate.rating
                }}</span>
                <a class="large-card__comments-count"
                href="#"
                >({{ product.rate.comments }} отзыва)</a
                >
            </div>
          </div>
          <div class="large-card__images-tablet">
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

            <picture class="large-card__preview-picture"
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
        <p class="large-card__company-text">Компания Нью Рефайнинг Груп находится в&nbsp;г. Калининграде и&nbsp;имеет свой склад и&nbsp;представительство в&nbsp;Москве. Завод работает на&nbsp;рынке свежеобжаренного кофе и&nbsp;растворимой продукции более 15&nbsp;лет. Завод имеет немецкое оборудование марки Probat по&nbsp;обжарке кофе и&nbsp;итальянские агломераторы для производства растворимой продукции.</p>   
        <div class="large-card__coffee-details" v-if="product.category == 'coffee'">
          <div class="large-card__hue">
            <span class="large-card__hue-name">Кислинка</span>
            <slider-points 
            class="slider-points--large"
            :count="product.hue.acidity"></slider-points>
          </div>

          <div class="large-card__hue">
            <span class="large-card__hue-name">Горчинка</span>
            <slider-points
            class="slider-points--large"
            :count="product.hue.bitterness"></slider-points>
          </div>

          <div class="large-card__hue">
            <span class="large-card__hue-name">Насыщенность</span>
            <slider-points 
            class="slider-points--large"
            :count="product.hue.richness"></slider-points>
          </div>
        </div>

        <div class="large-card__weight-slider"></div>

        <radio-block class="large-card__weight-radio"
          :name="product.id + 'weights'"
          :labels="weightLabels"
          :values="weightVariants"
          :fields-count="weightVariants.length"
          :selectedValue="weightValue"
          @set-value="weightValue = $event"
        >
        </radio-block>

        
        <div class="large-card__bottom">
          <large-dropdown class="large-card__weight-dropdown"
            :labels="weightLabels"
            :values="weightVariants"
            :fields-count="weightVariants.length"
            :selectedValue="weightValue"
            @set-value="weightValue = $event"
          >
          </large-dropdown>

          <large-counter class="large-card__counter"
          :productId="product.id"
          :productWeight="weightValue"
          ></large-counter>
          <button 
          class="large-card__btn btn-gold"
          @click="cartStore.addToCart(product.id, weightValue)"
          >Купить за {{ priceVariant }} ₽</button>
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
  }

  @include vp-tablet {
    padding: 21px 33px 42px 35px;
    box-shadow: 0px 0px 17px 0px $color-chinese-silver-25;
    border: none;
    border-radius: 10px;
  }

  @include vp-mobile {
    box-shadow: none;
    padding: 17px 32px 43px;
    border: 1px solid $color-platinum;
    border-radius: 20px;
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
  }

  &__images-tablet {
    display: none;

    @include vp-tablet {
      display: flex;
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
  }

  &__top {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 0 33px;

    @include vp-laptop {
      margin: 0 0 25px;
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
  }

  &__headings-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  }

  &__rating {
    display: flex;
    gap: 20px;
    flex-direction: row;
    align-items: end;

    @include vp-laptop {
      gap: 15px;
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
  }

  &__comments-count {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: $color-davys-gray;
    font-family: $ff-gilroy, sans-serif;
    text-decoration: none;
    position: relative;
    display: flex;

    @include vp-laptop {
      font-size: 12px;
      line-height: 16px;
    }

    &::after {
      content: "";
      background-color: $color-davys-gray;
      height: 1px;
      width: 100%;
      left: 0;
      bottom: 3px;
      position: absolute;
    }

    &:hover {
      color: $color-raising-black;
      text-decoration: none;
    }

    &:hover::after {
      background-color: $color-ucla-gold;
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
    width: 700px;

    @include vp-laptop {
      width: 500px;
      font-size: 14px;
      line-height: 18px;
    }
  }

  &__product-text {
    margin: 0 0 15px;

    @include vp-laptop {
      margin: 0 0 10px;
    }
  }

  &__company-text {
    margin: 0 0 30px;

    @include vp-laptop {
      margin: 0 0 20px;
    }
  }

  &__coffee-details {
    display: flex;
    justify-content: space-between;
    margin: 0 0 40px;

    @include vp-laptop {
      margin: 0 0 30px;
    }
  }

  &__hue {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @include vp-laptop {
      gap: 8px;
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
  }

  &__weight-dropdown {
    display: none;

    @include vp-tablet {
      display: flex;
      width: calc(50% - 10px);
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

</style>
