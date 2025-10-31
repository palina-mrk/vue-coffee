<script setup>
import OrderCard from "./OrderCard.vue";
import CustomToggle from "../toggles/CustomToggle.vue";
import { useCartStore } from "../../stores/cart";
const cartStore = useCartStore();
import { useCatalogStore } from "../../stores/catalog";
const catalogStore = useCatalogStore();

import { reactive, ref } from "vue";

const toggleValues = reactive([
  {
    label: "Текущие заказы",
    value: "current-orders",
  },
  {
    label: "Завершенные",
    value: "finished-orders",
  },
]);
const selectedVariant = ref("current-orders");

const orderInfo = reactive({
  /* информация о заказе */
  orderID: 1,
  isPaid: true,
  isFinished: true,
  paymentTime: "01.08.2021 12:24:00",
  deliveryDate: "03.11.2021",
  /* к оплате: totalSum + deliverySum */
  /* totalSum - итоговая сумма за весь заказ
   * (товары с уже применёнными всеми скидками) */
  totalSum: 864,
  orderSale: 15,
  /* totalSum - сумма за доставку */
  deliveryPrice: 390,
});
</script>

<template>
  <div class="orders-card">
    <h2 class="orders-card__heading">Мои заказы</h2>
    <custom-toggle
      class="orders-card__toggle toggle--size-m"
      :initialValues="toggleValues"
      :toggleName="contacts"
      :selected="selectedVariant"
      @toggle-value="selectedVariant = $event"
    ></custom-toggle>

    <ul class="orders-card__list">
      <li class="orders-card__item order-wrapper">
        <div class="order-wrapper__timing">
          <span class="order-wrapper__payment-timing"
            >{{ orderInfo.paymentTime }} - оплачено</span
          >
          <span class="order-wrapper__delivery-timing"
            >{{ orderInfo.isFinished ? "Дата доставки:" : "Доставлено:" }}
            {{ orderInfo.deliveryDate }}</span
          >
        </div>

        <order-card class="order-wrapper__inner"> </order-card>

        <div class="order-wrapper__summary">
          <span class="order-wrapper__total-sum"
            >Сумма заказа: {{ orderInfo.totalSum }} ₽</span
          >
          <span class="order-wrapper__delivery-price"
            >Доставка: {{ orderInfo.deliveryPrice }} ₽</span
          >
        </div>
        
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

.orders-card {
  color: $color-raising-black;
  font-family: $ff-gilroy, sans-serif;
  padding: 60px 140px 55px;
  display: flex;
  flex-direction: column;
  background-color: $color-white;
  border-radius: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: $color-platinum;
  box-shadow: 0 0 50px 0 $color-quick-silver-25;
  width: 100%;
  gap: 30px;

  @include vp-laptop {
    padding: 40px 100px 38px;
    box-shadow: 0px 0px 35px 0px $color-quick-silver-25;
    border-radius: 14px;
    border-width: 0.7px;
    gap: 18px;
  }

  @include vp-tablet {
    padding: 20px 48px 30px;
    box-shadow: 0px 0px 20px 0px $color-quick-silver-25;
    border-radius: 8px;
    border-width: 0.6px;
    gap: 10px;
  }

  @include vp-mobile {
    padding: 40px 17px 50px;
    width: 340px;
    box-shadow: 0px 0px 50px 0px $color-quick-silver-25;
    border-radius: 10px;
    border-width: 1px;
    gap: 20px;
  }

  &__heading {
    margin: 0;
    padding: 0;
    font-family: $ff-gilroy, sans-serif;
    color: $color-raising-black;
    font-weight: 900;
    font-size: 30px;
    line-height: 38px;
    font-family: $ff-gilroy, sans-serif;

    @include vp-laptop {
      font-size: 22px;
      line-height: 28px;
    }

    @include vp-tablet {
      font-size: 16px;
      line-height: 20px;
    }

    @include vp-mobile {
      font-size: 20px;
      line-height: 25px;
    }
  }

  &__toggle {
    width: 540px;
    margin: 0 0 9px;

    @include vp-laptop {
      width: 380px;
      margin: 0 0 11px;
    }

    @include vp-tablet {
      width: 365px;
      margin: 0 0 16px;
    }

    @include vp-mobile {
      width: 100%;
      margin: 0 0 5px;
    }
  }

  &__list {
    width: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 50px;

    @include vp-laptop {
      gap: 15px;
    }

    @include vp-tablet {
      gap: 58px;
    }

    @include vp-mobile {
      gap: 40px;
    }
  }

  &__item {
    width: 100%;
    margin: 0;
    padding: 0;
  }
}

.order-wrapper {
  font-family: $ff-gilroy, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @include vp-laptop {
    gap: 13px;
  }

  @include vp-tablet {
    gap: 16px;
  }

  @include vp-mobile {
  }

  &__timing {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__payment-timing,
  &__delivery-timing {
    font-family: $ff-gilroy, sans-serif;
    color: $color-raising-black;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.05em;
  
    @include vp-laptop {
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0;
    }

    @include vp-tablet {
      font-size: 12px;
      line-height: 15px;
    }
  }

  &__delivery-timing {
    min-width: 260px;

    @include vp-laptop {
      min-width: 180px;
    }

    @include vp-tablet {
      min-width: 168px;
    }
  }

  &__inner {
    margin: 0 0 13px;

    @include vp-laptop {
      margin: 0 0 12px;
    }

    @include vp-tablet {
      margin: 0 0 5px;
    }
  }

  &__summary {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 260px;
    align-self: flex-end;
    gap: 6px;

    @include vp-laptop {
      gap: 4px;
      min-width: 180px;
    }

    @include vp-tablet {
      gap: 10px;
      min-width: 122px;
    }
  }

  &__total-sum,
  &__delivery-price {
    font-family: $ff-gilroy, sans-serif;
    color: $color-sonic-silver;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;

    @include vp-laptop {
      font-size: 12px;
      line-height: 15px;
    }

    @include vp-tablet {
      font-size: 10px;
      line-height: 9px;
    }

    @include vp-mobile {
    }
  }
}

</style>
