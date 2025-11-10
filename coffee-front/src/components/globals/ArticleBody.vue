<script setup>
import CustomBreadcrumbs from "../navigation/CustomBreadcrumbs.vue";
import BgProduct from "../backgrounds/BgProduct.vue";

import { computed } from "vue";

import { useRoute } from "vue-router";
const route = useRoute();

import { useArticlesStore } from "../../stores/articles";
const articlesStore = useArticlesStore();

const newsItem = computed(() =>
  articlesStore.isLoaded
    ? articlesStore.getFullInfo(Number(route.params.articleID))
    : {},
);

</script>

<template>
  <main>
    <section class="headings">
      <bg-product :place="'middle'"></bg-product>

      <div class="container">
        <div class="headings__wrapper">
          <custom-breadcrumbs
            class="headings__breadcrumbs-list"
          ></custom-breadcrumbs>
          <h1 class="visually-hidden">Страница блога</h1>
          <h3 class="headings__title" v-if="articlesStore.isLoaded">{{ newsItem.title }}</h3>
        </div>
      </div>

    </section>

    <section class="article">
      <bg-product :place="'bottom'"></bg-product>
      <div class="container">
        <div class="article__inner" v-if="articlesStore.isLoaded">
          <div class="article__content">
            <p class="article__paragraph" v-for="articleParagraph in newsItem.text">{{ articleParagraph }}</p>
          </div>
          <div class="article__bottom">
            <span class="article__author">{{ newsItem.author }}</span>
            
            <span class="article__date">{{ newsItem.date }}</span>
        </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.headings {
  position: relative;
  width: 100%;
  padding: 201px 0 40px;
  font-family: $ff-gilroy, sans-serif;
  font-weight: 500;
  overflow: hidden;

  @include vp-laptop {
    padding: 145px 0 20px;
  }

  @include vp-tablet {
    padding: 173px 0 30px;
    border-bottom: none;
  }

  @include vp-mobile {
    padding: 100px 0 10px;
  }

  &__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 110px;

    @include vp-laptop {
      gap: 80px;
    }

    @include vp-tablet {
      gap: 55px;
    }

    @include vp-mobile {
      gap: 50px;
    }
  }

  &__breadcrumbs-list {
      margin: 0;
  }
  
  &__title {
    font-family: $ff-gilroy, sans-serif;
    color: $color-black;
    font-weight: 900;
    font-size: 40px;
    line-height: 50px;
    margin: 0;
    padding: 0;

    @include vp-laptop {
      font-size: 28px;
      line-height: 35px;
    }

    @include vp-tablet {
      font-size: 36px;
      line-height: 45px;
    }

    @include vp-mobile {
      font-size: 18px;
      line-height: 22px;
    }
  }
}

.article {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 20px 0 10px;
  overflow: hidden;

  @include vp-tablet {
    padding: 10px 0 78px;
  }

  @include vp-mobile {
    padding: 20px 0 70px;
  }
  
  
  &__inner {
    display: flex;
    flex-direction: column;
    font-family: $ff-gilroy, sans-serif;
    color: $color-black;
    gap: 50px;

    @include vp-laptop {
      gap: 35px;
    }

    @include vp-tablet {
      gap: 40px;
    }

    @include vp-mobile {
      gap: 35px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @include vp-laptop {
      gap: 20px;
    }

    @include vp-tablet {
      gap: 25px;
    }

    @include vp-mobile {
      gap: 18px;
    }
  }

  &__paragraph,
  &__date {
    font-family: $ff-gilroy, sans-serif;
    color: $color-raising-black;
    font-weight: 500;
    font-size: 25px;
    line-height: 32px;
    padding: 0;
    margin: 0;
    text-indent: 64px;

    @include vp-laptop {
      font-size: 18px;
      line-height: 23px;
      text-indent: 48px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 26px;
      text-indent: 45px;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 18px;
      text-indent: 24px;
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  &__author{
    font-family: $ff-gilroy, sans-serif;
    color: $color-black;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    margin: 0;
    padding: 0;

    @include vp-laptop {
      font-size: 22px;
      line-height: 26px;
    }

    @include vp-tablet {
      font-size: 30px;
      line-height: 39px;
    }

    @include vp-mobile {
      font-size: 16px;
      line-height: 19px;
    }
  }

  &__date {
    font-weight: 600;
  }
}
</style>
