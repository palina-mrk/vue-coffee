<script setup>
import { reactive, ref } from 'vue';
import DeliveryWay from './DeliveryWay.vue';
import { useCartStore } from '../../stores/cart';
const cartStore = useCartStore();

const deliveryWays = reactive({
  'name': 'delivery',
  'legend': 'Доставка',
  'labelStrs': cartStore.deliveryLabels,
  'labelPrices': cartStore.deliveryPrices,
  'values': cartStore.deliveryValues,
  'fieldsCount': cartStore.deliveryPrices.length
})

</script>

<template>
  <div class="form-block">
    <div class="form-block__top">
      <span class="form-block__summary-wrapper">
        <span class="form-block__summary-text">Итог: {{ cartStore.totalSum + cartStore.deliveryPrice }} ₽</span>
        <span class="form-block__subsummary-text">Подытог: {{ cartStore.totalSum }} ₽</span>
        <span class="form-block__subsummary-text">Скидка: {{ cartStore.totalSale ?  cartStore.totalSale : 0}} ₽ {{ cartStore.globalSale ? `(${cartStore.globalSale}%)` : ''}}</span>
      </span>
      <div class="form-block__icons-wrapper">
        <picture>
          <source media="(max-width: 767px)" srcset="../../images/cart/cart-mastercard-mobile.png">
          <source media="(max-width: 1348px)" srcset="../../images/cart/cart-mastercard-tablet.png">
          <source media="(max-width: 1904px)" srcset="../../images/cart/cart-mastercard-laptop.png">
          <img class="form-block__icon-mastercard" src="../../images/cart/cart-mastercard-desktop.png" width="79" height="51" alt="Логотип карты mastercard">
        </picture>
        <picture>
          <source media="(max-width: 767px)" srcset="../../images/cart/cart-visa-mobile.png">
          <source media="(max-width: 1348px)" srcset="../../images/cart/cart-visa-tablet.png">
          <source media="(max-width: 1904px)" srcset="../../images/cart/cart-visa-laptop.png">
          <img class="form-block__icon-visa" src="../../images/cart/cart-visa-desktop.png" width="66" height="43" alt="Логотип карты visa">
        </picture>
      </div>
    </div>
    <delivery-way 
    class="form-block__delivery"
    :inputData="deliveryWays"
    :selectedValue="cartStore.deliveryValue"
    @set-value="cartStore.setDeliveryValue($event)"
    ></delivery-way>
    <button 
      class="form-block__button btn-gold" 
      type="button"
    >Оплатить заказ</button>

    <span class="form-block__personal-text">Ваши персональные данные будут использоваться для управления доступом к&nbsp;вашей учетной записи и&nbsp;для других целей, описанных в&nbsp;нашем документе политика конфиденциальности.</span>
  </div>
</template>

<style lang="scss" scoped>
.form-block {
  background-color: $color-white;
  border-radius: 20px;
  box-shadow: 0 0 30px 0 $color-spanish-gray-c95-25;
  position: relative;
  width: 680px;
  padding: 50px 80px 23px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @include vp-laptop {
    box-shadow: 0 0 21px 0 $color-spanish-gray-c95-25;
    padding: 34px 60px;
    width: 280px;
    border-radius: 14px;
    height: 373px;
  }

  @include vp-tablet {
    box-shadow: 0px 0px 61px 0px $color-spanish-gray-c95-25;
    padding: 109px 44px 65px;
    width: 700px;
    height: 620px;
  }

  @include vp-mobile {
    box-shadow: 0px 0px 30px 0px $color-spanish-gray-c95-25;
    padding: 52px 20px 30px;
    width: 340px;
    height: 303px;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }

  &__summary-wrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    margin: 0 0 10px;
  }

  &__summary-text {
    font-family: $ff-gilroy sans-serif;
    font-weight: 900;
    font-size: 30px;
    line-height: 37px;
    color: $color-raising-black;
  }

  &__subsummary-text {
    font-family: $ff-gilroy sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: $color-sonic-silver;
  }

  &__icons-wrapper {
    display: flex;
    align-items: center;
  }

  &__delivery {
    margin: 0 0 20px;
  }

  &__personal-text {
    font-family: $ff-gilroy sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: $color-sonic-silver;
  }
}


.btn-gold {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-white;
  background-color: $color-ucla-gold;
  font-weight: 600;
  line-height: 30px;
  font-size: 25px;
  font-family: $ff-gilroy sans-serif;
  border-radius: 5px;
  border: none;
  margin: 0;
  padding: 20px;
  user-select: none;
  cursor: pointer;

  @include vp-laptop {
    font-size: 21px;
    line-height: 25px;
  }

  @include vp-tablet {
    font-size: 25px;
    line-height: 30px;
  }

  @include vp-mobile {
    font-size: 18px;
    line-height: 22px;
  }

  &:hover {
    background-color: $color-mustard-yellow;
  }

  &[disabled] {
    border-color: $color-antiflash-white-f0;
    background-color: $color-lotion;
    color: $color-antiflash-white-f0;
    cursor: unset;
  }
}

</style>
