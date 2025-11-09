<script setup>
import { reactive } from "vue";
</script>

<template>
  <div class="questions-block">
    <div class="questions-block__images">
      <picture>
        <source
          media="(max-width: 1903px)"
          srcset="../../images/advantages/advantages-corns-laptop.png"
        />
        <img
          class="advantages__back-image"
          src="../../images/advantages/advantages-corns-desktop.png"
          width="755"
          height="503"
          alt="Кофейные зёрна"
        />
      </picture>
      <picture>
        <source
          media="(max-width: 1903px)"
          srcset="../../images/advantages/advantages-cup-laptop.png"
        />
        <img
          class="advantages__front-image"
          src="../../images/advantages/advantages-cup-desktop.png"
          width="504"
          height="433"
          alt="Чашка кофе"
        />
      </picture>
    </div>
    <div class="questions-block__content">
      <h2 class="questions-block__title">
        Частые вопросы:
      </h2>
      <ul class="questions-block__list">
        <li class="questions-block__item">
          <div class="advantages__item-icon">
            <svg
              class="advantages__item-svg"
              width="36"
              height="30"
              aria-hidden="true"
            >
              <use
                xlink:href="../../assets/advantages-sprite.svg#icon-consult"
              ></use>
            </svg>
          </div>
          <div class="advantages__item-text">
            <p class="advantages__item-title">Консультации 24/7</p>
            <p class="advantages__item-description">
              Наши специалисты готовы всегда помочь и&nbsp;подсказать вам
              с&nbsp;выбором кофе или другой продукции.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.questions-block {
    width: 100%;
    justify-content: start;
    display: flex;
    gap: 85px;

    @include vp-laptop {
      gap: 65px;
    }
  

  &__images {
    width: 755px;
    display: flex;
    position: relative;

    @include vp-laptop {
      width: 534px;
    }

    @include vp-tablet {
      display: none;
    }
  }

  &__back-image {
    width: 755px;
    height: 503px;
    top: 107px;
    left: 0px;
    z-index: -1;
    position: absolute;

    @include vp-laptop {
      width: 534px;
      height: 355px;
      top: 78px;
      left: 0px;
    }
  }

  &__front-image {
    width: 516px;
    height: 433px;
    margin: 280px auto 0 0;

    @include vp-laptop {
      width: 366px;
      height: 307px;
      margin: 200px auto 0 0;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  &__title {
    margin: 0 0 78px;
    padding: 0;
  font-family: $ff-gilroy, sans-serif;
    font-weight: 900;
    font-size: 50px;
    line-height: 62px;
    max-width: 580px;

    @include vp-laptop {
      font-size: 35px;
      line-height: 44px;
      margin: 0 0 54px;
      max-width: 410px;
    }

    @include vp-tablet {
      font-size: 40px;
      line-height: 50px;
      margin: 0 0 60px;
      max-width: 460px;
    }

    @include vp-mobile {
      font-size: 20px;
      line-height: 25px;
      margin: 0 0 30px;
      max-width: 220px;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 0;
    padding: 0;
    list-style-type: none;
    gap: 59px;

    @include vp-laptop {
      gap: 38px;
    }

    @include vp-tablet {
      gap: 60px;
    }

    @include vp-mobile {
      gap: 30px;
    }
  }

  &__item {
    padding: 0;
    margin: 0;
    display: flex;
    gap: 50px;
    align-items: start;

    @include vp-laptop {
      gap: 30px;
    }

    @include vp-tablet {
      gap: 40px;
    }

    @include vp-mobile {
      gap: 21px;
    }
  }
}
</style>
