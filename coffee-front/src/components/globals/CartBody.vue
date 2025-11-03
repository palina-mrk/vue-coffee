<script setup>
import BgCart from "../backgrounds/BgCart.vue";
import CartCard from "../cards/CartCard.vue";
import CustomBreadcrumbs from "../navigation/CustomBreadcrumbs.vue";
import DeliveryForm from "../forms/DeliveryForm.vue";
import PaymentForm from "../forms/PaymentForm.vue";
import PromoForm from "../forms/PromoForm.vue";
import CartInfo from "../cards/CartInfo.vue";

import { useCartStore } from "../../stores/cart";
import {ref} from 'vue'
const cartStore = useCartStore();
const showInfo = ref(false);

function goToPayForm() {
  if(!cartStore.totalCount){
    showInfo.value = true;
    return;
  }
  else
    window.scrollTo({
      top: document.getElementById('payment-form').getBoundingClientRect().top + window.pageYOffset - 160,
      behavior: 'smooth'
    });

}
</script>

<template>
  <main>
    <section class="cart">
      <bg-cart></bg-cart>

      <div class="container">
        <div class="cart__wrapper">
          <custom-breadcrumbs
            class="cart__breadcrumbs-list"
          ></custom-breadcrumbs>
          <h1 class="visually-hidden">Корзина</h1>
          <div class="cart__top-forms">
            <cart-card class="cart__form"></cart-card>
            <delivery-form class="cart__form"
            @is-filled="goToPayForm"
            ></delivery-form>
          </div>
          <div class="cart__bottom-forms">
            <promo-form class="cart__promo-form"></promo-form>
            <payment-form 
            class="cart__payment-form cart__form"
            id="payment-form"></payment-form>
          </div>
        </div>
      </div>
      <cart-info 
      class="cart__info-card"
      :isEmpty="!cartStore.totalCount"
      v-show="showInfo"
      @close-form="showInfo = false"
      ></cart-info>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.cart {
  position: relative;
  width: 100%;
  padding: 202px 0 110px;
  margin: 0;
  font-family: $ff-gilroy, sans-serif;
  font-weight: 500;
  overflow: hidden;
  height: 100%;

  @include vp-laptop {
    padding: 140px 0 110px;
  }

  @include vp-tablet {
    padding: 173px 0 0;
  }

  @include vp-mobile {
    padding: 95px 0 0;
  }

  &__breadcrumbs-list {
    margin: 0 0 50px;

    @include vp-laptop {
      margin: 0 0 35px;
    }

    @include vp-tablet {
      margin: 0 0 19px;
    }

    @include vp-mobile {
      margin: 0 0 28px;
    }
  }

  &__top-forms {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin: 0 0 25px;

    @include vp-laptop {
      gap: 20px;
      margin: 0 0 20px;
    }

    @include vp-tablet {
      gap: 20px;
      margin: 0 0 30px;
      position: relative;
      min-width: calc($max-width-tablet + 68px);
      left: -35px;
    }

    @include vp-mobile {
      gap: 30px;
      margin: 0 0 20px;
      min-width: calc($max-width-mobile + 36px);
      left: -19px;
    }
  }

  &__bottom-forms {
    width: 100%;
    display: flex;
    gap: 20px;

    @include vp-tablet {
      flex-direction: column;
      gap: 90px;
      position: relative;
      width: calc($max-width-tablet + 68px);
      left: -34px;
    }

    @include vp-mobile {
      gap: 20px;
      width: calc($max-width-mobile + 36px);
      left: -18px;
    }
  }

  &__info-card {
    position: fixed;
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;

    @include vp-tablet {
      top: 80px;
    }

    @include vp-mobile {
      top: 20px;
    }

    &::before {
      content: "";
      position: absolute;
      width: 100vw;
      height: 100vh;
      left: 50%;
      transform: translateX(-50%);
      top: -250px;
      background-color: $color-quick-silver-25;
      z-index: -1;

      @include vp-tablet {
        top: -80px;
      }

      @include vp-mobile {
        top: -20px;
      }
    }
  }
}
</style>
