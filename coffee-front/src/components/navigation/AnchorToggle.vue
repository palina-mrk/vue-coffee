<script setup>
const props = defineProps(["anchorObjects"]);
</script>

<template>
  <ul :class="['anchors-list', 'anchors-list--' + anchorObjects.length]">
    <li class="anchors-list__item" v-for="anchor in anchorObjects">
      <a :href="'#' + anchor.link" class="anchors-list__link">
        {{ anchor.label }}
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.anchors-list {
  background-color: transparent;
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
  justify-content: space-between;
  gap: 18px;

  @include vp-tablet {
    flex-wrap: wrap;
  }

  @include vp-mobile {
    gap: 9px 18px;
  }

  &__item {
    margin: 0;
    padding: 0;
    display: flex;
    width: 100%;

    @include vp-tablet {
      width: calc(50% - 10px);
    }
  }

  &__link {
    display: block;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 16px 15px 12px;
    border-color: $color-chinese-silver;
    background-color: $color-cultured-f6;
    color: $color-ucla-gold;
    border-style: solid;
    border-width: 1px;
    font-weight: 600;
    font-size: 25px;
    font-family: $ff-gilroy, sans-serif;
    line-height: 30px;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    justify-content: center;
    cursor: pointer;
    user-select: none;

    @include vp-laptop {
      padding: 11px 10px 9px;
      border-radius: 4px;
      border-width: 0.7px;
      font-size: 18px;
      line-height: 22px;
    }

    @include vp-tablet {
      border-radius: 5px;
      border-width: 1px;
      background-color: $color-antiflash-white-f0;
      padding: 21px 20px 19px;
      font-size: 25px;
      line-height: 30px;
    }

    @include vp-mobile {
      padding: 13px 12px 11px;
      font-size: 12px;
      line-height: 14px;
    }
  }

  &__link:hover {
    background-color: $color-cornsilk;
    border-color: $color-ucla-gold;
  }
}

.anchors-list--3 {
  .anchors-list {
    &__item:first-child {
      @include vp-tablet {
        width: 100%;
      }
    }
  }
}
</style>
