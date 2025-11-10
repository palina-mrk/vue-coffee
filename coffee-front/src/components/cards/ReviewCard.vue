<script setup>
import SliderStars from "../sliders/SliderStars.vue";
defineProps(["review"]);
</script>

<template>
  <div class="review-card">
    <div class="review-card__top">
      <p class="review-card__quote-sign">“”</p>
      <div class="review-card__heading">
        <span class="review-card__title">{{ review.title }}</span>
        <span class="review-card__date">{{ review.date }}</span>
      </div>
      <slider-stars
        class="review-card__stars slider-stars--review"
        :rating="review.rate"
      ></slider-stars>
      <p class="review-card__text">{{ review.text }}</p>
    </div>
    <div class="review-card__bottom">
      <picture class="review-card__avatar-picture">
        <source
          media="(max-width: 767px)"
          srcset="../../images/coffee-view/comment-avatar-mobile.png"
        />
        <source
          media="(max-width: 1348px)"
          srcset="../../images/coffee-view/comment-avatar-tablet.png"
        />
        <source
          media="(max-width: 1903px)"
          srcset="../../images/coffee-view/comment-avatar-laptop.png"
        />
        <img
          class="review-card__avatar-image"
          src="../../images/coffee-view/comment-avatar-desktop.png"
          width="70"
          height="70"
          alt="Иконка автора"
        />
      </picture>

      <div class="review-card__user-info">
        <div class="review-card__user-name">{{ review.author }}</div>
        <div class="review-card__user-city">{{ review.address }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.review-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 30px 0px $color-spanish-gray-c95-25;
  border-radius: 20px;
  overflow: hidden;

  @include vp-laptop {
    box-shadow: 0px 0px 22px 0px $color-spanish-gray-c95-25;
    border-radius: 14px;
  }

  @include vp-tablet {
    box-shadow: 0px 0px 61px 0px $color-spanish-gray-c95-25;
    border-radius: 10px;
  }

  @include vp-mobile {
    box-shadow: 0px 0px 30px 0px $color-spanish-gray-c95-25;
  }

  &__top {
    border-radius: 20px 20px 0 0;
    background-color: $color-white;
    padding: 42px 140px 82px 80px;
    display: flex;
    flex-direction: column;

    @include vp-laptop {
      border-radius: 14px 14px 0 0;
      padding: 36px 100px 69px 58px;
    }

    @include vp-tablet {
      border-radius: 10px 10px 0 0;
      padding: 40px 70px 50px 50px;
    }

    @include vp-mobile {
      padding: 20px 35px 20px 20px;
    }
  }

  &__quote-sign {
    font-family: $ff-gilroy, sans-serif;
    color: $color-black;
    font-weight: 900;
    font-size: 40px;
    line-height: 51px;
    margin: 0;
    padding: 0;

    @include vp-laptop {
      font-size: 28px;
      line-height: 33px;
    }

    @include vp-tablet {
      font-size: 30px;
      line-height: 39px;
      margin: 0 0 15px;
    }

    @include vp-mobile {
      font-size: 20px;
      line-height: 27px;
      margin: 0;
    }
  }

  &__heading {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 17px;

    @include vp-laptop {
      margin: 0 0 7px;
    }

    @include vp-tablet {
      margin: 0 0 28px;
    }

    @include vp-mobile {
      margin: 0 0 8px;
    }
  }

  &__title {
    font-family: $ff-gilroy, sans-serif;
    color: $color-black;
    font-weight: 700;
    font-size: 25px;
    line-height: 32px;
    padding: 0;
    margin: 0;

    @include vp-laptop {
      font-size: 18px;
      line-height: 22px;
    }

    @include vp-tablet {
      font-size: 32px;
      line-height: 43px;
    }

    @include vp-mobile {
      font-size: 16px;
      line-height: 21px;
    }
  }

  &__date,
  &__text,
  &__user-city {
    font-family: $ff-gilroy, sans-serif;
    color: $color-black;
    font-size: 20px;
    line-height: 26px;
    margin: 0;
    padding: 0;

    @include vp-laptop {
      font-size: 14px;
      line-height: 18px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 26px;
    }

    @include vp-mobile {
      font-size: 12px;
      line-height: 16px;
    }
  }

  &__date,
  &__text,
  &__user-city {
    font-weight: 500;
  }

  &__stars {
    margin: 0 0 42px;

    @include vp-laptop {
      margin: 0 0 21px;
    }

    @include vp-tablet {
      margin: 0 0 42px;
    }

    @include vp-mobile {
      margin: 0 0 21px;
    }
  }

  &__text {
    margin: 0 30px 0 0;

    @include vp-laptop {
      margin: 0 35px 0 0;
    }

    @include vp-mobile {
      margin: 0 15px 0 0;
    }
  }

  &__date,
  &__user-city {
    @include vp-tablet {
      opacity: 12%;
    }
  }

  &__user-name {
    font-weight: 700;
    font-family: $ff-gilroy, sans-serif;
    color: $color-black;
    font-size: 20px;
    line-height: 26px;
    margin: 0;
    padding: 0;

    @include vp-laptop {
      font-size: 14px;
      line-height: 18px;
    }

    @include vp-tablet {
      font-size: 25px;
      line-height: 33px;
    }

    @include vp-mobile {
      font-size: 12px;
      line-height: 16px;
    }
  }

  &__bottom {
    border-radius: 0 0 20px 20px;
    background-color: $color-cornsilk;
    padding: 25px 80px;
    display: flex;
    gap: 50px;

    @include vp-laptop {
      border-radius: 0 0 14px 14px;
      padding: 17px 58px;
      gap: 35px;
    }

    @include vp-tablet {
      border-radius: 0 0 10px 10px;
      padding: 11px 45px;
      gap: 30px;
    }

    @include vp-mobile {
      padding: 10px 20px;
      gap: 19px;
    }
  }

  &__avatar-image {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;

    @include vp-laptop {
      width: 50px;
      height: 50px;
    }

    @include vp-tablet {
      width: 90px;
      height: 90px;
    }

    @include vp-mobile {
      width: 40px;
      height: 40px;
    }
  }

  &__user-info {
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;

    @include vp-tablet {
      justify-content: center;
      gap: 8px;
    }

    @include vp-mobile {
      gap: 5px;
    }
  }
}
</style>
