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
        <div class="cart__top-forms">
          <cart-card
            class="cart__form"></cart-card>
          <delivery-form
            class="cart__form"></delivery-form>
        </div>
        <div class="cart__bottom-forms">
          <promo-form
          class="cart__promo-form"></promo-form>
          <payment-form
          class="cart__payment-form cart__form"></payment-form>
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
    }

    @include vp-mobile {
      gap: 30px;
      margin: 0 0 20px;
    }
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
      margin: 0 0 30px;
    }
  }

  &__bottom-forms {
    width: 100%;
    display: flex;
    gap: 20px;

    @include vp-tablet {
      flex-direction: column;
      gap: 90px;
    }

    @include vp-mobile {
      gap: 20px;
    }
  }
}

</style>
