<script setup>
const props = defineProps(["productId", "productWeight"]);
import { useCartStore } from "../../stores/cart";
const cartStore = useCartStore();
import { computed, watch } from "vue";

console.log(props.productId, props.productWeight);

//const countValue = ref(props.productWeight);

/*watch (
  () => [props.productId, props.productWeight,cartStore.getCount(props.productId, props.productWeight)], 
  () => countValue = cartStore.getCount(props.productId, props.productWeight))*/

const countValue = computed(() =>
  cartStore.getCount(props.productId, props.productWeight),
);
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
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  border-color: $color-light-silver;
  background-color: $color-cultured-f6;

  @include vp-laptop {
    border-radius: 4px;
  }

  @include vp-tablet {
    border-radius: 5px;
    background-color: $color-antiflash-white-f0;
  }

  &__btn {
    margin: 0;
    background-color: transparent;
    border: none;
    display: flex;
    color: $color-black;
    font-family: $ff-gilroy, sans-serif;
    font-weight: 500;
    padding: 10px;
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
      padding: 12px;
      font-size: 40px;
      line-height: 46px;
    }

    @include vp-mobile {
      padding: 15px 8px 13px;
      font-size: 20px;
      line-height: 23px;
    }

    &--minus {
      left: 30px;

      @include vp-laptop {
        left: 22px;
      }

      @include vp-tablet {
        left: 28px;
      }

      @include vp-mobile {
        left: 12px;
      }
    }

    &--plus {
      right: 30px;

      @include vp-laptop {
        right: 22px;
      }

      @include vp-tablet {
        right: 28px;
      }

      @include vp-mobile {
        right: 12px;
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
    text-align: center;
    font-family: $ff-gilroy, sans-serif;
    color: $color-raising-black;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    width: 100%;
    border: none;
    background-color: transparent;

    @include vp-laptop {
      padding: 14px 45px 12px;
      font-size: 18px;
      line-height: 21px;
    }

    @include vp-tablet {
      padding: 21px 70px 17px;
      font-size: 25px;
      line-height: 30px;
    }

    @include vp-mobile {
      padding: 10px 40px 9px;
      font-size: 16px;
      line-height: 19px;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none; /* Кнопки спрятаны */
    }
  }
}
</style>
