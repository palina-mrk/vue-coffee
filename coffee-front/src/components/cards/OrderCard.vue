<script setup>
import { ref, reactive, computed } from "vue";
import { useCartStore } from "../../stores/cart";
const cartStore = useCartStore();

const orderSale = ref(15);

/** информация о каждом товаре */
const orderLines = reactive([
  {
    id: 15,
    title: "Энергия пшеницы",
    weightString: "100 г.",
    count: 2,
    price: 240,
    sale: 0,
    total: 240,
  },
  {
    id: 29,
    title: "Байкальская мелодия",
    weightString: "200 г.",
    count: 1,
    price: 530,
    sale: 0,
    total: 530,
  },
  {
    id: 35,
    title: "Brazil Santos",
    weightString: "250 г.",
    count: 2,
    price: 520,
    sale: 120,
    total: 400,
  },
]);
</script>

<template>
  <div class="order-card">
    <ul class="order-card__list">
      <li class="order-card__item">
        <span class="order-card__heading-text">Товаров:</span>
        <span class="order-card__heading-text">Цена:</span>
        <span class="order-card__heading-text">Скидка{{ orderSale ?  `(${orderSale}%)` : '' }}:</span>
        <span class="order-card__heading-text">Итого:</span>
      </li>
      <li class="order-card__item"
        v-for="line in orderLines"
      >
        <span class="order-card__info-text">{{ line.count }} x {{ line.title }}, {{ line.weightString }}</span>
        <span class="order-card__info-text">{{ line.price }} ₽</span>
        <span class="order-card__info-text">{{ line.sale }} ₽</span>
        <span class="order-card__info-text">{{ line.total }} ₽</span>
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
    padding: 19px 5px 29px 59px;
    border-radius: 8px;
    border-width: 0.4px;
  }

  @include vp-mobile {
    padding: 13px 30px 13px 10px;
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
      grid-template-columns: 1fr 129px 125px 117px;
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
      line-height: 9px;
    }

    @include vp-mobile {
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
      line-height: 9px;
    }

    @include vp-mobile {
    }
  }
}

</style>
