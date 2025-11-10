<script setup>
import CustomPromo from "../inputs/CustomPromo.vue";
import { reactive, computed } from "vue";
import { useCartStore } from "../../stores/cart";
const cartStore = useCartStore();

const promoData = reactive({
  id: "promo",
  name: "promo",
  placeholder: "Введите промокод",
  error: "Срок действия промокода истёк",
  userPromo: computed(() => cartStore.userPromo),
  promoSale: computed(() => cartStore.promoSale),
});

const userPromo = reactive({
  str: "",
  wasAttempt: false,
  isSuccess: false,
});

function setPromo() {
  if (userPromo.str.length == 0) return;
  userPromo.wasAttempt = true;
  userPromo.isSuccess = cartStore.setPromo(userPromo.str);
}
function clearInput() {
  userPromo.str = "";
  userPromo.wasAttempt = false;
  userPromo.isSuccess = false;
}
</script>

<template>
  <div class="promo-form">
    <h2 class="promo-form__title">Промокод</h2>
    <p class="promo-form__text">
      Введите подарочный промокод в&nbsp;поле ниже и&nbsp;получите скидку
      на&nbsp;заказ до&nbsp;20%. Скидка не&nbsp;распространяется
      на&nbsp;доставку
    </p>
    <custom-promo
      :class="{
        'promo-form__input': true,
        'custom-input--accept': userPromo.wasAttempt && userPromo.isSuccess,
        'custom-input--error': userPromo.wasAttempt && !userPromo.isSuccess,
      }"
      v-model="userPromo.str"
      :inputData="promoData"
      @update:modelValue="userPromo.str = $event"
      @click="clearInput"
    ></custom-promo>
    <button
      class="promo-form__button btn-cornsilk"
      @click="setPromo"
      type="button"
    >
      Ввести промокод
    </button>
  </div>
</template>

<style lang="scss" scoped>
.btn-cornsilk {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-ucla-gold;
  background-color: $color-cornsilk;
  border-color: $color-ucla-gold;
  border-style: solid;
  border-width: 1px;
  font-weight: 600;
  line-height: 30px;
  font-size: 25px;
  font-family: $ff-gilroy, sans-serif;
  border-radius: 5px;
  margin: 0;
  padding: 20px 17px 17px;
  user-select: none;
  cursor: pointer;

  @include vp-laptop {
    font-size: 18px;
    line-height: 21px;
    padding: 14px;
    border-radius: 4px;
  }

  @include vp-tablet {
    font-size: 20px;
    line-height: 26px;
    padding: 23px 22px 20px;
    border-radius: 5px;
  }

  @include vp-mobile {
    font-size: 18px;
    line-height: 22px;
    padding: 14px 14px 12px;
  }

  &:hover {
    color: $color-white;
    background-color: $color-ucla-gold;
  }

  &[disabled] {
    border-color: $color-antiflash-white-f0;
    background-color: $color-lotion;
    color: $color-antiflash-white-f0;
    cursor: unset;
  }
}

.promo-form {
  background-color: $color-white;
  border-radius: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: $color-platinum;
  box-shadow: 0 0 50px 0 $color-quick-silver-25;
  position: relative;
  width: 100%;
  padding: 50px 140px 23px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @include vp-laptop {
    box-shadow: 0 0 35px 0 $color-spanish-gray-c95-25;
    border-radius: 14px;
    gap: 20px;
    padding: 40px 100px 41px;
  }

  @include vp-tablet {
    box-shadow: 0px 0px 50px 0px $color-spanish-gray-c95-25;
    border-radius: 10px;
    padding: 40px 0 50px;
  }

  @include vp-mobile {
    padding: 30px 0 38px;
    gap: 20px;
  }

  &__title {
    font-family: $ff-gilroy, sans-serif;
    font-weight: 900;
    font-size: 30px;
    line-height: 37px;
    color: $color-raising-black;
    margin: 0;
    padding: 0;

    @include vp-laptop {
      font-size: 22px;
      line-height: 26px;
    }

    @include vp-tablet {
      font-size: 25px;
      line-height: 31px;
      width: 100%;
      max-width: $max-width-tablet;
      margin: 0 auto;
    }

    @include vp-mobile {
      font-size: 20px;
      line-height: 25px;
      max-width: $max-width-mobile;
    }
  }

  &__text {
    font-family: $ff-gilroy, sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: $color-raising-black;
    padding: 0;
    margin: 0 0 10px;

    @include vp-laptop {
      font-size: 14px;
      line-height: 17px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 26px;
      max-width: $max-width-tablet;
      width: 100%;
      margin: 0 auto 10px;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 18px;
      margin: 0 auto;
      max-width: $max-width-mobile;
    }
  }

  &__input {
    margin: 0 0 9px;

    @include vp-laptop {
      margin: 0 0 3px;
    }

    @include vp-tablet {
      margin: 0 auto -2px;
      max-width: $max-width-tablet;
      width: 100%;
    }

    @include vp-mobile {
      max-width: $max-width-mobile;
    }
  }

  &__button {
    @include vp-tablet {
      margin: 0 auto;
      max-width: $max-width-tablet;
      width: 100%;
    }

    @include vp-mobile {
      max-width: $max-width-mobile;
    }
  }
}
</style>
