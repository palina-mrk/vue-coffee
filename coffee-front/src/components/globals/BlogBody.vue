<script setup>
import BgBlog from "../backgrounds/BgBlog.vue";
import CustomBreadcrumbs from "../navigation/CustomBreadcrumbs.vue";
import AnchorToggle from "../navigation/AnchorToggle.vue";
import AddingBlock from "../articles/AddingBlock.vue";
import QuestionsBlock from "../articles/QuestionsBlock.vue";
import CookingCoffee from "../articles/CookingCoffee.vue";
import NewsBlock from "../articles/NewsBlock.vue";

import { computed, ref, reactive } from "vue";
const anchorObjects = ref([
  {
    link: "teaching",
    label: "Обучение",
  },
  {
    link: "news",
    label: "Новости",
  },
  {
    link: "questions",
    label: "Частые вопросы",
  },
]);
</script>

<template>
  <main>
    <section class="teaching">
      <bg-blog :place="'top'"></bg-blog>

      <div class="container">
        <div class="teaching__wrapper">
          <custom-breadcrumbs
            class="teaching__breadcrumbs-list"
          ></custom-breadcrumbs>
          <h1 class="visually-hidden">Блог</h1>

          <anchor-toggle
            class="teaching__anchor-toggle"
            :anchorObjects="anchorObjects"
          ></anchor-toggle>

          <cooking-coffee id="teaching"></cooking-coffee>
          <adding-block></adding-block>
        </div>
      </div>
    </section>

    <section class="news" id="news">
      <bg-blog :place="'top'"></bg-blog>

      <div class="container">
        <news-block></news-block>
      </div>
    </section>

    <section class="questions" id="questions">
      <bg-blog :place="'middle'"></bg-blog>

      <div class="container">
        <questions-block></questions-block>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.teaching {
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
    padding: 173px 0 20px;
    border-bottom: none;
  }

  @include vp-mobile {
    padding: 100px 0 10px;
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

.news {
  position: relative;
  width: 100%;
  padding: 53px 0 100px;
  overflow: hidden;
  border-bottom: 1px solid $color-philippine-silver;

  @include vp-laptop {
    padding: 34px 0 79px;
  }

  @include vp-tablet {
    padding: 30px 0 70px;
    border-bottom: 2px solid $color-philippine-silver;
  }

  @include vp-mobile {
    padding: 10px 0 40px;
    border-bottom: 1px solid $color-philippine-silver;
  }
}

.questions {
  position: relative;
  width: 100%;
  padding: 45px 0 10px;
  overflow: hidden;

  @include vp-laptop {
    padding: 34px 0 0;
  }

  @include vp-tablet {
    padding: 44px 0 78px;
  }

  @include vp-mobile {
    padding: 25px 0 70px;
  }
}
</style>
