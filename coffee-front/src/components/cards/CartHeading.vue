<script setup>
defineProps(["sale"]);
</script>

<template>
  <div class="product-line">
    <span class="product-line__text-item">Удалить товар</span>
    <span class="product-line__text-item">Наименование товара</span>
    <span class="product-line__text-item">Цена</span>
    <span class="product-line__text-item">Количество</span>
    <span class="product-line__text-item"
      >Скидка {{ sale ? `(-${sale}%)` : "" }}</span
    >
    <span class="product-line__text-item">Итого</span>
  </div>
</template>

<style lang="scss" scoped>
.product-line {
  width: 100%;
  height: 100%;
  display: grid;
  gap: 10px;
  justify-items: start;
  grid-template-columns: 213px 1fr 130px 215px 185px 110px;
  padding: 0 7px 0 0;

  @include vp-laptop {
    gap: 5px;
    padding: 0 3px 0 0;
    grid-template-columns: 152px 1fr 95px 156px 127px 82px;
  }

  &__text-item {
    color: $color-raising-black;
    font-family: $ff-gilroy, sans-serif;
    font-weight: 500px;
    font-size: 20px;
    line-height: 24px;

    @include vp-laptop {
      font-size: 14px;
      line-height: 17px;
    }
  }
}
</style>
