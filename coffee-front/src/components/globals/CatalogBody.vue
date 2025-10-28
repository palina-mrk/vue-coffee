<script setup>
import BgCatalog from "../backgrounds/BgCatalog.vue";
import FilterCoffee from "../forms/FilterCoffee.vue";
import FilterTea from "../forms/FilterTea.vue";
import FilterHealthy from "../forms/FilterHealthy.vue";
import FilterVending from "../forms/FilterVending.vue";
import CustomBreadcrumbs from "../navigation/CustomBreadcrumbs.vue";
import ProductCard from "../cards/ProductCard.vue";
import { useCatalogStore } from "../../stores/catalog";
const catalogStore = useCatalogStore();
import { storeToRefs } from "pinia";
const { coffees, teas, vendings, healthies, isLoaded } =
  storeToRefs(catalogStore);
import { ref, computed, reactive } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
/** формируем массив товаров отображаемого вида */
const products = computed(() => {
  if(!isLoaded)
    return [];

  switch(route.name){
    case 'coffee':
      return coffees;
    case 'tea':
      return teas;
    case 'vending':
      return vendings;
    case 'healthy':
      return healthies;
    default:
      return [];
  }
})
/* все товары, кроме кофе, можно отфильтровать только по типу товара
* сохраняем информацию об этом типе */
const chosenTypes = reactive([]);
function toggleChosen(type) {
  chosenTypes.includes(type) ? chosenTypes.splice(chosenTypes.indexOf(type), 1) : chosenTypes.push(type);
}


/* максимальное кол-во отображаемых товаров: 8 на странице */
const cardsCount = ref(8);
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
/* отображаем еще на 4 товара больше */
function showMore() {
  cardsCount.value += 4;
  if (cardsCount.value > maxCount) cardsCount.value = maxCount;
}

/* собираем подробную информацию из фильтров о товарах кофе*/
const roastingDegrees = ref({});
const otherDetails = reactive({
  geography: {},
  acidity: {},
  processing: {},
  actions: {},
  kind: {},
});
const preparationWay = ref("");

function updateValues(object, value) {
  if (object[value]) delete object[value];
  else object[value] = true;
}
</script>

<template>
  <main>
    <section :class="['hero', `hero--${route.name}`]">
      <bg-catalog></bg-catalog>

      <div class="container">
        <div class="hero__wrapper">
          <custom-breadcrumbs
            class="hero__breadcrumbs-list breadcrumbs--white"
          ></custom-breadcrumbs>

          <h2 class="hero__title">{{ route.meta.title }}</h2>

          <filter-coffee
            v-if="route.name == 'coffee'"
            @setRoasting="updateValues(roastingDegrees, $event)"
            @setDetails="updateValues(otherDetails[$event.name], $event.value)"
            @setPreparation="preparationWay = $event"
            class="hero__form"
          ></filter-coffee>
          <filter-tea
            v-else-if="route.name == 'tea'"
            class="hero__form"
            @toggleValue="toggleChosen($event)"
          ></filter-tea>
          <filter-vending
            v-else-if="route.name == 'vending'"
            class="hero__form"
            @toggleValue="toggleChosen($event)"
          ></filter-vending>
          <filter-healthy
            v-else-if="route.name == 'healthy'"
            class="hero__form"
            @toggleValue="toggleChosen($event)"
          ></filter-healthy>
        </div>
      </div>
    </section>

    <p>{{ roastingDegrees }}</p>
    <p>{{ otherDetails }}</p>
    <p>{{ preparationWay }}</p>
    <p>{{ products.value.filter((p) => Object.keys(roastingDegrees).length == 0 || roastingDegrees[p.roasting]) }}</p>

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
              v-for="p in products.value.filter((p) => Object.keys(roastingDegrees).length == 0 || roastingDegrees[p.roasting]).filter((p) => Object.keys(otherDetails.actions).length == 0 || chosenTypes.includes(p.kind)).filter((el, ind) => ind < cardsCount)"
            >
              <ProductCard :product="p" :key="p.id"></ProductCard>
            </li>

            <li
              v-else-if="route.name == 'tea'"
              class="products__item"
              v-for="p in products.value.filter((p) => chosenTypes.length == 0 || chosenTypes.includes(p.kind)).filter((el, ind) => ind < cardsCount)"
            >
              <ProductCard :product="p" :key="p.id"></ProductCard>
            </li>

            <li
              v-else-if="route.name == 'vending'"
              class="products__item"
              v-for="p in products.value.filter((p) => chosenTypes.length == 0 || chosenTypes.includes(p.kind)).filter((el, ind) => ind < cardsCount)"
            >
              <ProductCard :product="p" :key="p.id"></ProductCard>
            </li>

            <li
              v-else-if="route.name == 'healthy'"
              class="products__item"
              v-for="p in products.value.filter((p) => chosenTypes.length == 0 || chosenTypes.includes(p.kind)).filter((el, ind) => ind < cardsCount)"
            >
              <ProductCard :product="p" :key="p.id"></ProductCard>
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

  </main>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  width: 100%;
  padding: 199px 0 0;
  margin: 0;
  color: $color-white;
  font-family: $ff-gilroy sans-serif;
  font-weight: 500;
  overflow: hidden;
  box-sizing: border-box;

  @include vp-laptop {
    padding: 142px 0 0;
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
    gap: 140px;

    @include vp-laptop {
      gap: 100px;
    }

    @include vp-tablet {
      gap: 73px;
    }

    @include vp-mobile {
      gap: 19px;
    }
  }

  &__title {
    padding: 0;
    max-width: 960px;
    font-weight: 900;
    font-size: 70px;
    line-height: 87px;
    margin: 0;

    @include vp-laptop {
      font-size: 50px;
      line-height: 62px;
      max-width: 600px;
      margin: 0 0 -8px;
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

.hero--tea {
  padding: 200px 0 0;

  @include vp-laptop {
    padding: 141px 0 0;
  }

  @include vp-tablet {
    padding: 174px 0 0;
  }

  @include vp-mobile {
    padding: 95px 0 0;
  }

  .hero__wrapper {
    gap: 135px;

    @include vp-laptop {
      gap: 100px;
    }

    @include vp-tablet {
      gap: 72px;
    }

    @include vp-mobile {
      gap: 19px;
    }
  }

  .hero__title {
    margin: 0 0 -20px;

    @include vp-laptop {
      margin: 0 0 -27px;
    }

    @include vp-tablet {
      margin: 0 0 482px;
    }

    @include vp-mobile {
      margin: 0 0 250px;
    }
  }
}

.hero--vending {
  padding: 200px 0 0;

  @include vp-laptop {
    padding: 141px 0 0;
  }

  @include vp-tablet {
    padding: 174px 0 0;
  }

  @include vp-mobile {
    padding: 95px 0 0;
  }

  .hero__wrapper {
    gap: 135px;

    @include vp-laptop {
      gap: 80px;
    }

    @include vp-tablet {
      gap: 72px;
    }

    @include vp-mobile {
      gap: 19px;
    }
  }

  .hero__title {
    margin: 0 0 -20px;

    @include vp-laptop {
      margin: 0 0 14px;
    }

    @include vp-tablet {
      margin: 0 0 482px;
    }

    @include vp-mobile {
      margin: 0 0 250px;
    }
  }
}

.hero--healthy {
  padding: 200px 0 0;

  @include vp-laptop {
    padding: 141px 0 0;
  }

  @include vp-tablet {
    padding: 175px 0 0;
  }

  @include vp-mobile {
    padding: 95px 0 0;
  }

  .hero__wrapper {
    gap: 93px;

    @include vp-laptop {
      gap: 60px;
    }

    @include vp-tablet {
      gap: 42px;
    }

    @include vp-mobile {
      gap: 19px;
    }
  }

  .hero__title {
    margin: 0 0 -16px;

    @include vp-laptop {
      margin: 0 0 -103px;
    }

    @include vp-tablet {
      margin: 0 0 455px;
    }

    @include vp-mobile {
      margin: 0 0 208px;
    }
  }
}

.products {
  padding: 70px 0 97px;
  font-family: $ff-gilroy;

  @include vp-laptop {
    padding: 45px 0 71px;
  }

  @include vp-tablet {
    padding: 52px 0 38px;
  }

  @include vp-mobile {
    padding: 36px 0 10px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 45px;

    @include vp-laptop {
      gap: 40px;
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
    margin: 0 0 30px;
    padding: 0;
    list-style-type: none;
    display: flex;
    gap: 70px 20px;
    flex-wrap: wrap;
    justify-content: start;

    @include vp-laptop {
      margin: 0 0 8px;
      gap: 40px 20px;
    }

    @include vp-tablet {
      gap: 20px;
      margin: 0;
    }

    @include vp-mobile {
      margin: 0 0 8px;
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
  padding: 63px 0 100px;

  @include vp-laptop {
    padding: 46px 0 74px;
  }

  @include vp-tablet {
    padding: 52px 0 18px;
  }

  @include vp-mobile {
    padding: 35px 0 50px;
  }

  .products__wrapper {
    gap: 59px;

    @include vp-laptop {
      gap: 43px;
    }

    @include vp-tablet {
      gap: 30px;
    }

    @include vp-mobile {
      gap: 20px;
    } 
  }

  .products__list {
    gap: 30px 20px;
    margin: 0 0 11px;

    @include vp-laptop {
      margin: 0 0 7px;
      gap: 25px 20px;
    }

    @include vp-tablet {
      gap: 20px;
      margin: 0 0 1px;
    }

    @include vp-mobile {
      margin: 0;
    }
  }
}

.products--vending {
  padding: 63px 0 100px;

  @include vp-laptop {
    padding: 46px 0 74px;
  }

  @include vp-tablet {
    padding: 52px 0 18px;
  }

  @include vp-mobile {
    padding: 35px 0 50px;
  }

  .products__wrapper {
    gap: 59px;

    @include vp-laptop {
      gap: 43px;
    }

    @include vp-tablet {
      gap: 30px;
    }

    @include vp-mobile {
      gap: 20px;
    }
  
  }

  .products__list {
    gap: 30px 20px;
    margin: 0 0 11px;

    @include vp-laptop {
      margin: 0 0 7px;
      gap: 25px 20px;
    }

    @include vp-tablet {
      gap: 20px;
      margin: 0 0 1px;
    }

    @include vp-mobile {
      margin: 0;
    }
  }
}

.products--healthy {
  padding: 62px 0 97px;
  font-family: $ff-gilroy;

  @include vp-laptop {
    padding: 45px 0 71px;
  }

  @include vp-tablet {
    padding: 53px 0 38px;
  }

  @include vp-mobile {
    padding: 33px 0 50px;
  }

  .products__wrapper {
    display: flex;
    flex-direction: column;
    gap: 55px;

    @include vp-laptop {
      gap: 43px;
    }

    @include vp-tablet {
      gap: 30px;
    }

    @include vp-mobile {
      gap: 22px;
    }
  }

  .products__sort-btn {
    align-self: start;

    @include vp-laptop {
      position: relative;
      left: -15px;
    }

    @include vp-tablet {
      position: unset;
    }
  }

  .products__list {
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

  .products__item {
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

.btn-linked--black-small {
  display: flex;
  align-items: center;
  font-family: $ff-gilroy sans-serif;
  font-weight: 500;
  line-height: 26px;
  font-size: 20px;
  user-select: none;
  line-height: 24px;
  color: $color-black;
  text-decoration: underline;
  padding: 11px 30px 10px;
  justify-content: center;
  border: none;
  background-color: transparent;

  @include vp-laptop {
    font-size: 14px;
    line-height: 16px;
    padding: 7px 18px 6px;
    border-radius: 18px;
  }

  @include vp-tablet {
    font-size: 20px;
    line-height: 26px;
    border-radius: 25px;
    padding: 9px 20px 8px;
  }

  @include vp-mobile {
    font-size: 18px;
    line-height: 21px;
    padding: 7px 20px 7px;
    border-radius: 20px;
  }

  &:hover {
    background-color: $color-ghost-white;
    color: $color-ucla-gold;
  }
}

.btn--white-xl {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: $ff-gilroy sans-serif;
  border-radius: 5px;
  margin: 0;
  cursor: pointer;
  user-select: none;
  color: $color-black;
  background-color: $color-white;
  border-width: 1px;
  border-style: solid;
  border-color: $color-platinum;
  padding: 23px;
  height: 70px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  border-radius: 10px;

  @include vp-laptop {
    height: 50px;
    border-width: 0.71px;
    padding: 16px;
    font-size: 14px;
    line-height: 17px;
    border-radius: 7px;
  }

  @include vp-tablet {
    height: 70px;
    border-width: 1px;
    padding: 22px;
    font-size: 22px;
    line-height: 26px;
    border-radius: 5px;
  }

  @include vp-mobile {
    height: 50px;
    padding: 14px 14px 15px;
    font-size: 18px;
    line-height: 21px;
  }

  &:hover {
    background-color: $color-cornsilk;
  }
}

.btn-linked {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  color: $color-ucla-gold;
  font-family: $ff-gilroy;
  font-weight: 500;
  line-height: 26px;
  font-size: 20px;
  padding: 10px 24px;
  border-radius: 30px;
  user-select: none;
  cursor: pointer;

  @include vp-laptop {
    font-size: 14px;
    line-height: 18px;
    padding: 5px 18px;
    border-radius: 21px;
  }

  @include vp-tablet {
    font-size: 25px;
    line-height: 32px;
    border-radius: 36px;
    gap: 14px;
  }

  @include vp-mobile {
    font-size: 16px;
    line-height: 21px;
    padding: 5px 18px 3px;
    gap: 13px;
  }

  &__icon {
    width: 16px;
    height: 11px;

    @include vp-laptop {
      width: 10px;
      height: 7px;
    }

    @include vp-tablet {
      width: 32px;
      height: 20px;
    }

    @include vp-mobile {
      width: 14px;
      height: 10px;
    }
  }

  &:hover {
    background-color: $color-bright-gray;
  }

  &--black {
    line-height: 24px;
    color: $color-black;
    text-decoration: underline;
    padding: 11px 30px 10px;
    justify-content: center;
    border: none;
    background-color: transparent;

    @include vp-laptop {
      font-size: 14px;
      line-height: 16px;
      padding: 7px 18px 6px;
      border-radius: 18px;
    }

    @include vp-tablet {
      font-size: 25px;
      line-height: 30px;
      border-radius: 30px;
      padding: 7px 10px 6px;
    }

    @include vp-mobile {
      font-size: 12px;
      line-height: 16px;
      padding: 5px 13px 3px;
      border-radius: 16px;
    }

    &:hover {
      background-color: $color-ghost-white;
      color: $color-ucla-gold;
    }
  }

  &--black-small {
    line-height: 24px;
    color: $color-black;
    text-decoration: underline;
    padding: 11px 30px 10px;
    justify-content: center;
    border: none;
    background-color: transparent;

    @include vp-laptop {
      font-size: 14px;
      line-height: 16px;
      padding: 7px 18px 6px;
      border-radius: 18px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 26px;
      border-radius: 25px;
      padding: 9px 20px 8px;
    }

    @include vp-mobile {
      font-size: 18px;
      line-height: 21px;
      padding: 7px 20px 7px;
      border-radius: 20px;
    }

    &:hover {
      background-color: $color-ghost-white;
      color: $color-ucla-gold;
    }
  }

  &--size-m {
    font-size: 25px;
    padding: 11px 29px 10px;

    @include vp-laptop {
      font-size: 18px;
      padding: 7px 17px 6px;
    }

    @include vp-tablet {
      font-size: 25px;
      line-height: 30px;
      padding: 7px 10px 6px;
      border-radius: 30px;
    }

    @include vp-mobile {
      font-size: 12px;
      line-height: 16px;
      padding: 5px 13px 3px;
      border-radius: 16px;
    }
  }
}

</style>

