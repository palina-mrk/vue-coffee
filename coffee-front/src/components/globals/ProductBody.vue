<script setup>
import BgProduct from "../backgrounds/BgProduct.vue";
import TasteCard from "../cards/TasteCard.vue";
import DetailsCard from "../cards/DetailsCard.vue";
import CustomBreadcrumbs from "../navigation/CustomBreadcrumbs.vue";
import ProductLarge from "../cards/ProductLarge.vue";
import AnchorToggle from "../navigation/AnchorToggle.vue";
import RawDescription from "../articles/RawDescription.vue";
import AddingBlock from "../articles/AddingBlock.vue";
import ReviewsBlock from "../articles/ReviewsBlock.vue";
import CookingBlock from "../articles/CookingBlock.vue";

import { useRoute } from "vue-router";
const route = useRoute();

import { useCatalogStore } from "../../stores/catalog";
const catalogStore = useCatalogStore();
import { computed, ref, reactive } from "vue";

const category = computed(() =>
  catalogStore.isLoaded
    ? catalogStore.getFullInfo(Number(route.params.productID)).category
    : "",
);

const anchorObjectsCoffee = ref([
  {
    link: "product-description",
    label: "Описание",
  },
  {
    link: "product-cooking",
    label: "Как готовить?",
  },
  {
    link: "product-adding",
    label: "Дополнительно",
  },
  {
    link: "reviews-list",
    label: "Отзывы",
  },
]);

const anchorObjects = ref([
  {
    link: "product-description",
    label: "Описание",
  },
  {
    link: "product-cooking",
    label: "Как готовить?",
  },
  {
    link: "reviews-list",
    label: "Отзывы",
  },
]);
</script>

<template>
  <main>
    <section class="product-hero">
      <bg-product :place="'top'"></bg-product>

      <div class="container">
        <div class="product-hero__wrapper">
          <custom-breadcrumbs
            class="product-hero__breadcrumbs-list"
          ></custom-breadcrumbs>
          <h1 class="visually-hidden">Карточка товара</h1>
          <product-large
            class="product-hero__product-card"
            id="product-description"
          ></product-large>
          <anchor-toggle
            class="product-hero__anchor-toggle"
            :anchorObjects="
              category == 'coffee' ? anchorObjectsCoffee : anchorObjects
            "
          ></anchor-toggle>
          <div class="product-hero__coffee-addings" v-if="category == 'coffee'">
            <taste-card class="product-hero__coffee-taste"></taste-card>

            <details-card class="product-hero__coffee-details"></details-card>
          </div>
          <raw-description
            class="product-hero__raw-description"
          ></raw-description>
        </div>
      </div>
    </section>

    <section class="product-cooking">
      <bg-product :place="'middle'"></bg-product>

      <div class="container">
        <cooking-block id="product-cooking"></cooking-block>
      </div>
    </section>

    <section class="adding-info" v-if="category == 'coffee'">
      <bg-product :place="'middle'"></bg-product>

      <div class="container">
        <adding-block id="product-adding"></adding-block>
      </div>
    </section>

    <section class="reviews">
      <bg-product :place="'bottom'"></bg-product>

      <div class="container">
        <reviews-block id="reviews-list"></reviews-block>
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
