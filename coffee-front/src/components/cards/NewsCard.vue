<script setup>
defineProps(["newsItem"]);
</script>

<template>
  <div class="news-card">
    <div class="news-card__image-wrapper">
      <picture>
        <source
          media="(max-width: 767px)"
          srcset="../../images/blog/new-picture-mobile.png"
        />
        <source
          media="(max-width: 1348px)"
          srcset="../../images/blog/new-picture-tablet.png"
        />
        <source
          media="(max-width: 1903px)"
          srcset="../../images/blog/new-picture-laptop.png"
        />
        <img
          class="news-card__image"
          src="../../images/blog/new-picture-desktop.png"
          width="400"
          height="400"
          alt="Картинка новости"
        />
      </picture>
    </div>
    <div class="news-card__inner">
      <h3 class="news-card__title">{{ newsItem.title }}</h3>
      <div class="news-card__content" v-for="paragraphText in newsItem.text">
        <p class="news-card__paragraph">{{ paragraphText }}</p>
      </div>
      <div class="news-card__bottom">
        <span class="news-card__author">{{ newsItem.author }}</span>
        <span class="news-card__date">{{ newsItem.date }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news-card {
  display: flex;
  box-shadow: 0px 0px 30px 0px $color-philippine-gray-20;
  width: 100%;
  border-radius: 20px;
  background-color: $color-white;
  font-family: $ff-gilroy, sans-serif;

  @include vp-laptop {
    box-shadow: 0px 0px 21px 0px $color-philippine-gray-20;
    border-radius: 14px;
  }

  @include vp-tablet {
    box-shadow: 0px 0px 61px 0px $color-philippine-gray-20;
    flex-direction: column;
    border-radius: 40px;
  }

  @include vp-mobile {
    box-shadow: 0px 0px 30px 0px $color-philippine-gray-20;
    border-radius: 10px;
  }

  &__image-wrapper {
    display: flex;
    width: 400px;
    height: 400px;
    overflow: hidden;
    border-radius: 20px 0 0 20px;

    @include vp-laptop {
      width: 238px;
      border-radius: 14px 0 0 14px;
    }

    @include vp-tablet {
      width: 700px;
      min-height: 280px;
      border-radius: 40px 40px 0 0;
    }

    @include vp-mobile {
      width: 340px;
      min-height: 137px;
      border-radius: 10px 10px 0 0;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &__inner {
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: $ff-gilroy, sans-serif;
    color: $color-black;
    padding: 40px 81px 0 84px;
    width: 624px;
    gap: 30px;

    @include vp-laptop {
      padding: 32px 57px 8px 60px;
      width: 442px;
      gap: 20px;
    }

    @include vp-tablet {
      padding: 62px 80px 72px 80px;
      width: 100%;
      min-height: 489px;
      gap: 50px;
    }

    @include vp-mobile {
      padding: 40px 30px 10px 40px;
      gap: 40px;
      min-height: 368px;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 25px;
    line-height: 32px;
    margin: 0;
    font-family: $ff-gilroy, sans-serif;
    padding: 0;

    @include vp-laptop {
      font-size: 18px;
      line-height: 24px;
    }

    @include vp-tablet {
      font-size: 25px;
      line-height: 32px;
    }

    @include vp-mobile {
      font-size: 16px;
      line-height: 21px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 28px;

    @include vp-laptop {
      gap: 18px;
    }

    @include vp-tablet {
      gap: 25px;
    }

    @include vp-mobile {
      gap: 18px;
    }
  }

  &__paragraph {
    font-size: 20px;
    line-height: 26px;
    margin: 0;
    padding: 0;
    font-family: $ff-gilroy, sans-serif;

    @include vp-laptop {
      font-size: 14px;
      line-height: 18px;
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

  &__link {
    margin: auto auto 0 0;
    position: relative;
    bottom: 16px;
    left: -24px;

    @include vp-laptop {
      bottom: 6px;
      left: -17px;
    }

    @include vp-tablet {
      left: -18px;
      bottom: 8px;
    }

    @include vp-mobile {
      bottom: 24px;
    }
  }
}
</style>
