<script setup>
import BgContacts from "../backgrounds/BgContacts.vue";

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
    <section class="contacts">
      <bg-contacts></bg-contacts>

      <div class="container">
        <h1 class="visually-hidden">Контакты</h1>

        <custom-breadcrumbs class="contacts__breadcrumbs"></custom-breadcrumbs>

        <custom-toggle
          class="contacts__toggle"
          :initialValues="toggleValues"
          :toggleName="contacts"
          :selected="selectedPageVariant"
          @toggle-value="selectedPageVariant = $event"
        ></custom-toggle>

        <div class="contacts__wrapper">
          <ul v-show="selectedPageVariant == 'contacts'" class="contacts__list">
            <li class="contacts__item">
              <p class="contacts__item-title">Связаться с&nbsp;нами:</p>
              <div class="contacts__item-content">
                <a
                  class="contacts__item-link"
                  href="tel:+74012375343"
                  aria-label="Ссылка на контактный телефон"
                >
                  <span class="contacts__icon-wrapper">
                    <svg
                      class="contacts__icon-svg"
                      width="13"
                      height="13"
                      aria-hidden="true"
                    >
                      <use
                        xlink:href="../../assets/contacts-sprite.svg#icon-phone"
                      ></use>
                    </svg>
                  </span>
                  <span class="contacts__item-line"
                    >+7 (401) 237 53&nbsp;43</span
                  >
                </a>
                <a
                  class="contacts__item-link"
                  href="mailto:Import@kldrefine.com"
                  aria-label="Ссылка на email"
                >
                  <span class="contacts__icon-wrapper">
                    <svg
                      class="contacts__icon-svg"
                      width="13"
                      height="10"
                      aria-hidden="true"
                    >
                      <use
                        xlink:href="../../assets/contacts-sprite.svg#icon-mail"
                      ></use>
                    </svg>
                  </span>
                  <span class="contacts__item-line">Import@kldrefine.com</span>
                </a>
              </div>
            </li>
            <li class="contacts__item">
              <p class="contacts__item-title">Юридический адрес:</p>
              <div class="contacts__item-content">
                <p class="contacts__item-paragraph">
                  Российская Федерация, 238310, Калининградская область,
                  Гурьевский район, поселок Васильково, улица Шатурская,
                  дом&nbsp;4А
                </p>
              </div>
            </li>
            <li class="contacts__item">
              <p class="contacts__item-title">Адрес склада:</p>
              <div class="contacts__item-content">
                <p class="contacts__item-paragraph">
                  Московская область, Балашиха, Западная промзона, Шоссе
                  энтузиастов&nbsp;1
                </p>
              </div>
            </li>
          </ul>

          <ul
            v-show="selectedPageVariant == 'our-shops'"
            class="contacts__list"
          >
            <li class="contacts__item">
              <p class="contacts__item-title">
                Наши магазины г.&nbsp;Санкт-Петербург
              </p>
              <ul class="contacts__item-sublist">
                <li class="contacts__item-line">Гороховая, 53</li>
                <li class="contacts__item-line">Московский, 53</li>
              </ul>
            </li>

            <li class="contacts__item">
              <p class="contacts__item-title">
                Наши магазины Калининградская&nbsp;обл.
              </p>
              <ul class="contacts__item-sublist">
                <li class="contacts__item-line">Советск, Гончарова 2а</li>
                <li class="contacts__item-line">
                  Черняховск, Пионерская&nbsp;1
                </li>
                <li class="contacts__item-line">Ульяны-Громовой 15</li>
                <li class="contacts__item-line">Советский проспект 6а</li>
                <li class="contacts__item-line">Гурьевск, Каштановая 1г</li>
                <li class="contacts__item-line">Черняховского&nbsp;15</li>
                <li class="contacts__item-line">Панина 2а</li>
                <li class="contacts__item-line">Ленинский 8Б</li>
                <li class="contacts__item-line">Аксакова 133</li>
                <li class="contacts__item-line">Липовая Аллея&nbsp;2</li>
              </ul>
            </li>
          </ul>

          <div class="contacts__map-wrapper">
            <picture>
              <source
                media="(max-width: 767px)"
                srcset="../../images/contacts/map-mobile.png"
              />
              <source
                media="(max-width: 1348px)"
                srcset="../../images/contacts/map-tablet.png"
              />
              <source
                media="(max-width: 1904px)"
                srcset="../../images/contacts/map-laptop.png"
              />
              <img
                class="contacts__map-image"
                src="../../images/contacts/map-desktop.png"
                width="960"
                height="526"
                alt="Карта с местонахождением интернет-магазина"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.contacts {
  width: 100%;
  height: 100%;
  padding: 202px 0 220px;
  margin: 0;
  overflow: hidden;
  position: relative;
  color: $color-raising-black;
  font-family: $ff-gilroy, sans-serif;
  font-weight: 500;

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
    font-family: $ff-gilroy, sans-serif;
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
    font-family: $ff-gilroy, sans-serif;
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
