<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
/* path = [{route: 'catalog', title: 'Каталог товаров'}, ...]*/
</script>

<template>

    <ul 
      class="breadcrumbs__list"
      :class="{'breadcrumbs--white': isWhite}"
    >
      <li class="breadcrumbs__item">
        <router-link 
          class="breadcrumbs__link"  
          :to="{ name: 'home' }"
        >Главная</router-link>
      </li>
      <li class="breadcrumbs__item">
        <a class="breadcrumbs__link"  href="#">{{  route.meta.title }}</a>
      </li>
    </ul>

</template>

<style lang="scss" scoped>
@import "@/scss/blocks/catalogs/_hero.scss";
* {
  font-family: $ff-gilroy;
}
.breadcrumbs {
  &__list{
    display: flex;
    list-style-type: none;
    justify-content: start;
    margin: 0;
    padding: 0;
    gap: 14px;

    @include vp-laptop {
      gap: 11px;
    }

    @include vp-tablet {
      gap: 22px;
    }

    @include vp-mobile {
      gap: 12px;
    }
  }

  &__item {
    position: relative;
  }

  &__item:not(:first-child)::before {
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

  &__link {
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
}

.breadcrumbs--white {

  .breadcrumbs__item:not(:first-child)::before {
    background-color: $color-white;
  }

  &__link {
    color: $color-white;

    &:hover {
      color: $color-raising-black;
    }
  }
}

</style>
