<script setup>
import { reactive, computed } from "vue";
import CustomInput from "../inputs/CustomInput.vue";

const contactData = reactive([
  {
    id: "user-name",
    name: "name",
    placeholder: "Имя",
    error: "Это обязательное поле",
    isError: false,
    value: "",
  },
  {
    id: "user-surname",
    name: "surname",
    placeholder: "Фамилия",
    error: "Это обязательное поле",
    isError: false,
    value: "",
  },
  {
    id: "user-phone",
    type: "tel",
    name: "phone",
    placeholder: "Телефон",
    error: "Это обязательное поле",
    isError: false,
    value: "",
  },
  {
    id: "user-email",
    name: "email",
    type: "email",
    placeholder: "Email",
    error: "Это обязательное поле",
    isError: false,
    value: "",
  },
  {
    id: "user-company",
    name: "company",
    isError: false,
    placeholder: "Название компании (необязательно)",
    value: "",
  },
]);
const addressData = reactive([
  {
    id: "user-country",
    name: "country",
    placeholder: "Страна",
    error: "Это обязательное поле",
    isError: false,
    value: "",
  },
  {
    id: "user-city",
    name: "city",
    placeholder: "Город",
    error: "Это обязательное поле",
    isError: false,
    value: "",
  },
  {
    id: "user-street-home",
    name: "street-home",
    placeholder: "Улица, дом",
    error: "Это обязательное поле",
    isError: false,
    value: "",
  },
  {
    id: "user-index",
    name: "index",
    type: "number",
    placeholder: "Почтовый индекс",
    error: "Это обязательное поле",
    isError: false,
    value: "",
  },
  {
    id: "user-company",
    name: "company",
    isError: false,
    placeholder: "Комментарий к заказу (необязательно)",
    value: "",
  },
]);

const isValid = computed(
  () =>
    !Boolean(
      contactData.find((el) => el.error && !el.value.length) ||
        addressData.find((el) => el.error && !el.value.length),
    ),
);
</script>

<template>
  <div class="delivery-form" @blur="$emit('set-state', isValid)">
    <h2 class="delivery-form__title">Доставка</h2>
    <div class="delivery-form__inner">
      <fieldset class="delivery-form__group">
        <legend class="delivery-form__groupname">Контактная информация</legend>
        <!-- у группы чексбоксов д.б. одинаковый name и v-model -->
        <custom-input
          v-for="inputData in contactData"
          :inputData="inputData"
          v-model="inputData.value"
          @updated:modelValue="
            inputData.value = $event;
            inputData.isError = $event.length > 0;
            $emit('set-state', isValid);
          "
        ></custom-input>
      </fieldset>

      <fieldset class="delivery-form__group">
        <legend class="delivery-form__groupname">Адрес доставки</legend>
        <custom-input
          v-for="inputData in addressData"
          :inputData="inputData"
          v-model="inputData.value"
          @updated:modelValue="
            inputData.value = $event;
            inputData.isError = $event.length > 0;
            $emit('set-state', isValid);
          "
          @focus="inputData.isError = false"
        ></custom-input>
      </fieldset>
    </div>
    <button
      class="delivery-form__button btn-cornsilk"
      @click="$emit('count-delivery', isValid)"
      type="button"
    >
      Рассчитать доставку
    </button>
  </div>
</template>

<style lang="scss" scoped>
.btn-cornsilk {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-ucla-gold;
  background-color: $color-cornsilk;
  border-color: $color-ucla-gold;
  border-style: solid;
  border-width: 1px;
  font-weight: 600;
  line-height: 30px;
  font-size: 25px;
  font-family: $ff-gilroy, sans-serif;
  border-radius: 5px;
  margin: 0;
  padding: 20px 17px 17px;
  user-select: none;
  cursor: pointer;

  @include vp-laptop {
    font-size: 18px;
    line-height: 21px;
    padding: 14px;
    border-radius: 4px;
  }

  @include vp-tablet {
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    padding: 20px;
    border-radius: 5px;
  }

  @include vp-mobile {
    font-size: 18px;
    line-height: 22px;
    padding: 14px 14px 12px;
  }

  &:hover {
    color: $color-white;
    background-color: $color-ucla-gold;
  }

  &[disabled] {
    border-color: $color-antiflash-white-f0;
    background-color: $color-lotion;
    color: $color-antiflash-white-f0;
    cursor: unset;
  }
}

.delivery-form {
  background-color: $color-white;
  border-radius: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: $color-platinum;
  box-shadow: 0 0 50px 0 $color-quick-silver-25;
  position: relative;
  width: 100%;
  padding: 72px 140px 70px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @include vp-laptop {
    box-shadow: 0 0 35px 0 $color-spanish-gray-c95-25;
    border-radius: 14px;
    gap: 28px;
    padding: 52px 100px 45px;
  }

  @include vp-tablet {
    box-shadow: 0px 0px 50px 0px $color-spanish-gray-c95-25;
    border-radius: 10px;
    padding: 40px 0 94px;
    gap: 20px;
  }

  @include vp-mobile {
    padding: 40px 0 50px;
    gap: 19px;
  }

  &__title {
    font-family: $ff-gilroy, sans-serif;
    font-weight: 900;
    font-size: 30px;
    line-height: 37px;
    color: $color-raising-black;
    margin: 0 0 8px;
    padding: 0;

    @include vp-laptop {
      font-size: 22px;
      line-height: 27px;
      margin: 0 0 3px;
    }

    @include vp-tablet {
      font-size: 25px;
      line-height: 31px;
      margin: 0 auto 10px;
      width: 100%;
      max-width: $max-width-tablet;
    }

    @include vp-mobile {
      font-size: 20px;
      line-height: 25px;
      margin: 0 auto;
      max-width: $max-width-mobile;
    }
  }

  &__inner {
    display: flex;
    gap: 20px;

    @include vp-tablet {
      flex-direction: column;
      gap: 30px;
      width: 100%;
      max-width: $max-width-tablet;
      margin: 0 auto;
    }

    @include vp-mobile {
      gap: 20px;
      max-width: $max-width-mobile;
    }
  }

  &__group {
    border: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    gap: 15px;
    width: 50%;

    @include vp-laptop {
      gap: 15px;
    }

    @include vp-tablet {
      gap: 10px;
      width: 100%;
    }
  }

  &__groupname {
    display: none;
    font-family: $ff-gilroy, sans-serif;

    @include vp-tablet {
      display: unset;
      font-size: 20px;
      line-height: 24px;
      font-weight: 500;
      color: $color-raising-black;
      margin: 0 0 20px;
      padding: 0;
    }

    @include vp-mobile {
      font-size: 12px;
      line-height: 14px;
      margin: 0 0 10px;
    }
  }

  &__button {
    @include vp-tablet {
      width: 100%;
      max-width: $max-width-tablet;
      margin: 0 auto;
    }

    @include vp-mobile {
      max-width: $max-width-mobile;
    }
  }
}
</style>
