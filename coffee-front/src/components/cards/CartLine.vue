<script setup>
import CustomCounter from '../inputs/CustomCounter.vue';
import { reactive } from 'vue';

const itemInfo = reactive({
  title: 'Columbia Supremo',
  category: 'coffee',
  descripton: 'Мытая, натуральная, смесь',
  weight: 250,
  price: 270,
  count: 1,
  sale: 27,
  total: 243,
})

</script>

<template>
  <div class="product-line">
    <button
    class="product-line__btn-remove btn-remove"
    type="button">
      <svg class="btn-remove__icon" width="21" height="21" aria-hidden="true">
        <use xlink:href="../../assets/cart-sprite.svg#icon-cross"></use>
      </svg>
      <svg class="btn-remove__icon btn-remove__icon--for-tablet" width="21" height="21" aria-hidden="true">
        <use xlink:href="../../assets/cart-sprite.svg#icon-remove"></use>
      </svg>
    </button>
    <div class="product-line__details">
      <div class="product-line__icon-wrapper">
        <picture>
          <source media="(max-width: 767px)" :srcset="`../../src/images/cart/cart-${itemInfo.category}-mobile.png`">
          <source media="(max-width: 1348px)" :srcset="`../../src/images/cart/cart-${itemInfo.category}-tablet.png`">
          <source media="(max-width: 1903px)" :srcset="`../../src/images/cart/cart-${itemInfo.category}-laptop.png`">
          <img class="product-card__icon-image" :src="`../../src/images/cart/cart-${itemInfo.category}-desktop.png`" width="81" height="113" alt="Иконка товара">
        </picture>
      </div>
      <div class="product-line__details-text">
        <h3 class="product-line__title">{{ itemInfo.title }}</h3>
        <span class="product-line__text-line">{{ itemInfo.descripton }}</span>
        <span class="product-line__text-line">{{ itemInfo.weight }}</span>
      </div>
    </div>
    <span class="product-line__price">{{ itemInfo.price }} ₽</span>
    <custom-counter class="product-line__count"
      :modelValue="itemInfo.count"
      @update:modelValue="itemInfo.count = $event"
    ></custom-counter>
    <span class="product-line__sale">{{ itemInfo.sale }} ₽</span>
    <span class="product-line__total">{{ itemInfo.total }} ₽</span>
  </div>
</template>


<style lang="scss" scoped>
* {
  font-family: $ff-gilroy;
}
.product-line {
  width: 100%;
  min-height: 173px;
  padding: 30px 10px 30px 0;
  display: grid;
  gap: 10px;
  align-items: center;
  justify-items: start;
  border-radius: 20px;
  border: 1px solid $color-antiflash-white-f0;
  background-color: $color-lotion;
  color: $color-raising-black;
  font-family: $ff-gilroy sans-serif;
  position: relative;
  grid-template-columns: 213px 1fr 130px 215px 185px 110px;

  @include vp-laptop {
  }

  @include vp-tablet {
  }

  @include vp-mobile {
  }

  &__btn-remove {
    position: relative;
    left: 35px;
  }

  &__details {
    display: flex;
    gap: 34px;
    width: 329px;
    justify-content: space-between;
    align-items: center;
  }

  &__icon-wrapper{
    width: 81px;
    height: 113px;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  &__icon-image {
    width: 100%;
    height: 100%;
  }

  &__details-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: start;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  &__title {
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    margin: 0;
    padding: 0;
  }

  &__text-line {
    font-weight: 500px;
    font-size: 18px;
    line-height: 21px;
  }

  &__count {
    width: 170px;
    height: 50px;
  }

  &__price,
  &__sale,
  &__total {
    font-weight: 500;
    font-size: 25px;
    line-height: 29px;
  }
}

.btn-remove {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 20px;
  background-color: transparent;
  cursor: pointer;
  color: $color-ucla-gold;
  border: none;
  border-radius: 50%;
  
  &:hover {
    color: $color-raising-black;
  }

  &__icon {
    width: 21px;
    height: 21px;
  }

  &__icon--for-tablet {
    display: none;

    @include vp-tablet {
      display: flex;
    }
  }
}
</style>