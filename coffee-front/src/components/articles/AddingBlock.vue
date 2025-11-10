<script setup>
import { computed, ref, reactive } from "vue";
</script>

<template>
  <div class="adding__wrapper">
    <h2 class="adding__title">Дополнительные факты о&nbsp;кофе</h2>
    <h3 class="adding__subtitle">Происхождение названия</h3>
    <p class="adding__paragraph">
      Название &laquo;coffee&raquo; произошло от&nbsp;итальянского слова
      &laquo;caff&egrave;&raquo;, которое, в&nbsp;свою очередь, заимствовано
      из&nbsp;турецкого &laquo;kahve&raquo;. Турецкое слово восходит
      к&nbsp;арабскому слову &laquo;qahwah&raquo;, означающему вино или напиток,
      приготовленный из&nbsp;зерен кофейного дерева. Это отражает историческое
      распространение кофе из&nbsp;Аравийского полуострова в&nbsp;Европу.
    </p>

    <h3 class="adding__subtitle">Роль кофе в&nbsp;культуре</h3>
    <p class="adding__paragraph">
      Кофе стал неотъемлемой частью многих культур и&nbsp;традиций.
      Во&nbsp;Франции принято пить кофе утром вместе с&nbsp;круассанами,
      в&nbsp;Италии&nbsp;&mdash; наслаждаться маленьким чашечкой эспрессо после
      обеда, а&nbsp;в&nbsp;Турции&nbsp;&mdash; проводить долгие беседы
      за&nbsp;чашечкой густого черного кофе. Многие кафе стали местом встреч
      друзей, деловых переговоров и&nbsp;творческих обсуждений.
    </p>

    <h3 class="adding__subtitle">Производство и&nbsp;торговля</h3>
    <p class="adding__paragraph">
      Сегодня Бразилия остается крупнейшим производителем кофе в&nbsp;мире,
      производя около трети мирового объема. Другие крупные производители
      включают Вьетнам, Колумбию и&nbsp;Индонезию. Торговля кофе составляет
      значительную долю международной торговли сельскохозяйственной продукцией,
      обеспечивая доход миллионам фермеров и&nbsp;рабочих.
    </p>

    <h3 class="adding__subtitle">Альтернативные способы употребления</h3>
    <p class="adding__paragraph">
      Помимо традиционного способа заваривания, существуют альтернативные методы
      потребления кофе. Например, холодные напитки, такие как фраппе
      и&nbsp;айс-латте, популярны летом. Некоторые предпочитают добавлять
      специи, такие как корица или кардамон, для придания уникального аромата.
      Также существует растущая тенденция употреблять кофе в&nbsp;виде сиропа
      или порошка для добавления в&nbsp;десерты и&nbsp;выпечку.
    </p>

    <div class="adding__image-wrapper">
      <picture class="cooking__picture">
        <source
          media="(max-width: 768px)"
          srcset="../../images/coffee-view/three-glasses-mobile.png"
        />
        <source
          media="(max-width: 1348px)"
          srcset="../../images/coffee-view/three-glasses-tablet.png"
        />
        <source
          media="(max-width: 1904px)"
          srcset="../../images/coffee-view/three-glasses-laptop.png"
        />
        <img
          src="../../images/coffee-view/three-glasses-desktop.png"
          width="1660"
          height="550"
          alt="Три стакана кофе"
        />
      </picture>
    </div>

    <h2 class="adding__title">Ещё немного интересного о&nbsp;кофе</h2>
    <h3 class="adding__subtitle">Биохимия кофе</h3>
    <p class="adding__paragraph">
      Основное активное вещество кофе&nbsp;&mdash; кофеин, алкалоид,
      стимулирующий центральную нервную систему. Помимо кофеина, зерна содержат
      хлорогеновую кислоту, обладающую антиоксидантными свойствами, а&nbsp;также
      ряд витаминов и&nbsp;минералов, включая калий, магний и&nbsp;витамины
      группы B.&nbsp;Именно эта комбинация веществ обеспечивает комплексный
      эффект на&nbsp;организм.
    </p>

    <h3 class="adding__subtitle">Эффект на&nbsp;здоровье</h3>
    <p class="adding__paragraph">
      Исследования показывают, что умеренное потребление кофе
      (до&nbsp;трех-четырех чашек в&nbsp;день) связано с&nbsp;рядом
      положительных эффектов для здоровья. Регулярное употребление кофе снижает
      риск развития сердечно-сосудистых заболеваний, некоторых видов рака,
      диабета второго типа и&nbsp;даже депрессии. Тем не&nbsp;менее важно
      помнить, что избыток кофеина может привести к&nbsp;негативным
      последствиям, таким как нервозность, учащённое сердцебиение
      и&nbsp;проблемы со&nbsp;сном.
    </p>

    <h3 class="adding__subtitle">Искусство бариста</h3>
    <p class="adding__paragraph">
      Профессиональные бариста создают настоящие произведения искусства
      из&nbsp;кофе. Отточенные техники взбивания молока позволяют создавать
      латте-арт&nbsp;&mdash; рисунки на&nbsp;поверхности молочной пенки. Этот
      процесс требует мастерства и&nbsp;терпения, ведь малейшая ошибка может
      испортить всю композицию. Соревнования среди бариста привлекают внимание
      публики и&nbsp;способствуют развитию новых техник подачи кофе.
    </p>

    <h3 class="adding__subtitle">Экологические аспекты производства</h3>
    <p class="adding__paragraph">
      Производство кофе оказывает значительное влияние на&nbsp;окружающую среду.
      Большая часть кофе выращивается на&nbsp;небольших фермах, часто
      расположенных в&nbsp;тропиках. Интенсивное использование удобрений
      и&nbsp;пестицидов негативно сказывается на&nbsp;экосистемах. Поэтому всё
      большее значение приобретают экологически чистые методы выращивания, такие
      как биологическое земледелие и&nbsp;восстановление лесов вокруг кофейных
      плантаций.
    </p>

    <div class="adding__image-wrapper">
      <picture class="adding__picture">
        <source
          media="(max-width: 768px)"
          srcset="../../images/coffee-view/one-cup-mobile.png"
        />
        <source
          media="(max-width: 1348px)"
          srcset="../../images/coffee-view/one-cup-tablet.png"
        />
        <source
          media="(max-width: 1904px)"
          srcset="../../images/coffee-view/one-cup-laptop.png"
        />
        <img
          class="adding__image"
          src="../../images/coffee-view/one-cup-desktop.png"
          width="1660"
          height="550"
          alt="Чашка кофе"
        />
      </picture>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.adding {
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
    text-indent: 64px;
    margin: 0;

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

  &__paragraph + .adding__image-wrapper {
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

  &__image-wrapper + .adding__title {
    margin-top: 20px;

    @include vp-laptop {
      margin-top: 10px;
    }

    @include vp-tablet {
      margin-top: 20px;
    }

    @include vp-mobile {
      margin-top: 10px;
    }
  }
}
</style>
