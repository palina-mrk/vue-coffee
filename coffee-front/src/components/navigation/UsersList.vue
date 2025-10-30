<script setup>
defineProps(["isSearch", "isMenu"]);
import { useCartStore } from "../../stores/cart";

const cart = useCartStore();

import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute();

const isHomePage = computed(() => route.name == "home");
</script>

<template>
  <ul
    :class="{
      'users-list': true,
      'users-list--search': isSearch,
      'users-list--menu': isMenu,
      'users-list--bg': !isHomePage,
    }"
  >
    <li class="users-list__item" v-if="!isSearch && !isMenu">
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
          <use xlink:href="../../assets/header-sprite.svg#icon-search"></use>
        </svg>
      </button>
    </li>
    <li class="users-list__item">
      <router-link
        class="users-list__link"
        :to="{ name: 'cart' }"
        @click="$emit('leave-page')"
        aria-label="Перейти в корзину"
      >
        <svg
          class="users-list__basket-icon"
          width="33"
          height="31"
          aria-hidden="true"
        >
          <use xlink:href="../../assets/header-sprite.svg#icon-basket"></use>
        </svg>
      </router-link>
      <div v-if="cart.totalCount > 0" class="users-list__basket-count">
        {{ cart.totalCount }}
      </div>
    </li>
    <li class="users-list__item">
      <router-link
        class="users-list__link"
        :to="{ name: 'personal' }"
        @click="$emit('leave-page')"
        aria-label="Войти в личный кабинет"
      >
        <svg
          class="users-list__user-icon"
          width="33"
          height="36"
          aria-hidden="true"
        >
          <use xlink:href="../../assets/header-sprite.svg#icon-user"></use>
        </svg>
      </router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.users-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  gap: 5px 49px;
  justify-content: end;
  align-items: center;

  @include vp-laptop {
    gap: 5px 37px;
  }

  @include vp-tablet {
    gap: 5px 54px;
  }

  @include vp-mobile {
    gap: 5px 25px;
  }

  &__link {
    color: $color-black;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;

    @include vp-tablet {
      color: $color-raising-black;
    }

    &:hover {
      color: $color-white;

      @include vp-tablet {
        color: $color-ucla-gold;
      }
    }
  }

  &__item {
    position: relative;
  }

  &__basket-count {
    position: absolute;
    background-color: $color-ucla-gold;
    border: 1px solid $color-cultured;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    line-height: 1;
    font-weight: 700;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    left: 100%;
    bottom: 80%;
    padding: 3px 0 0;
    transform: translate(-50%, 50%);
    pointer-events: none;

    @include vp-laptop {
      width: 22px;
      height: 22px;
      font-size: 15px;
      padding: 4px 0 0;
      bottom: 85%;
    }

    @include vp-tablet {
      color: $color-raising-black;
      width: 28px;
      height: 28px;
      font-size: 18px;
      border: none;
    }

    @include vp-mobile {
      width: 21px;
      height: 21px;
      font-size: 13px;
    }
  }

  &__search-icon {
    width: 36px;
    height: 36px;

    @include vp-laptop {
      width: 24px;
      height: 24px;
    }

    @include vp-tablet {
      width: 40px;
      height: 40px;
    }

    @include vp-mobile {
      width: 21px;
      height: 22px;
    }
  }

  &__basket-icon {
    width: 37px;
    height: 36px;

    @include vp-laptop {
      width: 26px;
      height: 24px;
    }

    @include vp-tablet {
      width: 44px;
      height: 40px;
    }

    @include vp-mobile {
      width: 24px;
      height: 19px;
    }
  }

  &__user-icon {
    width: 32px;
    height: 37px;

    @include vp-laptop {
      width: 24px;
      height: 32px;
    }

    @include vp-tablet {
      width: 38px;
      height: 46px;
    }

    @include vp-mobile {
      width: 18px;
      height: 23px;
    }
  }
}

.users-list--search {
  .users-list__link:hover {
    color: $color-ucla-gold;
  }

  .users-list__basket-count {
    border: none;
  }
}

.users-list--menu {
  @include vp-tablet {
    gap: 50px;
  }

  @include vp-mobile {
    gap: 24px;
  }

  .users-list__link:hover {
    color: $color-ucla-gold;
  }

  .users-list__basket-count {
    border: none;
  }
}

.users-list--bg {
  .users-list__link:hover {
    color: $color-ucla-gold;
  }

  .users-list__basket-count {
    border: none;
  }
}
</style>
