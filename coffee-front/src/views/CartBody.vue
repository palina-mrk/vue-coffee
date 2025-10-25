<script setup>
import BgCart from '../components/backgrounds/BgCart.vue';
import CartCard from '../components/cards/CartCard.vue';
import CustomBreadcrumbs from '../components/navigation/CustomBreadcrumbs.vue';
import DeliveryForm from '../components/subforms/DeliveryForm.vue';
import PaymentForm from '../components/subforms/PaymentForm.vue';
import PromoForm from '../components/subforms/PromoForm.vue';
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
</main>
</template>

<style lang="scss" scoped>
.cart {
  position: relative;
  width: 100%;
  padding: 202px 0 110px;
  margin: 0;
  color: $color-raising-black;
  font-family: $ff-gilroy sans-serif;
  font-weight: 500;
  overflow: hidden;
  height: 100%;

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
    margin: 0 0 21px;

    @include vp-laptop {
      margin: 0 0 10px;
    }

    @include vp-tablet {
      margin: 0 0 -2px;
    }

    @include vp-mobile {
      margin: 0 0 -2px;
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
