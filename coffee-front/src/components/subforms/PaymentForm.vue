<script setup>
import { reactive } from 'vue';
import PaymentWay from './PaymentWay.vue';
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
    <payment-way 
    class="form-block__delivery"
    :inputData="deliveryWays"
    :selectedValue="cartStore.deliveryValue"
    @set-value="cartStore.setDeliveryValue($event)"
    ></payment-way>
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
  border-width: 1px;
  border-style: solid;
  border-color: $color-platinum;
  box-shadow: 0 0 50px 0 $color-quick-silver-25;
  position: relative;
  width: 680px;
  padding: 50px 80px 23px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @include vp-laptop {
    box-shadow: 0 0 35px 0 $color-spanish-gray-c95-25;
    border-radius: 14px;
    gap: 7px;
    padding: 40px 50px 14px;
    width: 480px;
  }

  @include vp-tablet {
    box-shadow: 0px 0px 50px 0px $color-spanish-gray-c95-25;
    border-radius: 10px;
    gap: 10px;
    padding: 40px 34px 60px;
    width: 700px;
  }

  @include vp-mobile {
    padding: 30px 18px 35px;
    width: 340px;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: start;

    @include vp-mobile {
      margin: 0 0 10px;
    }
  }

  &__summary-wrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    
    @include vp-laptop {
      gap: 7px;
    }

    @include vp-tablet {
      gap: 10px;
    }

    @include vp-mobile {
      gap: 10px;
    }
  }

  &__summary-text {
    font-family: $ff-gilroy sans-serif;
    font-weight: 900;
    font-size: 30px;
    line-height: 37px;
    color: $color-raising-black;
    margin: 0 0 10px;

    @include vp-laptop {
      font-size: 22px;
      line-height: 26px;
      margin: 0 0 5px;
    }

    @include vp-tablet {
      font-size: 30px;
      line-height: 37px;
      margin: 0 0 10px;
    }

    @include vp-mobile {
      font-size: 20px;
      line-height: 25px;
    }
  }

  &__subsummary-text {
    font-family: $ff-gilroy sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: $color-sonic-silver;

    @include vp-laptop {
      font-size: 14px;
      line-height: 17px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 24px;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 16px;
    }
  }

  &__icons-wrapper {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 8px;
    position: relative;
    top: -10px;

    @include vp-laptop {
      gap: 6px;
      top: -3px;
    }

    @include vp-tablet {
      gap: 13px;
      top: -4px;
    }

    @include vp-mobile {
      gap: 6px;
      top: -1px;
      right: -1px;
    }
  }

  &__icon-visa,
  &__icon-mastercard {
    display: flex;
    overflow: hidden;
    object-fit: cover;
  }

  &__icon-visa {
    width: 66px;
    height: 42px;

    @include vp-laptop {
      width: 53px;
      height: 35px;
    }

    @include vp-tablet {
      width: 63px;
      height: 41px;
    }

    @include vp-mobile {
      width: 53px;
      height: 35px;
    }
  }

  &__icon-mastercard {
    width: 79px;
    height: 51px;

    @include vp-laptop {
      width: 64px;
      height: 41px;
    }

    @include vp-tablet {
      width: 74px;
      height: 49px;
    }
    
    @include vp-mobile {
      width: 63px;
      height: 41px;
    }
  }

  &__delivery {
    margin: 0 0 20px;

    @include vp-laptop {
      margin: 0 0 14px;
    }

    @include vp-tablet {
      margin: 0 0 20px;
    }
  }

  &__personal-text {
    font-family: $ff-gilroy sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: $color-sonic-silver;

    @include vp-laptop {
      font-size: 10px;
      line-height: 11px;
    }

    @include vp-tablet {
      font-size: 12px;
      line-height: 14px;
    }

    @include vp-mobile {
      font-size: 10px;
      line-height: 12px;
    }
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
    font-size: 18px;
    line-height: 21px;
    padding: 14px;
    border-radius: 4px;
  }

  @include vp-tablet {
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    padding: 20px;
    border-radius: 5px;
  }

  @include vp-mobile {
    font-size: 18px;
    line-height: 22px;
    padding: 14px;
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
