<script setup>
import CartHeading from "./CartHeading.vue"
import CartLine from "./CartLine.vue"
import { useCartStore } from '../../stores/cart';
import { reactive } from 'vue';
const cartStore = useCartStore();

const cartItems = reactive([
    {
    title: 'Columbia Supremo',
    category: 'coffee',
    descripton: 'Мытая, натуральная, смесь',
    weight: 250,
    price: 270,
    count: 1,
    sale: 27,
    total: 243,
  },
  {
    title: 'Columbia Supremo',
    category: 'coffee',
    descripton: 'Мытая, натуральная, смесь',
    weight: 250,
    price: 270,
    count: 2,
    sale: 27,
    total: 243,
  },
  {
    title: 'Columbia Supremo',
    category: 'coffee',
    descripton: 'Мытая, натуральная, смесь',
    weight: 250,
    price: 270,
    count: 5,
    sale: 27,
    total: 243,
  }
])
</script>

<template>

  <div class="cart-card">
    <div class="cart-card__top">
      <p class="cart-card__summary">{{ cartStore.totalCountString }} в корзине</p>
      <button 
        @click="cartStore.clearCart()" 
        class="cart-card__button btn-cornsilk"
        :disabled="!(cartStore.totalCount > 0)"
      >Удалить все</button>
    </div>
    <ul class="cart-card__products-list">
      <li class="cart-card__products-item cart-card__products-item--list-headings"><CartHeading></CartHeading></li>
      <li 
        class="cart-card__products-item"
        v-for="item in cartItems" 
      >
        <CartLine :productInfo="item"></CartLine> 
      </li>
    </ul>
  </div>

</template>


<style lang="scss" scoped>
* {
  font-family: $ff-gilroy;
}
.cart-card {
  padding: 110px 140px 86px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 50px 0px $color-quick-silver-25;
  width: 1660px;
  min-height: 268px;
  border-radius: 20px;
  border: 1px solid $color-platinum;
  background-color: $color-white;
  color: $color-raising-black;
  font-family: $ff-gilroy sans-serif;

  @include vp-laptop {
    padding: 80px 100px 61px;
    box-shadow: 0px 0px 35px 0px $color-quick-silver-25;
    width: 1180px;
    min-height: 268px;
    border-radius: 14px;
    border: 0.7px solid $color-platinum;
  }

  @include vp-tablet {
    padding: 50px 34px 28px;
    box-shadow: 0px 0px 20px 0px $color-quick-silver-25;
    width: 700px;
    min-height: 137px;
    border-radius: 14px;
    border: 0.4px solid $color-platinum;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0 0 64px;
    width: 100%;

    @include vp-laptop {
      margin: 0 0 49px;
    }

    @include vp-tablet {
      flex-direction: column;
      gap: 13px;
      margin: 0 0 30px;
      align-items: start;
    }
  }

  &__summary {
    margin: 0;
    padding: 0;
    font-family: 'Gilroy';
    font-weight: 900;
    font-size: 40px;
    line-height: 50px;

    @include vp-laptop {
      font-size: 28px;
      line-height: 35px;
    }

    @include vp-tablet {
      font-size: 30px;
      line-height: 37px;
    }
  }

  &__button {
    width: 150px;
    height: 45px;

    @include vp-laptop {
      width: 106px;
      height: 32px;
    }

    @include vp-tablet {
      width: 120px;
      height: 35px;
    }
  }

  &__products-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 28px;

    @include vp-laptop {
      gap: 20px;
    }
  }

  &__products-item {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 173px;

    @include vp-laptop {
      min-height: 122px;
    }

    @include vp-tablet {
      min-height: 252px;
    }

    &--list-headings {
      min-height: unset;
      margin: 0 0 -8px;

      @include vp-laptop {
        margin: 0 0 -5px;
      }

      @include vp-tablet {
        display: none;
      }
    }

    &:nth-child(n + 3) {
      @include vp-tablet {
        position: relative;
      }

      &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 1px;
        background-color: $color-philippine-silver;
        top: -34px;
        transform: translateY(50%);
      }
    }
  }
}

.btn-cornsilk {
  margin: 0;
  padding: 10px;
  background-color: $color-cornsilk;
  border-color: $color-ucla-gold;
  border-style: solid;
  border-width: 1px;
  color: $color-ucla-gold;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  cursor: pointer;
  user-select: none;

  @include vp-laptop {
    padding: 7px;
    border-width: 0.7px;
    border-radius: 3.5px;
    font-size: 14px;
    line-height: 17px;
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
</style>