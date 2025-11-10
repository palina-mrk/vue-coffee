<script setup>
import { reactive } from "vue";
import QuestionCard from "../cards/QuestionCard.vue";
const questions = reactive([
  {
    question: "Какие виды кофе представлены в вашем магазине?",
    answer:
      "Мы предлагаем широкий ассортимент свежемолотого и зернового кофе различных сортов, включая арабику, робусту, смеси, а также специальные бленды.",
  },
  {
    question: "Есть ли доставка товаров для вендинга?",
    answer:
      "Да, мы предоставляем доставку товаров по всей территории России. Стоимость доставки зависит от региона и объема заказа.",
  },
  {
    question: "Какой минимальный заказ на чай и сухие продукты?",
    answer:
      "Минимальная сумма заказа не ограничена. Для суммы заказа от 5000 рублей действуют скидки и особые условия сотрудничества.",
  },
  {
    question: "Предоставляете ли сертификаты качества на продукцию?",
    answer:
      "Все наши товары имеют необходимые сертификаты соответствия и декларации качества, подтверждающие безопасность продукции.",
  },
  {
    question: "Можно ли заказать пробники перед крупным закупом?",
    answer:
      "Да, мы можем предложить образцы нашей продукции для предварительного тестирования. Свяжитесь с нами для оформления заявки на получение образцов.",
  },
]);
</script>

<template>
  <div class="questions-block">
    <picture>
      <source
        media="(max-width: 1903px)"
        srcset="../../images/blog/questions-corns-laptop.png"
      />
      <img
        class="questions-block__back-image"
        src="../../images/blog/questions-corns-desktop.png"
        width="971"
        height="646"
        alt="Кофейные зёрна"
      />
    </picture>

    <h2 class="questions-block__title">Частые вопросы:</h2>

    <picture>
      <source
        media="(max-width: 1903px)"
        srcset="../../images/blog/questions-cup-laptop.png"
      />
      <img
        class="questions-block__front-image"
        src="../../images/blog/questions-cup-desktop.png"
        width="669"
        height="579"
        alt="Чашка кофе"
      />
    </picture>

    <ul class="questions-block__list">
      <li class="questions-block__item" v-for="questionItem in questions">
        <question-card
          :question="questionItem.question"
          :answer="questionItem.answer"
        ></question-card>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.questions-block {
  width: 100%;
  justify-content: start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
  gap: 56px 20px;
  position: relative;

  @include vp-laptop {
    gap: 39px 20px;
  }

  @include vp-tablet {
    justify-content: start;
    flex-direction: column;
    gap: 28px;
    align-items: stretch;
  }

  @include vp-mobile {
    gap: 15px;
  }

  &__back-image {
    width: 971px;
    height: 646px;
    top: 73px;
    left: -5px;
    z-index: -1;
    position: absolute;

    @include vp-laptop {
      width: 688px;
      height: 457px;
      top: 45px;
      left: -5px;
    }

    @include vp-tablet {
      display: none;
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
    width: 100%;

    @include vp-laptop {
      font-size: 28px;
      line-height: 35px;
      line-height: 30px;
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

  &__front-image {
    margin: 180px auto auto 0;
    width: 649px;
    height: 458px;
    position: relative;

    @include vp-laptop {
      margin: 90px auto auto 0;
      width: 459px;
      height: 395px;
    }

    @include vp-tablet {
      display: none;
    }

    &::before {
      width: 100%;
      height: 100%;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      box-shadow: 5px 10px 10px 0px $color-black-15;

      @include vp-laptop {
        box-shadow: 3.55px 7px 7px 0px $color-black-15;
      }
    }
  }

  &__list {
    width: calc(100% - 700px);
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style-type: none;
    gap: 30px;

    @include vp-laptop {
      width: calc(100% - 500px);
      gap: 20px;
    }

    @include vp-tablet {
      width: 100%;
      gap: 20px;
    }

    @include vp-mobile {
      gap: 10px;
    }
  }

  &__item {
    padding: 0;
    margin: 0;
    width: 100%;
  }
}
</style>
