<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "../../stores/cart";
const cartStore = useCartStore();

const showInfo = ref(false);

console.log(showInfo.value);

const nextSale = computed(() => {
  return cartStore.cartSales.find((el) => cartStore.totalSum < el[0]);
});
</script>

<template>
  <div class="info-block" v-show="!showInfo">
    <p class="info-block__current-sale">
      Ваша скидка: {{ cartStore.globalSale }} %
    </p>
    <p class="info-block__payment-sum">
      Итого к оплате: {{ cartStore.totalSum + cartStore.deliveryPrice }} ₽ *
    </p>
    <p
      class="info-block__sale-note"
      v-show="cartStore.saleType == 'cart' || cartStore.saleType == 'none'"
    >
      * До скидки {{ nextSale[1] }}% не хватает покупок на сумму:
      {{ nextSale[0] - cartStore.totalSum }} ₽
    </p>
    <p class="info-block__sale-note" v-show="cartStore.saleType == 'promo'">
      * Применена скидка {{ cartStore.globalSale }}% по промокоду "{{
        cartStore.userPromo
      }}"
    </p>
    <button
      class="info-block__button btn-icon"
      type="button"
      @click="showInfo = !showInfo"
    >
      ?
    </button>
  </div>
  <div class="info-block info-block--info" v-show="showInfo">
    <p class="info-block__not-enough">
      До скидки 15% не хватает покупок на сумму: 1255 ₽
    </p>

    <ul class="info-block__sales-list">
      <li
        v-for="cartSale in cartStore.cartSales"
        class="info-block__sales-item"
      >
        Скидка {{ cartSale[1] }}% - сумма покупок {{ cartSale[0] }} ₽
      </li>
    </ul>
    <button
      class="info-block__button btn-icon"
      type="button"
      @click="showInfo = !showInfo"
    >
      <svg class="btn-icon__svg" width="33" height="33" aria-hidden="true">
        <use xlink:href="../../assets/cart-sprite.svg#icon-cross"></use>
      </svg>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.btn-icon {
  display: flex;
  align-items: baseline;
  justify-content: center;
  color: $color-black;
  background-color: $color-white;
  border: none;
  font-weight: 600;
  line-height: 35px;
  font-size: 25px;
  font-family: $ff-gilroy, sans-serif;
  border-radius: 50%;
  margin: 0;
  padding: 2px 0 0 2px;
  user-select: none;
  cursor: pointer;
  width: 33px;
  height: 33px;
  text-align: bottom;

  @include vp-laptop {
    padding: 2px 0 0 1px;
    font-size: 18px;
    line-height: 23px;
    width: 23px;
    height: 23px;
  }

  @include vp-tablet {
    font-size: 13px;
    line-height: 18px;
    width: 16px;
    height: 16px;
    padding: 0.5px 0 0 1px;
  }

  @include vp-mobile {
    width: 33px;
    height: 33px;
    line-height: 33px;
    font-size: 25px;
    padding: 2px;
  }

  &__svg {
    width: 18px;
    height: 18px;
    transform: translate(-5%, 38%);

    @include vp-laptop {
      width: 12px;
      height: 12px;
      transform: translate(-2%, 32%);
    }

    @include vp-tablet {
      width: 8px;
      height: 8px;
      transform: translate(2%, 52%);
    }

    @include vp-mobile {
      width: 17px;
      height: 17px;
      transform: translate(0, 38%);
    }
  }

  &:hover {
    background-color: $color-bright-gray;
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
  position: relative;
  justify-content: space-between;
  width: 540px;
  min-height: 238px;
  gap: 18px;

  @include vp-laptop {
    border-radius: 14px;
    padding: 35px 40px 30px;
    width: 382px;
    min-height: 168px;
    gap: 12px;
  }

  @include vp-tablet {
    border-radius: 8px;
    width: 260px;
    min-height: 136px;
    padding: 22px 28px 23px;
    gap: 10px;
  }

  @include vp-mobile {
    padding: 31px 18px 29px;
    margin: 0 auto;
    border-radius: 0 0 10px 10px;
    width: calc(100% + 36px);
    min-height: 156px;
    max-width: calc($max-width-mobile + 36px);
    box-shadow: 0px 0px 50px $color-quick-silver-25;
    gap: 20px;
  }

  &__current-sale {
    font-family: $ff-gilroy, sans-serif;
    font-weight: 900;
    font-size: 30px;
    line-height: 37px;
    color: $color-white;
    margin: 0;
    padding: 0;
    max-width: 450px;

    @include vp-laptop {
      font-size: 22px;
      line-height: 27px;
      max-width: 300px;
    }

    @include vp-tablet {
      font-size: 14px;
      line-height: 16px;
      max-width: 160px;
    }

    @include vp-mobile {
      font-size: 20px;
      line-height: 25px;
      max-width: calc(100% - 40px);
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
      max-width: 160px;
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
      max-width: 160px;
    }

    @include vp-mobile {
      max-width: unset;
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
    max-width: 450px;

    @include vp-laptop {
      font-size: 12px;
      line-height: 13px;
      max-width: 300px;
    }

    @include vp-tablet {
      font-size: 12px;
      line-height: 15px;
      max-width: 150px;
    }

    @include vp-mobile {
      line-height: 17px;
      font-size: 14px;
      max-width: 240px;
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

    @include vp-tablet {
      gap: 6px;
    }

    @include vp-mobile {
      gap: 10px;
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

    @include vp-mobile {
      font-size: 14px;
      line-height: 16px;
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

    @include vp-tablet {
      top: 20px;
      right: 16px;
    }
  }
}

.info-block--info {
  padding: 52px 60px 62px;

  @include vp-laptop {
    padding: 41px 30px 38px;
  }

  @include vp-tablet {
    padding: 22px;
  }

  @include vp-mobile {
    padding: 22px 18px;
    gap: 10px;
  }
}
</style>
