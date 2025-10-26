<script setup>
import { reactive } from 'vue';
import CustomInput from '../inputs/CustomInput.vue';

const contactData = reactive([
  {
    id: 'user-name',
    name: 'name',
    placeholder: 'Имя',
    error: 'Это обязательное поле',
    value: '',
  },
  {
    id: 'user-surname',
    name: 'surname',
    placeholder: 'Фамилия',
    error: 'Это обязательное поле',
    value: '',
  },
  {
    id: 'user-phone',
    type: 'tel',
    name: 'phone',
    placeholder: 'Телефон',
    error: 'Это обязательное поле',
    value: '',
  },
  {
    id: 'user-email',
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    error: 'Это обязательное поле',
    value: '',
  },
  {
    id: 'user-company',
    name: 'company',
    placeholder: 'Название компании (необязательно)',
    value: '',
  }
])
const addressData = reactive([
  {
    id: 'user-country',
    name: 'country',
    placeholder: 'Страна',
    error: 'Это обязательное поле',
    value: '',
  },
  {
    id: 'user-city',
    name: 'city',
    placeholder: 'Город',
    error: 'Это обязательное поле',
    value: '',
  },
  {
    id: 'user-street-home',
    name: 'street-home',
    placeholder: 'Улица, дом',
    error: 'Это обязательное поле',
    value: '',
  },
  {
    id: 'user-index',
    name: 'index',
    type: 'number',
    placeholder: 'Почтовый индекс',
    error: 'Это обязательное поле',
    value: '',
  },
  {
    id: 'user-company',
    name: 'company',
    placeholder: 'Комментарий к заказу (необязательно)',
    value: '',
  }
])
</script>

<template>
  <div class="delivery-form">
    <h2 class="delivery-form__title">Доставка</h2>
    <div class="delivery-form__inner">
      <fieldset class="delivery-form__group">
        <legend class="delivery-form__groupname">Контактная информация</legend>
        <!-- у группы чексбоксов д.б. одинаковый name и v-model -->
        <custom-input 
          v-for="inputData in contactData"
          :inputData="inputData"
          v-model="inputData.value"
          @updated:modelValue="inputData.value = $event"
        ></custom-input>
      </fieldset>

      <fieldset class="delivery-form__group">
        <legend class="delivery-form__groupname">Адрес доставки</legend>
        <!-- у группы чексбоксов д.б. одинаковый name и v-model -->
        <custom-input 
          v-for="inputData in addressData"
          :inputData="inputData"
          v-model="inputData.value"
          @updated:modelValue="inputData.value = $event"
        ></custom-input>
      </fieldset>
    </div>
    <button 
    class="delivery-form__button btn-cornsilk"
    type="button">Рассчитать доставку</button>
  </div>
</template>

<style lang="scss" scoped>
.delivery-form {
  background-color: $color-white;
  border-radius: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: $color-platinum;
  box-shadow: 0 0 50px 0 $color-quick-silver-25;
  position: relative;
  width: 100%;
  padding: 70px 140px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @include vp-laptop {
    box-shadow: 0 0 35px 0 $color-spanish-gray-c95-25;
    border-radius: 14px;
    gap: 28px;
    padding: 50px 100px 45px;
  }

  @include vp-tablet {
    box-shadow: 0px 0px 50px 0px $color-spanish-gray-c95-25;
    border-radius: 10px;
    padding: 40px 34px 94px;
    gap: 20px;
  }

  @include vp-mobile {
    padding: 40px 18px 50px;
    gap: 20px;
  }

  &__title {
    font-family: $ff-gilroy sans-serif;
    font-weight: 900;
    font-size: 30px;
    line-height: 37px;
    color: $color-raising-black;
    margin: 0 0 10px;
    padding: 0;

    @include vp-laptop {
      font-size: 22px;
      line-height: 27px;
      margin: 0 0 5px;
    }

    @include vp-tablet {
      font-size: 25px;
      line-height: 31px;
      margin: 0 0 10px;
    }

    @include vp-mobile {
      font-size: 20px;
      line-height: 25px;
      margin: 0;
    }
  }

  &__inner {
    display: flex;
    gap: 20px;

    @include vp-tablet {
      flex-direction: column;
      gap: 30px;
    }

    @include vp-mobile {
      gap: 20px;
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

    @include vp-tablet {
      display: unset;
      font-size: 20px;
      line-height: 24px;
      font-weight: 500;
      font-family: $ff-gilroy sans-serif;
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
}

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
  font-family: $ff-gilroy sans-serif;
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
    padding: 14px;
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
</style>
