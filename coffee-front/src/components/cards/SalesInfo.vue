<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "../../stores/cart";
const cartStore = useCartStore();

const showInfo = ref(false);

console.log(showInfo.value)

const nextSale = computed(() => {
  return cartStore.cartSales.find((el) => cartStore.totalSum < el[0])
})
</script>

<template>
  <div class="info-block" v-show="!showInfo">
    <p class="info-block__current-sale"
      >Ваша скидка: {{ cartStore.globalSale }} %</p
    >
    <p class="info-block__payment-sum"
      >Итого к оплате: {{ cartStore.totalSum + cartStore.deliveryPrice }} ₽ *</p
    >
    <p class="info-block__sale-note"
    v-show="cartStore.saleType == 'cart' || cartStore.saleType == 'none'"
      >* До скидки {{nextSale[1]}}% не хватает покупок на сумму: {{ nextSale[0] - cartStore.totalSum  }} ₽</p>
    <p class="info-block__sale-note"
    v-show="cartStore.saleType == 'promo'"
      >* Применена скидка {{ cartStore.globalSale }}% по промокоду "{{ cartStore.userPromo }}"</p
    >
    <button class="info-block__button btn-icon" type="button"
    @click="showInfo = !showInfo">?</button>
  </div>
  <div class="info-block info-block--info" v-show="showInfo">
    <button class="info-block__button btn-icon" type="button"
    v-show="cartStore.saleType != 'promo'"
    @click="showInfo = !showInfo">?</button>

  
    <p class="info-block__not-enough"
      >До скидки 15% не хватает покупок на сумму: 1255 ₽</p>

    <ul class="info-block__sales-list">
      <li v-for="cartSale in cartStore.cartSales"
      class="info-block__sales-item">Скидка {{cartSale[1]}}% - сумма покупок {{ cartSale[0] }} ₽ </li>
    </ul>
    <button class="info-block__button btn-icon" type="button"
    @click="showInfo = !showInfo">x</button>
  </div>
  
</template>

<style lang="scss" scoped>
.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-black;
  background-color: $color-white;
  border: none;
  font-weight: 600;
  line-height: 30px;
  font-size: 25px;
  font-family: $ff-gilroy, sans-serif;
  border-radius: 50%;
  margin: 0;
  padding: 6px 0 0 4px;
  user-select: none;
  cursor: pointer;
  width: 33px;
  height: 33px;

  @include vp-laptop {
    font-size: 18px;
    line-height: 21px;
    width: 23px;
    height: 23px;
    padding: 6px 0 0 4px;
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

.info-block {
  background-color: $color-ucla-gold;
  border-radius: 20px;
  border: none;
  position: relative;
  padding: 52px 60px 45px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: relative;
  justify-content: space-between;
  width: 540px;
  min-height: 238px;

  @include vp-laptop {
    border-radius: 14px;
    padding: 35px 40px 30px;
    width: 382px;
    min-height: 168px;
    gap: 12px;
  }

  @include vp-tablet {
    border-radius: 10px;
    padding: 40px 34px 60px;
  }

  @include vp-mobile {
    padding: 30px 18px 35px;
    width: 100%;
  }

  &__current-sale {
    font-family: $ff-gilroy, sans-serif;
    font-weight: 900;
    font-size: 30px;
    line-height: 37px;
    color: $color-white;
    margin: 0;
    padding: 0;

    @include vp-laptop {
      font-size: 22px;
      line-height: 27px;
    }

    @include vp-tablet {
      font-size: 30px;
      line-height: 37px;
      margin: 0 0 10px;
    }

    @include vp-mobile {
      font-size: 20px;
      line-height: 25px;
      margin: 0 0 11px;
    }
  }

  &__payment-sum {
    font-family: $ff-gilroy, sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: $color-white;
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
      font-size: 14px;
      line-height: 16px;
    }
  }

  &__sale-note {
    font-family: $ff-gilroy, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: $color-black;
    margin: auto 0 0;
    padding: 0;

    @include vp-laptop {
      font-size: 12px;
      line-height: 17px;
    }

    @include vp-tablet {
      font-size: 12px;
      line-height: 14px;
      margin: 0 auto;
      max-width: $max-width-tablet;
      width: 100%;
    }

    @include vp-mobile {
      font-size: 10px;
      line-height: 12px;
      max-width: $max-width-mobile;
    }
  }

  &__not-enough {
    font-family: $ff-gilroy, sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: $color-black;
    padding: 0;
    margin: 0;

    @include vp-laptop {
      font-size: 12px;
      line-height: 13px;
    }
  }

  &__sales-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @include vp-laptop {
      gap: 7px;
    }
  }

  &__sales-item {
    margin: 0;
    padding: 0;
    font-family: $ff-gilroy, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: $color-black;

    @include vp-laptop {
      font-size: 12px;
      line-height: 13px;
    }
  }


  &__sales-item:first-child {
    display: none;
  }

  &__button {
    position: absolute;
    top: 20px;
    right: 20px;

    @include vp-laptop {
      top: 17px;
      right: 17px;
    }
  }
}

.info-block--info {
  padding: 52px 60px 62px;

  @include vp-laptop {
    padding: 40px 30px 39px;
  }
}
</style>
