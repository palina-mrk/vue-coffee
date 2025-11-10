<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
import { useCatalogStore } from "../../stores/catalog";
const catalogStore = useCatalogStore();
import { useArticlesStore } from "../../stores/articles";
const articlesStore = useArticlesStore();

const routerNames = computed(() => {
  const arr = route.path.split("/");
  arr[0] = "home";
  arr[arr.length - 1] = route.name;
  return arr;
});

const routerLabels = computed(() =>
  !catalogStore.isLoaded || !articlesStore.isLoaded
    ? []
    : route.path.split("/").map((name, ind, arr) => {
        if (ind == 0)
          return router.options.routes.find((r) => r.name == "home").meta.title;

        if (ind == arr.length - 1) {
          if(arr[ind - 1] == 'catalogs') 
            return (
              route.meta.title +
              " " +
              catalogStore.getCategory(Number(name)) +
              " " +
              catalogStore.getTitle(Number(name))
            );
          
          if(arr[ind - 1] == 'blog') 
            return (
              articlesStore.getTitle(Number(name))
          );

          return route.meta.title;
        }

        return router.options.routes.find((r) => r.name == name).meta.title;
      }),
);
</script>

<template>

  <ul class="breadcrumbs__list" v-if="catalogStore.isLoaded">
    <li v-for="n in routerLabels.length" class="breadcrumbs__item">
      <router-link
        class="breadcrumbs__link"
        :to="{ name: routerNames[n - 1] }"
        >{{ routerLabels[n - 1] }}</router-link
      >
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.breadcrumbs {
  &__list {
    display: flex;
    font-family: $ff-gilroy, sans-serif;
    list-style-type: none;
    justify-content: start;
    margin: 0;
    padding: 0;
    gap: 5px 8px;
    flex-wrap: wrap;

    @include vp-laptop {
      gap: 5px 5px;
    }

    @include vp-tablet {
      gap: 5px 10px;
    }

    @include vp-mobile {
      gap: 5px 5px;
    }
  }

  &__item {
    margin: 0;
    padding: 0;
    font-family: $ff-gilroy, sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    text-decoration: none;

    @include vp-laptop {
      font-size: 12px;
      line-height: 14px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 26px;
    }

    @include vp-mobile {
      font-size: 10px;
      line-height: 12px;
    }
  }

  &__item:not(:first-child) {
    position: relative;
    margin: 0;
    padding: 0 0 0 12px;

    @include vp-laptop {
      padding: 0 0 0 8px;
    }

    @include vp-tablet {
      padding: 0 0 0 14px;
    }

    @include vp-mobile {
      padding: 0 0 0 7px;
    }
  }

  &__item:not(:first-child)::before {
    content: "";
    background-color: $color-raising-black;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    bottom: 50%;

    @include vp-laptop {
      width: 3px;
      height: 3px;
    }

    @include vp-tablet {
      width: 4px;
      height: 4px;
    }

    @include vp-mobile {
      width: 2px;
      height: 2px;
    }
  }

  &__link {
    color: $color-raising-black;
    font-family: $ff-gilroy, sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    text-decoration: none;

    @include vp-laptop {
      font-size: 12px;
      line-height: 14px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 26px;
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

  .breadcrumbs__link {
    color: $color-white;

    &:hover {
      color: $color-raising-black;
    }
  }
}
</style>
