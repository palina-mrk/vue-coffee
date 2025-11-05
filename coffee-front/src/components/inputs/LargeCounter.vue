<script setup>
const props = defineProps(['productId', 'productWeight']);
import { useCartStore } from "../../stores/cart";
const cartStore = useCartStore();
import {computed, watch} from 'vue';

console.log(props.productId, props.productWeight);

//const countValue = ref(props.productWeight);

/*watch (
  () => [props.productId, props.productWeight,cartStore.getCount(props.productId, props.productWeight)], 
  () => countValue = cartStore.getCount(props.productId, props.productWeight))*/

const countValue = computed(() => cartStore.getCount(props.productId, props.productWeight));
</script>

<template>
  <div class="large-counter">
    <button
      class="large-counter__btn large-counter__btn--minus"
      type="button"
      :disabled="countValue < 1"
      @click="cartStore.removeOneFromCart(productId, productWeight)"
    >
      -
    </button>
    <input
      class="large-counter__field"
      type="number"
      :value="countValue"
      @input="cartStore.setCount(productId, productWeight, $event.target.value)"
    />
    <button
      class="large-counter__btn large-counter__btn--plus"
      type="button"
      @click="cartStore.addToCart(productId, productWeight)"
    >
      +
    </button>
  </div>
</template>

<style lang="scss" scoped>
.large-counter {
  position: relative;
  font-family: $ff-gilroy, sans-serif;

  &__btn {
    margin: 0;
    padding: 10px;
    background-color: transparent;
    border: none;
    display: flex;
    color: $color-black;
    font-family: $ff-gilroy, sans-serif;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    user-select: none;
    position: absolute;
    cursor: pointer;
    top: 50%;
    transform: translateY(calc(1px - 50%));

    @include vp-laptop {
      padding: 8px;
      font-size: 22px;
      line-height: 25px;
    }

    @include vp-tablet {
      padding: 10px;
      font-size: 40px;
      line-height: 43px;
    }

    @include vp-mobile {
      padding: 13px;
      font-size: 20px;
      line-height: 23px;
    }

    &--minus {
      left: 30px;

      @include vp-laptop {
        left: 7px;
      }

      @include vp-tablet {
        left: 15px;
      }

      @include vp-mobile {
        left: 4px;
      }
    }

    &--plus {
      right: 30px;

      @include vp-laptop {
        right: 7px;
      }

      @include vp-tablet {
        right: 15px;
      }

      @include vp-mobile {
        right: 4px;
      }
    }

    &:hover {
      color: $color-ucla-gold;
    }

    &[disabled] {
      color: $color-chinese-silver;
      cursor: unset;
    }
  }

  &__field {
    margin: 0;
    padding: 25px 65px 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-width: 1px;
    border-style: solid;
    border-color: $color-light-silver;
    background-color: $color-cultured-f6;
    border-radius: 5px;
    text-align: center;
    font-family: $ff-gilroy, sans-serif;
    color: $color-raising-black;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    width: 100%;

    @include vp-laptop {
      padding: 11px 45px 9px;
      border-width: 0.7px;
      border-radius: 4px;
      font-size: 14px;
      line-height: 15px;
    }

    @include vp-tablet {
      padding: 15px 60px 12px;
      border-width: 1px;
      border-color: $color-ucla-gold;
      border-radius: 5px;
      background-color: $color-antiflash-white-f0;
      font-size: 20px;
      line-height: 23px;
    }

    @include vp-mobile {
      font-size: 18px;
      padding: 14px 50px 10px;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none; /* Кнопки спрятаны */
    }
  }
}
</style>
