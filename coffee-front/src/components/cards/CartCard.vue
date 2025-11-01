<script setup>
import CartHeading from "./CartHeading.vue";
import ProductLine from "../cards/ProductLine.vue";
import { useCartStore } from "../../stores/cart";
const cartStore = useCartStore();
import { useCatalogStore } from "../../stores/catalog";
const catalogStore = useCatalogStore();
</script>

<template>
  <div class="cart-card">
    <div class="cart-card__top">
      <p class="cart-card__summary">
        {{ cartStore.totalCountString }} в корзине
      </p>
      <button
        @click="cartStore.clearCart()"
        class="cart-card__button btn-cornsilk"
        :disabled="!(cartStore.totalCount > 0)"
      >
        Удалить все
      </button>
    </div>
    <ul v-if="catalogStore.isLoaded" class="cart-card__products-list">
      <li class="cart-card__products-item" v-show="cartStore.totalCount > 0">
        <cart-heading :sale="cartStore.globalSale"></cart-heading>
      </li>
      <li
        class="cart-card__products-item"
        v-for="item in cartStore.cartItems"
        :key="item.id"
      >
        <product-line
          :itemInfo="item"
          :sale="item.sale"
          :total="item.total"
          :salePercent="item.salePercent"
        ></product-line>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.cart-card {
  padding: 110px 140px 86px;
  display: flex;
  flex-direction: column;
  background-color: $color-white;
  border-radius: 20px;
  border-width: 1px;
  border-color: $color-platinum;
  box-shadow: 0 0 50px 0 $color-quick-silver-25;
  width: 100%;
  min-height: 268px;
  border-radius: 20px;
  border-width: 1px;
  border-style: solid;
  color: $color-raising-black;
  font-family: $ff-gilroy, sans-serif;

  @include vp-laptop {
    padding: 80px 100px 61px;
    box-shadow: 0px 0px 35px 0px $color-quick-silver-25;
    min-height: 268px;
    border-radius: 14px;
    border-width: 0.7px;
  }

  @include vp-tablet {
    padding: 47px 0;
    box-shadow: 0px 0px 20px 0px $color-quick-silver-25;
    min-height: 137px;
    border-radius: 14px;
    border-width: 0.4px;
  }

  @include vp-mobile {
    padding: 40px 0 50px;
    box-shadow: 0px 0px 50px 0px $color-quick-silver-25;
    min-height: 115px;
    border-radius: 10px;
    border-width: 1px;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0 0 60px;
    width: 100%;

    @include vp-laptop {
      margin: 0 0 45px;
    }

    @include vp-tablet {
      flex-direction: column;
      gap: 13px;
      margin: 0 auto 30px;
      align-items: start;
      width: $max-width-tablet;
    }

    @include vp-mobile {
      gap: 18px;
      margin: 0 auto 20px;
      width: $max-width-mobile;
    }
  }

  &__summary {
    margin: 0;
    padding: 0;
    font-family: $ff-gilroy, sans-serif;
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

    @include vp-mobile {
      font-size: 20px;
      line-height: 25px;
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

    @include vp-mobile {
      width: 124px;
      height: 30px;
    }
  }

  &__products-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 25px;

    @include vp-laptop {
      gap: 15px;
    }

    @include vp-tablet {
      gap: 58px;
      margin: 0 auto;
      width: 100%;
      max-width: $max-width-tablet;
    }

    @include vp-mobile {
      gap: 40px;
      max-width: $max-width-mobile;
    }
  }

  /* уменьшаем gap после названий таблицы */
  /* убираем названия полей для tablet */
  &__products-item:first-child {
    margin: 0 0 -8px;

    @include vp-laptop {
      margin: 0 0 -5px;
    }

    @include vp-tablet {
      margin: 0;
      display: none;
    }
  }

  /* устанавливаем высоту для карточек товаров */
  &__products-item:not(:first-child) {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 173px;

    @include vp-laptop {
      min-height: 122px;
    }

    @include vp-tablet {
      min-height: unset;
    }
  }

  /* рисуем черту между элементами списка для tablet */
  &__products-item:not(:last-child) {
    @include vp-tablet {
      position: relative;
    }

    &::after {
      @include vp-tablet {
        position: absolute;
        content: "";
        width: 100%;
        height: 2px;
        background-color: $color-philippine-silver;
        bottom: -28px;
      }

      @include vp-mobile {
        bottom: -21px;
        height: 1px;
      }
    }
  }
}

.btn-cornsilk {
  font-family: $ff-gilroy, sans-serif;
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

  @include vp-tablet {
    border-radius: 5px;
    border-width: 1px;
    padding: 8px;
    font-size: 16px;
    line-height: 19px;
  }

  @include vp-mobile {
    border-radius: 5px;
    border-width: 1px;
    padding: 6px;
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
