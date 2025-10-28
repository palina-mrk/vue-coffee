<script setup>
import BgCatalog from "../backgrounds/BgCatalog.vue";
import FilterCoffee from "../forms/FilterCoffee.vue";
import FilterTea from "../forms/FilterTea.vue";
import FilterHealthy from "../forms/FilterHealthy.vue";
import FilterVending from "../forms/FilterVending.vue";
import CustomBreadcrumbs from "../navigation/CustomBreadcrumbs.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
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
          class="hero__form"
        ></filter-coffee>
        <filter-tea
          v-else-if="route.name == 'tea'"
          class="hero__form"
        ></filter-tea>
        <filter-vending
          v-else-if="route.name == 'vending'"
          class="hero__form"
        ></filter-vending>
        <filter-healthy
          v-else-if="route.name == 'healthy'"
          class="hero__form"
        ></filter-healthy>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
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
      margin: 0 0 15px;
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
      margin: 0 0 248px;
    }
  }
}

.hero--tea {
  .hero__wrapper {
  }

  .hero__title {
    @include vp-laptop {
      margin: 0 0 -26px;
    }

    @include vp-tablet {
      margin: 0 0 482px;
    }

    @include vp-mobile {
      margin: 0 0 245px;
    }
  }
}
</style>
