<script setup>
defineProps(['isSearch'])
import { useCartStore } from '../../stores/cart';
import { useCoffeeStore } from "../../stores/coffee";
import {ref, computed} from 'vue'

const cart = useCartStore();
const x = ref("ddd")
</script>

<template>
  <ul class="users-list">
    <li class="users-list__item" v-if="!isSearch">
      <button
        class="users-list__link"
        aria-label="Открыть поле поиска"
        @click="$emit('set-search')"
      >
        <svg
          class="users-list__search-icon"
          width="36"
          height="31"
          aria-hidden="true"
        >
          <use
            xlink:href="../../assets/header-sprite.svg#icon-search"
          ></use>
        </svg>
      </button>
    </li>
    <li 
      class="users-list__item"
      >
      <a
        class="users-list__link"
        href="#"
        aria-label="Перейти в корзину"
      >
        <svg
          class="users-list__basket-icon"
          width="33"
          height="31"
          aria-hidden="true"
        >
          <use
            xlink:href="../../assets/header-sprite.svg#icon-basket"
          ></use>
        </svg>
      </a>
      <div
        v-if="cart.totalCount > 0"
        class="users-list__basket-count"
      >{{ cart.totalCount }}</div>
    </li>
    <li class="users-list__item">
      <a
        class="users-list__link"
        href="#"
        aria-label="Войти в личный кабинет"
      >
        <svg
          class="users-list__user-icon"
          width="33"
          height="36"
          aria-hidden="true"
        >
          <use
            xlink:href="../../assets/header-sprite.svg#icon-user"
          ></use>
        </svg>
      </a>
    </li>
  </ul>

</template>

<style lang="scss" scoped>
@import "@/scss/blocks/_users-list.scss";
.users-list__item {
  position: relative;
}

.users-list__basket-count {
  position: absolute;
  color: $color-black;
  background-color: $color-ucla-gold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  left: 100%;
  bottom: 80%;
  transform: translate(-50%, 50%);
  pointer-events: none;

  @include vp-laptop {
    width: 21px;
    height: 21px;
    font-size: 13px;
    line-height: 17px;
  }

  @include vp-mobile {
    width: 21px;
    height: 21px;
    font-size: 13px;
    line-height: 17px;
  }
}
</style>