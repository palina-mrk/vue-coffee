<script setup>
import CustomCounter from "../inputs/CustomCounter.vue";
defineProps(["itemInfo", "sale", "salePercent", "total"]);
import { useCartStore } from "../../stores/cart";
const cartStore = useCartStore();
</script>

<template>
  <div class="product-line__top product-line__top--long">
    <button
      class="product-line__btn-remove btn-remove"
      @click="cartStore.removeFromCart(itemInfo.id, itemInfo.weight)"
      type="button"
    >
      <svg class="btn-remove__icon" width="21" height="21" aria-hidden="true">
        <use xlink:href="../../assets/cart-sprite.svg#icon-cross"></use>
      </svg>
    </button>
    <div class="product-line__details">
      <div
        class="product-line__icon-wrapper"
        :class="{
          'product-line__icon-wrapper--bordered':
            itemInfo.category == 'vending',
        }"
      >
        <picture>
          <source
            media="(max-width: 767px)"
            :srcset="`../../src/images/cart/cart-${itemInfo.category}-mobile.png`"
          />
          <source
            media="(max-width: 1348px)"
            :srcset="`../../src/images/cart/cart-${itemInfo.category}-tablet.png`"
          />
          <source
            media="(max-width: 1903px)"
            :srcset="`../../src/images/cart/cart-${itemInfo.category}-laptop.png`"
          />
          <img
            class="product-card__icon-image"
            :src="`../../src/images/cart/cart-${itemInfo.category}-desktop.png`"
            width="81"
            height="113"
            alt="Иконка товара"
          />
        </picture>
      </div>
      <div class="product-line__details-text">
        <router-link
          :to="{ name: 'catalogs.product', params: { productID: itemInfo.id } }"
          class="product-line__title"
          >{{ itemInfo.title }}</router-link
        >
        <span class="product-line__text-line">{{ itemInfo.descripton }}</span>
        <span class="product-line__text-line">{{ itemInfo.weightString }}</span>
      </div>
    </div>
    <span class="product-line__price">{{ itemInfo.price }} ₽</span>
    <custom-counter
      class="product-line__count"
      :modelValue="itemInfo.count"
      @update:modelValue="
        cartStore.setCount(itemInfo.id, itemInfo.weight, $event)
      "
    ></custom-counter>
    <span class="product-line__sale"
      >{{ sale ? `${sale} ₽ (-${salePercent}%)` : "0  ₽" }}
    </span>
    <span class="product-line__total">{{ total }} ₽</span>
  </div>

  <div class="product-line">
    <div class="product-line__top">
      <div class="product-line__details">
        <div
          class="product-line__icon-wrapper"
          :class="{
            'product-line__icon-wrapper--bordered':
              itemInfo.category == 'vending',
          }"
        >
          <picture>
            <source
              media="(max-width: 767px)"
              :srcset="`../../src/images/cart/cart-${itemInfo.category}-mobile.png`"
            />
            <source
              media="(max-width: 1348px)"
              :srcset="`../../src/images/cart/cart-${itemInfo.category}-tablet.png`"
            />
            <source
              media="(max-width: 1904px)"
              :srcset="`../../src/images/cart/cart-${itemInfo.category}-laptop.png`"
            />
            <img
              class="product-card__icon-image"
              :src="`../../src/images/cart/cart-${itemInfo.category}-desktop.png`"
              width="81"
              height="113"
              alt="Иконка товара"
            />
          </picture>
        </div>
        <div class="product-line__details-text">
          <router-link
            :to="{
              name: 'catalogs.product',
              params: { productID: itemInfo.id },
            }"
            class="product-line__title"
            >{{ itemInfo.title }}</router-link
          >
          <span class="product-line__text-line">{{ itemInfo.descripton }}</span>
          <span class="product-line__text-line">{{
            itemInfo.weightString
          }}</span>
        </div>
      </div>

      <div class="product-line__price-wrapper">
        <span class="product-line__total">{{ total }} ₽</span>
        <div class="product-line__sale-wrapper">
          <span class="product-line__price">{{
            sale ? `${itemInfo.price} ₽` : ""
          }}</span>
          <span class="product-line__sale">{{
            sale ? `(-${salePercent}%)` : ""
          }}</span>
        </div>
      </div>
    </div>

    <div class="product-line__bottom">
      <button
        class="product-line__btn-remove btn-remove"
        @click="cartStore.removeFromCart(itemInfo.id, itemInfo.weight)"
        type="button"
      >
        <svg class="btn-remove__icon" width="21" height="21" aria-hidden="true">
          <use xlink:href="../../assets/cart-sprite.svg#icon-remove"></use>
        </svg>
      </button>

      <custom-counter
        class="product-line__count"
        :modelValue="itemInfo.count"
        @update:modelValue="
          cartStore.setCount(itemInfo.id, itemInfo.weight, $event)
        "
      ></custom-counter>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-line {
  display: none;

  @include vp-tablet {
    display: flex;
    flex-direction: column;
    gap: 19px;
  }

  @include vp-mobile {
    gap: 10px;
  }

  &__top {
    width: 100%;
    height: 100%;
    padding: 30px 7px 30px 0;
    display: grid;
    gap: 10px;
    align-items: center;
    justify-items: start;
    border-radius: 20px;
    border-width: 1px;
    border-style: solid;
    border-color: $color-antiflash-white-f0;
    background-color: $color-lotion;
    color: $color-raising-black;
    font-family: $ff-gilroy, sans-serif;
    grid-template-columns: 213px 1fr 130px 215px 185px 110px;

    @include vp-laptop {
      padding: 21px 3px 21px 0;
      gap: 5px;
      border-width: 0.7px;
      grid-template-columns: 152px 1fr 95px 156px 127px 82px;
    }

    @include vp-tablet {
      padding: 17px 60px 17px 59px;
      min-height: 182px;
      display: flex;
      justify-content: space-between;
      border-width: 0.4px;
    }

    @include vp-mobile {
      padding: 13px 30px 13px 10px;
      min-height: 104px;
      display: flex;
      justify-content: space-between;
      border-width: 1px;
      border-radius: 10px;
    }

    &--long {
      @include vp-tablet {
        display: none;
      }
    }
  }

  &__btn-remove {
    position: relative;
    left: 35px;

    @include vp-laptop {
      left: 28px;
    }

    @include vp-tablet {
      left: 17px;
    }

    @include vp-mobile {
      left: 0;
    }
  }

  &__details {
    display: flex;
    gap: 29px;
    width: 100%;
    justify-content: start;
    align-items: center;

    @include vp-laptop {
      gap: 21px;
    }

    @include vp-tablet {
      gap: 10px;
      flex-grow: 1;
    }
  }

  &__icon-wrapper {
    width: 81px;
    height: 113px;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 5px;

    @include vp-laptop {
      width: 55px;
      height: 80px;
      border-radius: 4px;
    }

    @include vp-tablet {
      width: 120px;
      height: 148px;
      border-radius: 5px;
    }

    @include vp-mobile {
      width: 50px;
      height: 75px;
    }
  }

  &__icon-wrapper--bordered picture {
    height: 100%;
    width: 100%;
  }

  &__icon-wrapper--bordered img {
    height: 100%;
    width: 100%;
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

    @include vp-laptop {
      gap: 8px;
    }

    @include vp-tablet {
      gap: 10px;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    margin: 0;
    padding: 0;
    font-family: $ff-gilroy, sans-serif;
    color: $color-raising-black;
    cursor: pointer;
    position: relative;

    @include vp-laptop {
      font-size: 18px;
      line-height: 21px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 25px;
    }

    @include vp-mobile {
      font-size: 10px;
      line-height: 12px;
    }

    &:hover::after {
      content: "";
      width: 100%;
      height: 4px;
      border-radius: 2px;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: $color-ucla-gold;

      @include vp-laptop {
        height: 2px;
        border-radius: 1px;
      }

      @include vp-mobile {
        height: 1px;
      }
    }
  }

  &__text-line {
    font-weight: 500px;
    font-size: 18px;
    line-height: 21px;
    font-family: $ff-gilroy, sans-serif;

    @include vp-laptop {
      font-size: 12px;
      line-height: 14px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 24px;
    }

    @include vp-mobile {
      font-size: 10px;
      line-height: 12px;
    }
  }

  &__count {
    width: 170px;
    height: 50px;
    font-family: $ff-gilroy, sans-serif;

    @include vp-laptop {
      width: 109px;
      height: 35px;
    }

    @include vp-tablet {
      width: 220px;
      height: 50px;
    }

    @include vp-mobile {
      width: 160px;
      height: 47px;
    }
  }

  &__price,
  &__sale,
  &__total {
    font-weight: 500;
    font-size: 25px;
    line-height: 29px;
    font-family: $ff-gilroy, sans-serif;

    @include vp-laptop {
      font-size: 18px;
      line-height: 20px;
    }
  }

  /* делаем правый flex для цен в tablet*/
  &__price-wrapper {
    @include vp-tablet {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: right;
      gap: 7px;
      width: 200px;
      height: 94px;
    }

    @include vp-mobile {
      width: 110px;
      gap: 5px;
      height: 60px;
    }
  }

  &__total {
    font-family: $ff-gilroy, sans-serif;

    @include vp-tablet {
      font-size: 20px;
      line-height: 21px;
      text-align: right;
      margin: 0 8px 0 auto;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 16px;
      margin: 0;
    }
  }

  &__sale-wrapper {
    @include vp-tablet {
      display: flex;
      justify-content: end;
      gap: 5px;
      flex-wrap: wrap;
    }
  }

  &__price,
  &__sale {
    @include vp-tablet {
      font-size: 20px;
      line-height: 24px;
      font-family: $ff-gilroy, sans-serif;
      color: $color-light-silver;
      text-align: right;
      position: relative;
      width: fit-content;
      align-self: flex-end;

      @include vp-mobile {
        font-size: 12px;
        line-height: 14px;
      }
    }
  }

  &__price::before {
    @include vp-tablet {
      position: absolute;
      background-color: $color-light-silver;
      content: "";
      width: 100%;
      height: 1.3px;
      left: 0;
      top: 9px;

      @include vp-mobile {
        top: 7px;
        height: 1px;
      }
    }
  }

  &__bottom {
    @include vp-tablet {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0;
      align-items: center;
    }
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

  @include vp-laptop {
    padding: 15px;
  }

  @include vp-tablet {
    padding: 12px;
  }

  @include vp-mobile {
    padding: 9px;
    position: relative;
    left: -9px;
  }

  &:hover {
    color: $color-raising-black;
  }

  &__icon {
    width: 21px;
    height: 21px;

    @include vp-laptop {
      width: 15px;
      height: 15px;
    }

    @include vp-tablet {
      width: 25px;
      height: 27px;
    }

    @include vp-mobile {
      width: 19px;
      height: 20px;
    }
  }
}
</style>
