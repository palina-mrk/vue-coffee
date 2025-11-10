<script setup>
defineProps(["orderLines", "orderSale"]);
</script>

<template>
  <div class="order-card">
    <ul class="order-card__list" v-if="orderLines">
      <li class="order-card__item">
        <span class="order-card__heading-text">Товары:</span>
        <span class="order-card__heading-text">Цена:</span>
        <span class="order-card__heading-text"
          >Скидка{{ orderSale ? `(${orderSale}%)` : "" }}:</span
        >
        <span class="order-card__heading-text">Итого:</span>
      </li>
      <li
        class="order-card__item"
        v-for="line in orderLines"
        :key="line.orderId"
      >
        <span class="order-card__info-string">
          <span class="order-card__info-text">{{ line.count }}</span>
          <span class="order-card__info-text">x</span>
          <router-link
            :to="{ name: 'catalogs.product', params: { productID: line.id } }"
            class="order-card__info-text order-card__info-text--link"
            >{{ line.title }},</router-link
          >
          <span class="order-card__info-text">{{ line.weightString }}</span>
        </span>
        <!--span class="order-card__info-text">{{ line.count }} x {{ line.title }}, {{ line.weightString }}</span-->
        <span class="order-card__info-text">{{ line.initialPrice }} ₽</span>
        <span class="order-card__info-text">{{ line.sale }} ₽</span>
        <span class="order-card__info-text">{{ line.total }} ₽</span>
      </li>
      <li class="order-card__item-mobile" v-for="line in orderLines">
        <div class="order-card__icon">
          <img
            class="order-card__icon-image"
            :src="`../../src/images/personal/icon-${line.category}-mobile.png`"
            width="41"
            height="75"
            alt="Иконка товара"
          />
        </div>
        <div class="order-card__text">
          <router-link
            :to="{ name: 'catalogs.product', params: { productID: line.id } }"
            class="order-card__product-title"
            >{{ line.title }}</router-link
          >
          <!--h3 class="order-card__product-title">{{ line.title }}</h3-->
          <span class="order-card__product-description">{{
            line.shortDescription
          }}</span>
          <span class="order-card__product-weight"
            >{{ line.count }} x {{ line.weightString }}</span
          >
        </div>

        <div class="order-card__prices">
          <span class="order-card__total-price">{{ line.total }} ₽</span>
          <span class="order-card__initial-price">{{
            line.sale ? `${line.initialPrice} ₽` : ""
          }}</span>
          <span class="order-card__sale-percent">{{
            line.sale ? `(-${line.salePercent}%)` : ""
          }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.order-card {
  width: 100%;
  height: 100%;
  padding: 30px 11px 37px 59px;
  border-radius: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: $color-antiflash-white-f0;
  background-color: $color-lotion;

  @include vp-laptop {
    padding: 21px 5px 22px 42px;
    border-radius: 14px;
    border-width: 0.7px;
  }

  @include vp-tablet {
    padding: 19px 3px 15px 28px;
    border-radius: 8px;
    border-width: 0.4px;
  }

  @include vp-mobile {
    padding: 13px 20px 16px 10px;
    border-width: 1px;
    border-radius: 10px;
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @include vp-laptop {
      gap: 7px;
    }

    @include vp-tablet {
      gap: 5px;
    }

    @include vp-mobile {
      gap: 30px;
    }
  }

  &__item {
    display: grid;
    align-items: center;
    justify-items: start;
    grid-template-columns: 1fr 280px 280px 245px;
    padding: 0;
    margin: 0;
    width: 100%;

    @include vp-laptop {
      grid-template-columns: 1fr 200px 200px 172px;
    }

    @include vp-tablet {
      grid-template-columns: 1fr 130px 125px 117px;
    }

    @include vp-mobile {
      display: none;
    }
  }

  &__item:first-child {
    margin: 0 0 18px;

    @include vp-laptop {
      margin: 0 0 13px;
    }
    @include vp-tablet {
      margin: 0 0 7px;
    }
  }

  &__heading-text {
    font-family: $ff-gilroy, sans-serif;
    color: $color-raising-black;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    @include vp-laptop {
      font-size: 14px;
      line-height: 17px;
    }

    @include vp-tablet {
      font-size: 10px;
      line-height: 12px;
    }
  }

  &__info-string {
    display: flex;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 2px;

    @include vp-laptop {
      gap: 1.5px;
    }
  }

  &__info-text {
    font-weight: 500;
    font-family: $ff-gilroy, sans-serif;
    color: $color-sonic-silver;
    font-size: 20px;
    line-height: 24px;

    @include vp-laptop {
      font-size: 14px;
      line-height: 17px;
    }

    @include vp-tablet {
      font-size: 10px;
      line-height: 12px;
    }
  }

  &__info-text--link {
    cursor: pointer;
    position: relative;

    &:hover::after {
      content: "";
      width: 100%;
      height: 1.5px;
      border-radius: 2px;
      position: absolute;
      bottom: 3px;
      left: 0;
      background-color: $color-ucla-gold;

      @include vp-laptop {
        bottom: 2px;
      }

      @include vp-tablet {
        bottom: 1px;
      }
    }
  }

  &__item-mobile {
    display: none;

    @include vp-mobile {
      display: grid;
      width: 100%;
      grid-template-columns: 40px 1fr auto;
      align-items: center;
      position: relative;
    }
  }

  &__item-mobile:not(:last-child)::after {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: -16px;
    left: 0;
    right: -10px;
    background-color: $color-philippine-silver;
  }

  &__icon-image {
    @include vp-mobile {
      width: 30px;
      border-radius: 5px;
    }
  }

  &__text {
    @include vp-mobile {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;
      gap: 2px;
    }
  }

  &__product-title {
    @include vp-mobile {
      font-family: $ff-gilroy, sans-serif;
      color: $color-raising-black;
      font-weight: 700;
      font-size: 10px;
      line-height: 12px;
      margin: 0;
      padding: 0;
      cursor: pointer;
      position: relative;
    }

    &:hover::after {
      @include vp-mobile {
        content: "";
        width: 100%;
        height: 2px;
        border-radius: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: $color-ucla-gold;
      }
    }
  }

  &__product-description,
  &__product-weight {
    @include vp-mobile {
      font-family: $ff-gilroy, sans-serif;
      color: $color-black;
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;
    }
  }

  &__prices {
    @include vp-mobile {
      display: flex;
      justify-content: end;
      align-items: start;
      flex-wrap: wrap;
      gap: 3px;
      min-height: 40px;
    }
  }

  &__total-price {
    @include vp-mobile {
      font-family: $ff-gilroy, sans-serif;
      color: $color-raising-black;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      width: 100%;
      text-align: right;
    }
  }

  &__initial-price,
  &__sale-percent {
    @include vp-mobile {
      font-family: $ff-gilroy, sans-serif;
      color: $color-light-silver;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      position: relative;
    }
  }

  &__initial-price::before {
    @include vp-mobile {
      content: "";
      background-color: $color-light-silver;
      position: absolute;
      height: 1px;
      width: 100%;
      left: 0;
      bottom: 7px;
    }
  }
}
</style>
