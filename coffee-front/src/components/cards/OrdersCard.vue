<script setup>
import OrderCard from "./OrderCard.vue";
import CustomToggle from "../toggles/CustomToggle.vue";
import { useOrdersStore } from "../../stores/orders";
const ordersStore = useOrdersStore();

import { reactive, ref } from "vue";

const toggleValues = reactive([
  {
    label: "Текущие заказы",
    value: "current",
  },
  {
    label: "Завершенные",
    value: "finished",
  },
]);
const selectedVariant = ref("current");

function clearFinished() {
  ordersStore.clearFinished();
  sccrollTo(0, 0);
}
</script>

<template>
  <div class="orders-card">
    <h2 class="orders-card__heading">Мои заказы</h2>
    <custom-toggle
      class="orders-card__toggle toggle--size-m"
      :initialValues="toggleValues"
      :toggleName="'personal'"
      :selected="selectedVariant"
      @toggle-value="selectedVariant = $event"
    ></custom-toggle>

    <ul class="orders-card__list">
      <li
        v-for="orderInfo in ordersStore.orderItems"
        :key="orderInfo.id"
        v-show="orderInfo.isFinished == (selectedVariant == 'finished')"
        class="orders-card__item order-wrapper"
      >
        <div class="order-wrapper__timing">
          <span class="order-wrapper__payment-timing">{{
            orderInfo.isPaid
              ? `${orderInfo.paymentTime} - оплачено`
              : `${orderInfo.totalSum + orderInfo.deliveryPrice} ₽ - к оплате`
          }}</span>
          <span class="order-wrapper__delivery-timing"
            >{{
              !orderInfo.isPaid
                ? `Доставка: ${orderInfo.deliveryWay}, ${orderInfo.deliveryDuring} дн.`
                : !orderInfo.isFinished
                  ? `Дата доставки: ${orderInfo.deliveryDate}`
                  : `Доставлено: ${orderInfo.deliveryDate}`
            }}
          </span>
        </div>

        <order-card
          class="order-wrapper__inner"
          :order-lines="orderInfo.productLines"
          :order-sale="orderInfo.globalSale"
        >
        </order-card>

        <div class="order-wrapper__summary">
          <span class="order-wrapper__total-sum"
            >Сумма заказа: {{ orderInfo.totalSum }} ₽</span
          >
          <span class="order-wrapper__delivery-price"
            >Доставка: {{ orderInfo.deliveryPrice }} ₽</span
          >
        </div>

        <ul class="order-wrapper__summary-mobile">
          <li class="order-wrapper__summary-item">
            <span>Итого:</span>
            <span>{{ orderInfo.totalSum + orderInfo.deliveryPrice }} ₽</span>
          </li>
          <li class="order-wrapper__summary-item">
            <span class="order-wrapper__summary-text">Подытог:</span>
            <span class="order-wrapper__summary-number"
              >{{ orderInfo.totalSum }} ₽</span
            >
          </li>
          <li class="order-wrapper__summary-item">
            <span class="order-wrapper__summary-text">Скидка:</span>
            <span class="order-wrapper__summary-number-wrapper">
              <span
                class="order-wrapper__summary-number order-wrapper__summary-number--first"
                >{{
                  orderInfo.totalSale
                    ? `${orderInfo.totalSum + orderInfo.totalSale} ₽`
                    : ""
                }}</span
              >
              <span class="order-wrapper__summary-number">{{
                orderInfo.totalSale
                  ? `(-${Number(((orderInfo.totalSale * 100) / (orderInfo.totalSum + orderInfo.totalSale)).toFixed(0))}%)`
                  : "0 ₽"
              }}</span>
            </span>
          </li>
          <li class="order-wrapper__summary-item">
            <span class="order-wrapper__summary-text">Доставка:</span>
            <span class="order-wrapper__summary-number"
              >{{ orderInfo.deliveryPrice }} ₽</span
            >
          </li>
        </ul>

        <div
          class="order-wrapper__btn"
          v-if="ordersStore.isLastOfSaved(selectedVariant, orderInfo.orderID)"
        >
          <button
            @click="clearFinished"
            class="order-wrapper__clear-button btn-cornsilk"
            v-show="selectedVariant == 'finished'"
            :disabled="!(ordersStore.finishedCount > 0)"
          >
            Удалить завершённые
          </button>
          <!--button
            @click="ordersStore.clearAll()"
            class="order-wrapper__clear-button btn-cornsilk"
            v-show="selectedVariant == 'current'"
            :disabled="!(ordersStore.orderItems.length > 0)">
            Удалить все
          </button-->
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
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
    padding: 20px 48px 28px;
    box-shadow: 0px 0px 20px 0px $color-quick-silver-25;
    border-radius: 8px;
    border-width: 0.6px;
    gap: 10px;
  }

  @include vp-mobile {
    padding: 0;
    box-shadow: none;
    background-color: $color-white;
    gap: 15px;
    border: none;
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
      width: 100%;
      max-width: $max-width-mobile;
      margin: 0 auto 20px;
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
      margin: 0 0 17px;
    }

    @include vp-mobile {
      width: 100%;
      margin: 0 auto;
      max-width: $max-width-mobile;
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
      gap: 0;
    }
  }

  &__item {
    width: 100%;
    margin: 0;
    padding: 0;

    @include vp-mobile {
      padding: 25px 17px 30px;
      margin: 0 auto;
    }
  }

  &__item:nth-child(2n) {
    @include vp-mobile {
      border-radius: 10px;
      border-width: 0.4px;
      border-style: solid;
      border-color: $color-platinum;
      box-shadow: 0px 0px 20px 0px $color-quick-silver-25;
    }
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
    gap: 5px;
  }

  @include vp-mobile {
    gap: 20px;
  }

  &__timing {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include vp-mobile {
      flex-direction: column;
      gap: 16px;
      align-items: start;
      margin: 0 0 3px;
    }
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

    @include vp-mobile {
      font-size: 12px;
      line-height: 14px;
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

    @include vp-mobile {
      min-width: unset;
      font-weight: 700;
      line-height: 15px;
    }
  }

  &__inner {
    margin: 0 0 13px;

    @include vp-laptop {
      margin: 0 0 12px;
    }

    @include vp-tablet {
      margin: 0 0 13px;
    }

    @include vp-mobile {
      margin: 0;
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
      gap: 7px;
      min-width: 122px;
    }

    @include vp-mobile {
      display: none;
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
      line-height: 12px;
    }
  }

  &__summary-mobile {
    display: none;

    @include vp-mobile {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 0 auto;
      padding: 0;
      list-style-type: none;
      gap: 10px;
      width: 100%;
      max-width: $max-width-mobile;
    }
  }

  &__summary-item {
    @include vp-mobile {
      display: flex;
      margin: 0;
      padding: 0;
      justify-content: space-between;
    }
  }

  &__summary-item:first-child {
    @include vp-mobile {
      margin: 0 0 10px;
      color: $color-raising-black;
      font-family: $ff-gilroy, sans-serif;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
    }
  }

  &__summary-text,
  &__summary-number {
    @include vp-mobile {
      font-family: $ff-gilroy, sans-serif;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
    }
  }

  &__summary-text {
    @include vp-mobile {
      color: $color-raising-black;
    }
  }

  &__summary-number-wrapper {
    display: flex;
  }

  &__summary-number {
    @include vp-mobile {
      color: $color-light-silver;
      padding: 0 0 0 3px;
    }
  }

  &__summary-number--first {
    @include vp-mobile {
      padding: 0;
      position: relative;
    }

    &::before {
      @include vp-mobile {
        position: absolute;
        content: "";
        width: 100%;
        height: 1px;
        top: 49%;
        left: 0;
        background-color: $color-light-silver;
      }
    }
  }

  &__btn {
    display: flex;
    justify-content: end;
    width: 100%;

    @include vp-mobile {
      max-width: $max-width-mobile;
      margin: 0 auto;
    }
  }

  &__clear-button {
    max-width: fit-content;
    align-self: right;
    max-width: fit-content;
  }
}
</style>
