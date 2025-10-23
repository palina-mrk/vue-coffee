<script setup>
import BgCart from '../components/backgrounds/BgCart.vue';
import CartCard from '../components/cards/CartCard.vue';
import DeliveryForm from '../components/subforms/DeliveryForm.vue';
import PaymentForm from '../components/subforms/PaymentForm.vue';
import PromoForm from '../components/subforms/PromoForm.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>

  <section class="cart">
    <bg-cart></bg-cart>
    
    <div class="container">
      <div class="cart__wrapper">
        <ul class="cart__breadcrumbs-list">
          <li class="cart__breadcrumbs-item">
            <router-link 
              class="cart__breadcrumbs-link"  
              :to="{ name: 'home' }"
            >Главная</router-link>
          </li>
          <li class="cart__breadcrumbs-item">
            <a class="cart__breadcrumbs-link"  href="#">{{  route.meta.title }}</a>
          </li>
        </ul>

        <h1 class="visually-hidden">Корзина</h1>
        <div class="cart__forms-block">
          <cart-card
            class="cart__form"></cart-card>
          <delivery-form
            class="cart__form"></delivery-form>
        
          <div class="cart__bottom-forms">
            <promo-form
              class="cart__form"></promo-form>
            <payment-form
              class="cart__form"></payment-form>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style lang="scss" scoped>
@import "@/scss/blocks/catalogs/_hero.scss";
* {
  font-family: $ff-gilroy;
}

.cart {
  position: relative;
  width: 100%;
  padding: 202px 0 110px;
  margin: 0;
  color: $color-raising-black;
  font-family: $ff-gilroy sans-serif;
  font-weight: 500;
  overflow: hidden;
  box-sizing: border-box;

  @include vp-laptop {
    padding: 140px 0 0;
  }

  @include vp-tablet {
    padding: 173px 0 0;
  }

  @include vp-mobile {
    padding: 95px 0 0;
  }

  &__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;

    @include vp-tablet {
      gap: 20px;
    }

    @include vp-mobile {
      gap: 30px;
    }
  }

  &__breadcrumbs-list {
    display: flex;
    list-style-type: none;
    justify-content: start;
    margin: 0 0 21px;
    padding: 0;
    gap: 14px;

    @include vp-laptop {
      gap: 11px;
      margin: 0 0 10px;
    }

    @include vp-tablet {
      gap: 22px;
      margin: 0 0 -2px;
    }

    @include vp-mobile {
      gap: 12px;
      margin: 0 0 -2px;
    }
  }

  &__breadcrumbs-item {
    position: relative;
  }

  &__breadcrumbs-item:nth-child(n + 2)::before {
    content: "";
    background-color: $color-raising-black;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    position: absolute;
    left: -7px;
    top: 50%;
    transform: translate(-50%, -50%);

    @include vp-laptop {
      width: 3px;
      height: 3px;
      left: -5px;
    }

    @include vp-tablet {
      width: 4px;
      height: 4px;
      left: -11px;
    }

    @include vp-mobile {
      width: 2px;
      height: 2px;
      left: -5px;
      top: calc(50% + 2px);
    }
  }

  &__breadcrumbs-link {
    color: $color-raising-black;
    font-size: 18px;
    line-height: 21px;
    text-decoration: none;

    @include vp-laptop {
      font-size: 12px;
      line-height: 14px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 25px;
    }

    @include vp-mobile {
      font-size: 10px;
      line-height: 12px;
    }

    &:hover {
      border-bottom: 1px solid $color-ucla-gold;
    }
  }

  &__forms-block {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__forms-bottom {
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }
}

</style>
