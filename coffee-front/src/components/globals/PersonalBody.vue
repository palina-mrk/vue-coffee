<script setup>
import BgPersonal from "../backgrounds/BgPersonal.vue";

import CustomBreadcrumbs from "../navigation/CustomBreadcrumbs.vue";
import ActionCard from "../cards/ActionCard.vue";

import { reactive, ref } from "vue";
const actionsInfo = reactive([
  {
    slogan: "Купи 3 пачки кофе и получи 4-ую в подарок!",
    until: "31.11.2025",
  },
  {
    slogan: "Купи 3 пачки кофе и получи 4-ую в подарок!",
    until: "31.11.2025",
  },
  {
    slogan: "Купи 3 пачки кофе и получи 4-ую в подарок!",
    until: "31.11.2025",
  },
  {
    slogan: "Купи 3 пачки кофе и получи 4-ую в подарок!",
    until: "31.11.2025",
  },
]);
</script>

<template>
  <main>
    <section class="personal" style="min-height: 2000px;">
      <bg-personal></bg-personal>

      <div class="container">
        <h1 class="visually-hidden">Личный кабинет</h1>

        <custom-breadcrumbs class="personal__breadcrumbs"></custom-breadcrumbs>

        <div class="personal__forms-wrapper">
        </div>

        <div class="personal__actions-wrapper">
          <h2 class="personal__actions-title">Персональные акции</h2>
          <ul class="personal__actions-list">
            <li class="personal__actions-item"
            v-for="actionInfo in actionsInfo">
            <action-card :actionInfo="actionInfo"></action-card>
          </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.personal {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 202px 0 100px;
  margin: 0;
  font-family: $ff-gilroy sans-serif;
  overflow: hidden;

  @include vp-laptop {
    padding: 140px 0 175px;
  }

  @include vp-tablet {
    padding: 173px 0 45px;
  }

  @include vp-mobile {
    padding: 95px 0 0;
  }

  &__breadcrumbs {
    margin: 0 auto 50px 0;

    @include vp-laptop {
      margin: 0 auto 30px 0;
    }

    @include vp-tablet {
      margin: 0 auto 70px 0;
    }

    @include vp-mobile {
      margin: 0 auto 27px 0;
    }
  }

  &__actions-wrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 40px;
  }

  &__actions-title {
    font-family: $ff-gilroy sans-serif;
    color: $color-raising-black;
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;

    @include vp-laptop {
      font-size: 20px;
      line-height: 26px;
    }

    @include vp-tablet {
      font-size: 24px;
      line-height: 29px;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 17px;
    }
  }

  &__list {
    display: flex;
    overflow: hidden;
    margin: 0;
    padding: 0;
    list-style-type: none;
    gap: 20px;
    height: 449px;

    @include vp-laptop {
      gap: 45px;
    }

    @include vp-tablet {
    }

    @include vp-mobile {
    }
  }

  &__item {
    display: flex;
    width: 400px;
    padding: 0;
    margin: 0;

    @include vp-laptop {
    }

    @include vp-tablet {
    }

    @include vp-mobile {
    }
  }
}
</style>
