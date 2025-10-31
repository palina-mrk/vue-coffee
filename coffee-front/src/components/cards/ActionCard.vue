<script setup>
const props = defineProps(["actionInfo"]);
</script>

<template>
  <div class="action-card">
    <p class="action-card__slogan">{{ actionInfo.slogan }}</p>
    <span class="action-card__until-str"
      >Срок акции: до&nbsp;{{ actionInfo.until }}</span
    >
  </div>
</template>

<style lang="scss" scoped>
.action-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: end;
  padding: 39px 20px;
  border-radius: 20px;
  gap: 88px;
  position: relative;
  background-color: $color-black-302;

  @include vp-laptop {
    padding: 24px 15px;
    border-radius: 14px;
    gap: 62px;
  }

  @include vp-tablet {
    padding: 149px 130px 149px 40px;
    border-radius: 16px;
    gap: 70px;
  }

  @include vp-mobile {
    padding: 60px 50px 60px 30px;
    border-radius: 10px;
    gap: 30px;
  }

  &::before {
    content: "";
    position: absolute;
    background-image: url("../../images/personal/actions-card-desktop.png");
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    border-radius: 20px;

    @include vp-laptop {
      background-image: url("../../images/personal/actions-card-laptop.png");
      border-radius: 14px;
    }

    @include vp-tablet {
      background-image: url("../../images/personal/actions-card-tablet.png");
      border-radius: 16px;
    }

    @include vp-mobile {
      background-image: url("../../images/personal/actions-card-mobile.png");
      border-radius: 10px;
    }
  }

  &__slogan {
    font-family: $ff-gilroy, sans-serif;
    color: $color-white;
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

  &__until-str {
    font-family: $ff-gilroy, sans-serif;
    color: $color-white;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;

    @include vp-laptop {
      font-size: 14px;
      line-height: 17px;
    }

    @include vp-tablet {
      font-size: 16px;
      line-height: 19px;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 16px;
    }
  }
}
</style>
