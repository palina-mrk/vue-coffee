<script setup>
import SliderStars from "../sliders/SliderStars.vue"
defineProps(["review"])
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
      :rating="review.rate"></slider-stars>
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

      <div class="user-card__user-info">
        <div class="review-card__user-name">{{ review.author }}</div>
        <div class="review-card__user-city">{{ review.address }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.review-card {
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
    padding: 40px 140px 80px 80px;
    display: flex;
    flex-direction: column;

    @include vp-laptop {
      border-radius: 14px 14px 0 0;
    }

    @include vp-tablet {
      border-radius: 10px 10px 0 0;
    }
  }

  &__quote-sign {
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

  &__heading {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 0 0 20px;
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
      line-height: 23px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 26px;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 18px;
    }
  }

  &__date, 
  &__text,
  &__user-city,
  &__user-name {
    font-family: $ff-gilroy, sans-serif;
    color: $color-black;
    font-size: 20px;
    line-height: 26px;
    margin: 0;
    padding: 0;

    @include vp-laptop {
      font-size: 22px;
      line-height: 27px;
    }

    @include vp-tablet {
      font-size: 30px;
      line-height: 39px;
    }

    @include vp-mobile {
      font-size: 18px;
      line-height: 23px;
    }
  }

  &__date, 
  &__text,
  &__user-city {
    font-weight: 500;
  }

  &__user-name {
    font-weight: 700;
  }

  &__bottom {
    border-radius: 0 0 20px 20px;
    background-color: $color-cornsilk;
    padding: 25px 80px;
    display: flex;
    align-items: center;
    gap: 50px;

    @include vp-laptop {
      border-radius: 0 0 14px 14px;
    }

    @include vp-tablet {
      border-radius: 0 0 10px 10px;
    }
  }

  &__avatar-image {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
  }

  &__user-info {
    display: flex;
    align-items: start;
    justify-content: space-between;
  }
}
</style>
