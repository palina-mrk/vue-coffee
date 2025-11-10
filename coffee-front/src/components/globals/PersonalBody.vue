<script setup>
import BgPersonal from "../backgrounds/BgPersonal.vue";
import SalesInfo from "../cards/SalesInfo.vue";
import CustomBreadcrumbs from "../navigation/CustomBreadcrumbs.vue";
import ActionCard from "../cards/ActionCard.vue";
import OrdersCard from "../cards/OrdersCard.vue";
import UsersCard from "../cards/UsersCard.vue";

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
    <section class="personal">
      <bg-personal></bg-personal>

      <div class="container">
        <h1 class="visually-hidden">Личный кабинет</h1>

        <custom-breadcrumbs class="personal__breadcrumbs"></custom-breadcrumbs>

        <div class="personal__top-forms">
          <users-card></users-card>
          <sales-info></sales-info>
        </div>

        <div class="personal__bottom-forms">
          <orders-card></orders-card>
        </div>

        <div class="personal__actions-wrapper">
          <h2 class="personal__actions-title">Персональные акции</h2>
          <ul class="personal__actions-list">
            <li
              class="personal__actions-item"
              v-for="actionInfo in actionsInfo"
            >
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
    padding: 140px 0 40px;
  }

  @include vp-tablet {
    padding: 173px 0 0;
  }

  @include vp-mobile {
    padding: 95px 0 20px;
  }

  &__breadcrumbs {
    margin: 0 auto 50px 0;

    @include vp-laptop {
      margin: 0 auto 35px 0;
    }

    @include vp-tablet {
      margin: 0 auto 40px 0;
    }

    @include vp-mobile {
      margin: 0 auto 30px 0;
    }
  }

  &__top-forms {
    border: 1px solid #e4e4e4;
    box-shadow: 0px 0px 50px $color-quick-silver-25;
    border-radius: 20px;
    background-color: $color-white;
    display: flex;
    justify-content: space-between;
    margin: 0 0 40px;
    overflow: hidden;

    @include vp-laptop {
      margin: 0 0 30px;
      border-radius: 14px;
    }

    @include vp-tablet {
      margin: 0 0 20px;
    }

    @include vp-mobile {
      flex-direction: column;
      box-shadow: 0px 0px 20px 0px $color-quick-silver-25;
      margin: 0 auto 40px;
      position: relative;
      width: calc(100% + 36px);
      max-width: calc($max-width-mobile + 36px);
      left: -18px;
    }
  }

  &__user-form {
    @include vp-mobile {
      width: 100%;
    }
  }

  &__sales-info {
    width: 540px;

    @include vp-mobile {
      width: 100%;
    }
  }

  &__bottom-forms {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 0 0 60px;

    @include vp-laptop {
      gap: 30px;
      margin: 0 0 40px;
    }

    @include vp-tablet {
      gap: 20px;
      margin: 0 0 60px;
    }

    @include vp-mobile {
      margin: 0 auto 36px;
      position: relative;
      width: calc(100% + 36px);
      max-width: calc($max-width-mobile + 36px);
      left: -18px;
    }
  }

  &__actions-wrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 38px;

    @include vp-laptop {
      gap: 28px;
    }

    @include vp-tablet {
      gap: 23px;
    }

    @include vp-mobile {
      gap: 34px;
    }
  }

  &__actions-title {
    font-family: $ff-gilroy, sans-serif;
    color: $color-raising-black;
    margin: 0;
    padding: 0;
    font-weight: 900;
    font-size: 30px;
    line-height: 38px;

    @include vp-laptop {
      font-size: 22px;
      line-height: 27px;
    }

    @include vp-tablet {
      font-size: 36px;
      line-height: 43px;
    }

    @include vp-mobile {
      font-size: 20px;
      line-height: 25px;
    }
  }

  &__actions-list {
    display: flex;
    overflow: hidden;
    margin: 0;
    padding: 0;
    list-style-type: none;
    gap: 20px;
    height: 449px;

    @include vp-laptop {
      height: 315px;
    }

    @include vp-tablet {
      height: 558px;
      width: calc(50% + 50vw);
      position: relative;
    }

    @include vp-mobile {
      height: 273px;
    }
  }

  &__actions-item {
    display: flex;
    width: 400px;
    padding: 0;
    margin: 0;

    @include vp-laptop {
      width: 280px;
    }

    @include vp-tablet {
      min-width: 460px;
    }

    @include vp-mobile {
      min-width: 250px;
    }
  }
}
</style>
