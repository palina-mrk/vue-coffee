<script setup>
import BgPersonal from "../backgrounds/BgPersonal.vue";

import CustomBreadcrumbs from "../navigation/CustomBreadcrumbs.vue";
import CustomToggle from "../toggles/CustomToggle.vue";

import { reactive, ref } from "vue";
const toggleValues = reactive([
  {
    label: "Контакты",
    value: "contacts",
  },
  {
    label: "Наши магазины",
    value: "our-shops",
  },
]);
const selectedPageVariant = ref("contacts");
</script>

<template>
  <main>
    <section class="personal">
      <bg-personal></bg-personal>

      <div class="container">
        <h1 class="visually-hidden">Личный кабинет</h1>

        <custom-breadcrumbs class="personal__breadcrumbs"></custom-breadcrumbs>

        <custom-toggle
          class="contacts__toggle"
          :initialValues="toggleValues"
          :toggleName="contacts"
          :selected="selectedPageVariant"
          @toggle-value="selectedPageVariant = $event"
        ></custom-toggle>

        
        <div class="personal__forms-wrapper">
          <cart-card class="personal__user-card"></cart-card>
          <delivery-form class="personal__orders-card"></delivery-form>
        </div>

        <div class="personal__actions-wrapper">
          <h2 class="personal__actions-title">Персональные акции</h2>
          <ul class="personal__actions-list">
            <li class="personal__actions-item"></li>
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
  padding: 202px 0 220px;
  margin: 0;
  color: $color-raising-black;
  font-family: $ff-gilroy sans-serif;
  font-weight: 500;
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

  &__toggle {
    height: 60px;
    width: 100%;
    margin: 0 0 90px;

    @include vp-laptop {
      height: 42px;
      margin: 0 0 64px;
    }

    @include vp-tablet {
      height: 160px;
      margin: 0 0 60px;
    }

    @include vp-mobile {
      height: 90px;
      margin: 0 0 40px;
    }
  }

  &__wrapper {
    width: 100%;
    justify-content: space-between;
    display: flex;

    @include vp-tablet {
      flex-direction: column;
      gap: 60px;
    }

    @include vp-mobile {
      gap: 40px;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 0;
    padding: 0;
    list-style-type: none;
    gap: 50px;

    @include vp-laptop {
      gap: 45px;
    }

    @include vp-tablet {
      gap: 20px;
      min-height: 227px;
      max-height: 321px;
      flex-wrap: wrap;
    }

    @include vp-mobile {
      gap: 30px;
      min-height: unset;
      max-height: unset;
    }
  }

  &__item {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: start;

    @include vp-laptop {
      gap: 20px;
    }

    @include vp-tablet {
      gap: 11px;
      width: 340px;
    }

    @include vp-mobile {
      gap: 20px;
    }
  }

  &__item:nth-last-child(2) {
    @include vp-tablet {
      order: 2;
    }

    @include vp-mobile {
      order: unset;
    }
  }

  &__item-title {
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    font-family: $ff-gilroy sans-serif;
    color: $color-black;

    @include vp-laptop {
      font-size: 22px;
      line-height: 26px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 26px;
      max-width: 220px;
    }

    @include vp-mobile {
      font-size: 18px;
      line-height: 22px;
    }
  }

  &__item-content {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @include vp-laptop {
      gap: 7px;
    }

    @include vp-tablet {
      gap: 3px;
    }

    @include vp-mobile {
      gap: 20px;
      flex-direction: column-reverse;
    }
  }

  &__item-sublist {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  &__item-paragraph,
  &__item-link,
  &__item-line {
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: $ff-gilroy sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: $color-raising-black;
    max-width: 540px;

    @include vp-laptop {
      font-size: 14px;
      line-height: 19px;
      max-width: 375px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 26px;
      max-width: 340px;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 18px;
      max-width: unset;
    }
  }

  &__item-link {
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &:hover .contacts__item-line {
      position: relative;
    }

    &:hover .contacts__item-line::after {
      background-color: $color-ucla-gold;
      bottom: -2px;
      height: 2px;
      left: 0;
      right: 0;
      position: absolute;
      content: "";

      @include vp-laptop {
        height: 1px;
        bottom: -1px;
      }

      @include vp-tablet {
        bottom: -1px;
      }
    }

    &:hover .contacts__icon-wrapper {
      @include vp-mobile {
        border-color: $color-raising-black;
        color: $color-raising-black;
      }
    }
  }

  &__icon-wrapper {
    display: none;

    @include vp-mobile {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $color-ucla-gold;
      color: $color-white;
      border-radius: 50%;
      border-width: 1px;
      border-style: solid;
      width: 22px;
      height: 22px;
    }
  }

  &__icon-svg {
    @include vp-mobile {
      width: 12px;
      height: 12px;
    }
  }

  &__map-wrapper {
    width: 960px;
    height: 526px;
    border-radius: 5px;
    overflow: hidden;
    border-width: 1px;
    border-color: $color-quick-silver-a4;
    border-style: solid;
    display: flex;

    @include vp-laptop {
      width: 680px;
      height: 372px;
    }

    @include vp-tablet {
      width: 100%;
    }

    @include vp-mobile {
      width: 340px;
      height: 288px;
    }
  }

  &__map-image {
    width: 100%;
    height: 100%;
  }
}
</style>
