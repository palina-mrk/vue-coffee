<script setup>
import TagToggle from "../toggles/TagToggle.vue";
import NewsCard from "../cards/NewsCard.vue";
import { useArticlesStore } from "../../stores/articles";
const articlesStore = useArticlesStore();
import { computed, ref, reactive } from "vue";

const newsList = computed(() =>
  articlesStore.isLoaded
    ? articlesStore.articles
    : [],
);

const tagValue = ref("");

const newsCount = ref(3);

const tagItems = computed(() =>
  articlesStore.isLoaded
    ? articlesStore.tags
    : [],
);

</script>

<template>
  <div class="news-block" v-if="articlesStore.isLoaded">
    <div class="news-block__top">
      <h2 class="news-block__title">Новости:</h2>
      <h2 class="news-block__title news-block__title--tablet">Новости компании:</h2>

      <tag-toggle
        class="news-block__toggle"
        :toggleName="'tag'"
        :initialValues="tagItems"
        @toggle-value="tagValue = $event"
      ></tag-toggle>
    </div>

    <ul class="news-block__list">
      <li
        class="news-block__item"
        v-for="newItem in newsList
          .filter((newItem) => !tagValue.length || newItem.tag == tagValue)
          .filter((el, ind) => ind < Number(newsCount))"
        :key="newItem.id"
      >
        <news-card :newsItem="newItem"></news-card>
      </li>
    </ul>

    <button
      class="news__button btn--white-xl"
      type="button"
      :disabled="
        newsCount ==
        newsList.filter(
          (newItem) => !tagValue.length || newItem.tag == tagValue,
        ).length
      "
      @click="
        newsCount <=
        newsList.filter(
          (newItem) => !tagValue.length || newItem.tag == tagValue,
        ).length -
          3
          ? (newsCount += 3)
          : (newsCount = newsList.filter(
              (newItem) => !tagValue.length || newItem.tag == tagValue,
            ).length)
      "
    >
      Показать ещё
    </button>
  </div>
</template>

<style lang="scss" scoped>
.btn--white-xl {
  margin: 0;
  text-align: center;
  font-family: $ff-gilroy, sans-serif;
  cursor: pointer;
  user-select: none;
  color: $color-black;
  background-color: $color-cultured-f6;
  border-color: $color-chinese-silver;
  border-width: 1px;
  border-style: solid;
  padding: 24px 23px 22px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  border-radius: 10px;

  @include vp-laptop {
    border-width: 0.71px;
    padding: 16px 16px 14px;
    font-size: 14px;
    line-height: 17px;
    border-radius: 7px;
  }

  @include vp-tablet {
    border-color: $color-platinum;
    background-color: $color-white;
    border-width: 2px;
    padding: 19px 18px 18px;
    font-size: 25px;
    line-height: 29px;
    border-radius: 5px;
  }

  @include vp-mobile {
    background-color: $color-cultured-f6;
    border-color: $color-chinese-silver;
    border-width: 1px;
    padding: 13px 12px 8px;
    font-size: 14px;
    line-height: 17px;
  }

  &:hover {
    background-color: $color-cornsilk;
  }

  &[disabled] {
    border-color: $color-bright-gray;
    color: $color-silver-sand-c6;
    background-color: $color-cultured-f6;
    cursor: unset;
  }
}

.news-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @include vp-laptop {
    gap: 40px;
  }

  @include vp-tablet {
    gap: 30px;
  }

  @include vp-mobile {
    gap: 28px;
  }

  &__top {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 10px;

    @include vp-laptop {
      margin: 0 0 5px;
    }

    @include vp-tablet {
      flex-direction: column;
      gap: 40px;
      align-items: start;
      margin: 0 0 10px;
    }

    @include vp-mobile {
      gap: 20px;
      margin: 0 0 20px;
    }
  }

  &__title {
    font-family: $ff-gilroy, sans-serif;
    color: $color-black;
    font-weight: 900;
    font-size: 40px;
    line-height: 50px;
    width: fit-content;
    margin: 0;
    padding: 0;

    @include vp-laptop {
      font-size: 28px;
      line-height: 35px;
    }

    @include vp-tablet {
      display: none;
      font-size: 36px;
      line-height: 45px;
    }

    @include vp-mobile {
      font-size: 18px;
      line-height: 22px;
    }

    &--tablet {
      display: none;

      @include vp-tablet {
        display: flex;
      }
    }
  }

  &__toggle {
    width: calc(100% - 400px);

    @include vp-laptop {
    width: calc(100% - 268px);  
    }

    @include vp-tablet {
      width: 100%;
    }
  }

  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style-type: none;
    gap: 50px;

    @include vp-laptop {
      gap: 30px;
    }

    @include vp-tablet {
      gap: 20px;
    }
  }

  &__item {
    padding: 0;
    margin: 0;
    width: 100%;
  }

  &__button {
    width: 100%;
  }
}
</style>
