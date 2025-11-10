<script setup>
defineProps(["question", "answer"]);
import { ref } from "vue";
const isExpanded = ref(false);
</script>

<template>
  <div class="question-card" @blur="isExpanded = false">
    <div class="question-card__top" @click="isExpanded = !isExpanded">
      <h3 class="question-card__title">{{ question }}</h3>
      <svg
        v-show="!isExpanded"
        class="question-card__svg"
        width="21"
        height="21"
        aria-hidden="true"
      >
        <use xlink:href="../../assets/btn-sprite.svg#icon-plus"></use>
      </svg>

      <svg
        v-show="isExpanded"
        class="question-card__svg question-card__svg--minus"
        width="21"
        height="3"
        aria-hidden="true"
      >
        <use xlink:href="../../assets/btn-sprite.svg#icon-minus"></use>
      </svg>
    </div>

    <p v-show="isExpanded" class="question-card__text">{{ answer }}</p>
  </div>
</template>

<style lang="scss" scoped>
.question-card {
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 30px 0px $color-spanish-gray-c95-25;
  font-family: $ff-gilroy, sans-serif;
  border-radius: 20px;
  background-color: $color-white;
  width: 100%;
  height: 100%;

  @include vp-laptop {
    box-shadow: 0px 0px 21px 0px $color-spanish-gray-c95-25;
    border-radius: 14px;
  }

  @include vp-tablet {
    box-shadow: 0px 0px 61.5px 0px $color-spanish-gray-c95-25;
    border-radius: 10px;
  }

  @include vp-mobile {
    box-shadow: 0px 0px 30px 0px $color-spanish-gray-c95-25;
  }

  &__top {
    display: flex;
    width: 100%;
    padding: 39px 33px 39px 39px;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    @include vp-laptop {
      padding: 27px 24px 27px 29px;
      gap: 15px;
    }

    @include vp-tablet {
      padding: 29px 41px 29px 59px;
      gap: 30px;
    }

    @include vp-mobile {
      padding: 19px 19px 23px 29px;
      gap: 20px;
    }
  }

  &__title {
    font-family: $ff-gilroy, sans-serif;
    font-weight: 600;
    color: $color-black;
    font-size: 25px;
    line-height: 32px;
    margin: 0;
    padding: 0;

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

  &__svg {
    width: 21px;
    height: 21px;
    color: $color-black;

    @include vp-laptop {
      width: 15px;
      height: 15px;
    }

    @include vp-tablet {
      width: 28px;
      height: 28px;
    }

    @include vp-mobile {
      width: 14px;
      height: 14px;
    }

    &:hover {
      color: $color-ucla-gold;
    }
  }

  &__svg--minus {
    height: 3px;

    @include vp-laptop {
      height: 2px;
    }

    @include vp-tablet {
      height: 4px;
    }

    @include vp-mobile {
      height: 2px;
    }
  }

  &__text {
    font-family: $ff-gilroy, sans-serif;
    color: $color-raising-black;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    padding: 10px 103px 39px 44px;
    margin: 0;

    @include vp-laptop {
      font-size: 14px;
      line-height: 18px;
      padding: 3px 83px 39px 29px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 26px;
      padding: 0 73px 29px 59px;
      margin: -10px 0 0;
    }

    @include vp-mobile {
      font-size: 12px;
      line-height: 16px;
      padding: 3px 26px 25px 29px;
      margin: 0;
    }
  }
}
</style>
