<script setup>
import PreparationBlock from "../toggles/PreparationBlock.vue";

import { ref, reactive } from "vue";

const cookingWay = ref("");

const cookingCoffee = reactive({
  Турка: {
    title: "Как сварить кофе в турке",
    paragraph:
      "Для приготовления кофе в турке необходимо мелко смолотый кофе залить холодной водой и поставить на слабый огонь. Когда пенка начнет подниматься, снимите турку с огня, дождитесь оседания пенки и повторите процедуру два-три раза. Готовый напиток процедите и подавайте горячим.",
  },
  "Френч-пресс": {
    title: "Как приготовить кофе во френч-прессе",
    paragraph:
      "Засыпьте грубого помола кофе в френч-пресс, залейте горячей водой (около 95°C) и оставьте настояться 4-5 минут. Затем медленно опустите поршень, отделяя гущу от жидкости. Подавайте сразу же, пока кофе горячий.",
  },
  Мока: {
    title: "Как приготовить кофе во моке",
    paragraph:
      "Налейте холодную воду в нижнюю камеру моки, засыпьте молотый кофе средней обжарки в фильтр, закрутите верхнюю часть и поставьте на средний огонь. Дождитесь, пока вся вода перейдет в верхний резервуар, снимите с огня и подавайте.",
  },
  Эспрессо: {
    title: "Как приготовить эспрессо",
    paragraph:
      "Используя кофемашину эспрессо, утрамбуйте свежемолотый кофе среднего помола в портафильтре, установите его в группу и включите пролив. Эспрессо должен течь тонкой струйкой в течение 25-30 секунд, образуя густой крем сверху.",
  },
  Воронка: {
    title: "Как приготовить кофе при помощи воронки",
    paragraph:
      "Поместите бумажный фильтр в воронку, насыпьте туда средне-мелкого помола кофе и залейте небольшим количеством горячей воды (около 95°C), чтобы кофе пропитался. Постепенно добавьте оставшуюся воду, давая напитку равномерно стекать в емкость внизу.",
  },
  Аэропресс: {
    title: "Как приготовить кофе в аэропрессе",
    paragraph:
      "Нагрейте воду до температуры около 95°C, поместите фильтрованный кофе мелкого помола в аэропресс, залейте водой и размешайте. Через минуту аккуратно нажмите на поршень, выдавливая готовый кофе в кружку.",
  },
  Чашка: {
    title: "Как приготовить молотый кофе в чашке",
    paragraph:
      "Самый простой способ — положить ложку молотого кофе в теплую чашку, добавить кипятка и перемешать. Оставьте настояться пару минут, чтобы осела гуща, и пейте осторожно, стараясь избегать попадания осадка.",
  },
  Автомат: {
    title: "Как приготовить кофе в автомате",
    paragraph:
      "Современные автоматические кофемашины позволяют приготовить разнообразные виды кофе одним нажатием кнопки. Просто выберите нужный рецепт, машина сама перемелет зерна, сварит кофе и нальет его в вашу чашку.",
  },
});
</script>

<template>
  <div class="cooking__wrapper">
    <h2 class="cooking__title">Приготовление кофе разными способами</h2>

    <!-- Способ приготовления -->
    <preparation-block
      class="cooking__cooking-cards"
      @set-value="cookingWay = $event"
    ></preparation-block>

    <h3 class="cooking__title" v-if="cookingWay.length > 0">
      {{ cookingCoffee[cookingWay].title }}
    </h3>
    <p class="cooking__paragraph" v-if="cookingWay.length > 0">
      {{ cookingCoffee[cookingWay].paragraph }}
    </p>

    <div class="cooking__image-wrapper" v-if="cookingWay.length > 0">
      <picture class="cooking__picture">
        <source
          media="(max-width: 768px)"
          srcset="../../images/coffee-view/three-cups-mobile.png"
        />
        <source
          media="(max-width: 1348px)"
          srcset="../../images/coffee-view/three-cups-tablet.png"
        />
        <source
          media="(max-width: 1904px)"
          srcset="../../images/coffee-view/three-cups-laptop.png"
        />
        <img
          src="../../images/coffee-view/three-cups-desktop.png"
          width="1660"
          height="550"
          alt="Три чашки кофе"
        />
      </picture>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cooking {
  &__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 60px;

    @include vp-laptop {
      gap: 40px;
    }

    @include vp-tablet {
      gap: 30px;
    }

    @include vp-mobile {
      gap: 20px;
    }
  }

  &__title {
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

  &__subtitle {
    font-family: $ff-gilroy, sans-serif;
    color: $color-black;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    margin: 0;
    padding: 0;

    @include vp-laptop {
      font-size: 22px;
      line-height: 26px;
    }

    @include vp-tablet {
      font-size: 30px;
      line-height: 39px;
    }

    @include vp-mobile {
      font-size: 16px;
      line-height: 19px;
    }
  }

  &__paragraph {
    font-family: $ff-gilroy, sans-serif;
    color: $color-raising-black;
    font-weight: 500;
    font-size: 25px;
    line-height: 32px;
    padding: 0;
    margin: 0;
    text-indent: 64px;

    @include vp-laptop {
      font-size: 18px;
      line-height: 23px;
      text-indent: 48px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 26px;
      text-indent: 45px;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 18px;
      text-indent: 24px;
    }
  }

  &__paragraph + .cooking__image-wrapper {
    margin-top: 10px;

    @include vp-laptop {
      margin-top: 5px;
    }

    @include vp-tablet {
      margin-top: 20px;
    }

    @include vp-mobile {
      margin-top: 0;
    }
  }

  &__image-wrapper {
    border-radius: 20px;
    overflow: hidden;
    width: 100%;
    height: 550px;
    display: flex;

    @include vp-laptop {
      border-radius: 14px;
      height: 389px;
    }

    @include vp-tablet {
      height: 237px;
      border-radius: 10px;
    }

    @include vp-mobile {
      height: 116px;
    }
  }
}
</style>
