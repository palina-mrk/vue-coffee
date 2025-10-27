<script setup>
import ProductCard from "../cards/ProductCard.vue";
import { useCatalogStore } from "../../stores/catalog";
const catalogStore = useCatalogStore();
import { storeToRefs } from "pinia";
const { coffees, teas, vendings, healthies, isLoaded } =
  storeToRefs(catalogStore);
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const cardsCount = ref(12);
const maxCount = computed(() => {
  switch (route.name) {
    case "coffee":
      return coffees.length;
    case "tea":
      return teas.length;
    case "vending":
      return vendings.length;
    default:
      return 0;
  }
});

function showMore() {
  cardsCount.value += 20;
  if (cardsCount.value > maxCount) cardsCount.value = maxCount;
}
</script>

<template>
  <section :class="['products','products--' + route.name]">
    <div class="container">
      <div class="products__wrapper">
        <h2 class="products__title visually-hidden">
          Отсортированные карточки товаров
        </h2>

        <button
          class="products__sort-btn btn-linked btn-linked--black-small"
          type="submit"
        >
          Сортировка
        </button>

        <ul v-if="isLoaded" class="products__list">
          <li
            v-if="route.name == 'coffee'"
            class="products__item"
            v-for="n in 20"
          >
            <ProductCard :product="coffees[n - 1]"></ProductCard>
          </li>

          <li
            v-else-if="route.name == 'tea'"
            class="products__item"
            v-for="n in 20"
          >
            <ProductCard :product="teas[n - 1]"></ProductCard>
          </li>

          <li
            v-else-if="route.name == 'vending'"
            class="products__item"
            v-for="n in 20"
          >
            <ProductCard :product="vendings[n - 1]"></ProductCard>
          </li>

          <li
            v-else-if="route.name == 'healthy'"
            class="products__item"
            v-for="n in 20"
          >
            <ProductCard :product="healthies[n - 1]"></ProductCard>
          </li>
        </ul>

        <button
          class="products__button btn btn--white-xl"
          type="button"
          @click="showMore"
        >
          Показать ещё
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.products {
  padding: 48px 0 97px;
  font-family: $ff-gilroy;

  @include vp-laptop {
    padding: 37px 0 71px;
  }

  @include vp-tablet {
    padding: 30px 0 38px;
  }

  @include vp-mobile {
    padding: 36px 0 50px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 70px;

    @include vp-laptop {
      gap: 51px;
    }

    @include vp-tablet {
      gap: 30px;
    }

    @include vp-mobile {
      gap: 22px;
    }
  }

  &__sort-btn {
    align-self: start;

    @include vp-laptop {
      position: relative;
      left: -15px;
    }

    @include vp-tablet {
      position: unset;
    }
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    gap: 70px 20px;
    flex-wrap: wrap;
    justify-content: start;

    @include vp-laptop {
      gap: 49px 20px;
    }

    @include vp-tablet {
      gap: 20px;
    }
  }

  &__item {
    width: calc(25% - 15px);

    @include vp-tablet {
      width: calc(50% - 10px);
    }

    @include vp-mobile {
      width: 100%;
    }
  }

  &__button {
    width: 100%;
  }
}

.products--tea {
  padding: 60px 0 70px;

  .products__wrapper {
    gap: 60px;
  }

  .products__list {
    gap: 30px 20px;
    margin: 0 0 10px;

    @include vp-laptop {
      gap: 25px 20px;
    }
  }
}

.products--vending {
  padding: 48px 0 97px;
  font-family: $ff-gilroy;

  @include vp-laptop {
    padding: 37px 0 71px;
  }

  @include vp-tablet {
    padding: 30px 0 38px;
  }

  @include vp-mobile {
    padding: 36px 0 50px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 70px;

    @include vp-laptop {
      gap: 51px;
    }

    @include vp-tablet {
      gap: 30px;
    }

    @include vp-mobile {
      gap: 22px;
    }
  }

  &__sort-btn {
    align-self: start;

    @include vp-laptop {
      position: relative;
      left: -15px;
    }

    @include vp-tablet {
      position: unset;
    }
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    gap: 70px 20px;
    flex-wrap: wrap;
    justify-content: start;

    @include vp-laptop {
      gap: 49px 20px;
    }

    @include vp-tablet {
      gap: 20px;
    }
  }

  &__item {
    width: calc(25% - 15px);

    @include vp-tablet {
      width: calc(50% - 10px);
    }

    @include vp-mobile {
      width: 100%;
    }
  }

  &__button {
    width: 100%;
  }
}

.products--healthy {
  padding: 48px 0 97px;
  font-family: $ff-gilroy;

  @include vp-laptop {
    padding: 37px 0 71px;
  }

  @include vp-tablet {
    padding: 30px 0 38px;
  }

  @include vp-mobile {
    padding: 36px 0 50px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 70px;

    @include vp-laptop {
      gap: 51px;
    }

    @include vp-tablet {
      gap: 30px;
    }

    @include vp-mobile {
      gap: 22px;
    }
  }

  &__sort-btn {
    align-self: start;

    @include vp-laptop {
      position: relative;
      left: -15px;
    }

    @include vp-tablet {
      position: unset;
    }
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    gap: 70px 20px;
    flex-wrap: wrap;
    justify-content: start;

    @include vp-laptop {
      gap: 49px 20px;
    }

    @include vp-tablet {
      gap: 20px;
    }
  }

  &__item {
    width: calc(25% - 15px);

    @include vp-tablet {
      width: calc(50% - 10px);
    }

    @include vp-mobile {
      width: 100%;
    }
  }

  &__button {
    width: 100%;
  }
}
</style>
