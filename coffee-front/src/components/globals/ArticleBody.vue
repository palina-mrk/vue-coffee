<script setup>
import CustomBreadcrumbs from "../navigation/CustomBreadcrumbs.vue";
import BgPersonal from "../backgrounds/BgPersonal.vue";

import { useRoute } from "vue-router";
const route = useRoute();

import { useArticleStore } from "../../stores/articles";
const articleStore = useArticleStore();

const newsItem = computed(() =>
  articleStore.isLoaded
    ? articleStore.getFullInfo(Number(route.params.articleID))
    : {},
);

</script>

<template>
  <main>
    <section class="product-hero">
      <bg-personal></bg-personal>

      <div class="container">
        <div class="product-hero__wrapper">
          <custom-breadcrumbs
            class="product-hero__breadcrumbs-list"
          ></custom-breadcrumbs>
          <h1 class="visually-hidden">Карточка товара</h1>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.product-hero {
  position: relative;
  width: 100%;
  padding: 201px 0 67px;
  font-family: $ff-gilroy, sans-serif;
  font-weight: 500;
  overflow: hidden;
  border-bottom: 1px solid $color-philippine-silver;

  @include vp-laptop {
    padding: 145px 0 20px;
  }

  @include vp-tablet {
    padding: 173px 0 70px;
    border-bottom: 2px solid $color-philippine-silver;
  }

  @include vp-mobile {
    padding: 100px 0 50px;
    border-bottom: 1px solid $color-philippine-silver;
  }

  &__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 37px;
    margin: 0 0 25px;

    @include vp-laptop {
      gap: 30px;
      margin: 0 0 20px;
    }

    @include vp-tablet {
      gap: 56px;
      margin: 0 0 30px;
    }

    @include vp-mobile {
      gap: 13px;
      margin: 0 0 30px;
    }
  }

  &__breadcrumbs-list {
    margin: 0;
  }

  &__product-card {
    margin: 0 0 61px;

    @include vp-laptop {
      margin: 0 0 28px;
    }

    @include vp-tablet {
      margin: 0 0 13px;
    }

    @include vp-mobile {
      margin: 0 0 28px;
    }
  }

  &__anchor-toggle {
    width: 100%;
    margin: 0 0 61px;

    @include vp-laptop {
      margin: 0 0 38px;
    }

    @include vp-tablet {
      margin: 0 0 35px;
    }

    @include vp-mobile {
      margin: 0 0 18px;
    }
  }

  &__coffee-addings {
    width: 100%;
    display: flex;
    gap: 20px;
    margin: 0 0 61px;

    @include vp-laptop {
      margin: 0 0 38px;
    }

    @include vp-tablet {
      flex-direction: column;
      margin: 0 0 35px;
    }

    @include vp-mobile {
      gap: 9px;
      margin: 0 0 18px;
    }
  }

  &__coffee-taste {
    width: 400px;

    @include vp-laptop {
      width: 280px;
    }

    @include vp-tablet {
      width: 100%;
    }
  }

  &__coffee-details {
    width: calc(100% - 421px);

    @include vp-laptop {
      width: calc(100% - 301px);
    }

    @include vp-tablet {
      width: 100%;
    }
  }
}

.product-cooking {
  position: relative;
  width: 100%;
  padding: 70px 0 100px;
  overflow: hidden;
  border-bottom: 1px solid $color-philippine-silver;

  @include vp-laptop {
    padding: 40px 0 80px;
  }

  @include vp-tablet {
    border-bottom: 2px solid $color-philippine-silver;
  }

  @include vp-mobile {
    padding: 30px 0;
    border-bottom: 1px solid $color-philippine-silver;
  }
}

.adding-info {
  position: relative;
  width: 100%;
  padding: 70px 0 100px;
  overflow: hidden;

  @include vp-laptop {
    padding: 40px 0 80px;
  }

  @include vp-tablet {
  }

  @include vp-mobile {
    padding: 30px 0;
  }
}

.reviews {
  position: relative;
  width: 100%;
  padding: 70px 0 50px;
  overflow: hidden;

  @include vp-laptop {
    padding: 28px 0 95px;
  }

  @include vp-tablet {
    padding: 28px 0 45px;
  }

  @include vp-mobile {
    padding: 8px 0 0;
  }
}
</style>
