<script setup>
import BgCatalog from '../components/backgrounds/BgCatalog.vue';
import FilterCoffee from '../components/forms/FilterCoffee.vue';
import FilterTea from '../components/forms/FilterTea.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>

  <section class="hero">
    <bg-catalog></bg-catalog>
    
    <div class="container">
      <div class="hero__wrapper">
        <ul class="hero__breadcrumbs-list">
          <li class="hero__breadcrumbs-item">
            <router-link 
              class="hero__breadcrumbs-link"  
              :to="{ name: 'home' }"
            >Главная</router-link>
          </li>
          <li class="hero__breadcrumbs-item">
            <router-link class="hero__breadcrumbs-link"  
              :to="{ name: 'catalog-coffee' }"
            >Каталог товаров</router-link>
          </li>
          <li class="hero__breadcrumbs-item">
            <a class="hero__breadcrumbs-link"  href="#">{{  route.meta.title }}</a>
          </li>
        </ul>

        <h2 class="hero__title">{{ route.meta.title }}</h2>
        
        <filter-coffee
          v-if="route.name == 'catalog-coffee'" 
          class="hero__form filter-form"></filter-coffee>
        <filter-tea
          v-else-if="route.name == 'catalog-tea'" 
          class="hero__form"></filter-tea>
          
      </div>
    </div>
  </section>

</template>

<style lang="scss" scoped>
@import "@/scss/blocks/catalogs/_hero.scss";
* {
  font-family: $ff-gilroy;
}

.hero {
  position: relative;
  width: 100%;
  padding: 200px 0 0;
  margin: 0;
  color: $color-white;
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
    gap: 135px;

    @include vp-laptop {
      gap: 100px;
    }

    @include vp-tablet {
      gap: 73px;
    }

    @include vp-mobile {
      gap: 20px;
    }
  }

  &__breadcrumbs-list {
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

  &__breadcrumbs-item {
    position: relative;
  }

  &__breadcrumbs-item:nth-child(n + 2)::before {
    content: "";
    background-color: $color-white;
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
    color: $color-white;
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
      border-bottom: 1px solid $color-raising-black;
      color: $color-raising-black;
    }
  }

  &__title {
    padding: 0;
    max-width: 960px;
    font-weight: 900;
    font-size: 70px;
    line-height: 87px;
    margin: 0 0 -20px;

    @include vp-laptop {
      font-size: 50px;
      line-height: 62px;
      max-width: 600px;
      margin: 0 0 -9px;
    }

    @include vp-tablet {
      font-size: 50px;
      line-height: 62px;
      max-width: unset;
      margin: 0 0 482px;
    }

    @include vp-mobile {
      font-size: 25px;
      line-height: 31px;
      margin: 0 0 250px;
    }
  }
}

.filter-form {
  display: flex;
  flex-direction: column;
  gap: 70px;

  @include vp-laptop {
    gap: 48px;
  }

  @include vp-tablet {
    gap: 51px;
  }

  @include vp-mobile {
    gap: 35px;
  }
/*
  &__inner {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    color: $color-black;

    @include vp-laptop {
      gap: 15px 20px;
    }

    @include vp-tablet {
      flex-direction: column;
      gap: 20px;
    }

    @include vp-mobile {
      gap: 10px;
    }
  }

  &__cards-group {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    gap: 20px;
    border: none;
    justify-content: space-between;
    width: 100%;

    @include vp-laptop {
      gap: 15px;
    }

    @include vp-tablet {
      flex-wrap: wrap;
      gap: 20px;
      width: 700px;
      justify-content: start;
    }

    @include vp-mobile {
      gap: 10px;
      width: 340px;
    }
  }*/
}

</style>
