<script setup>
import { reactive, ref } from "vue";

const userInfo = reactive({
  name: "Иван Иванов",
  email: "ivan.ivanov@gmail.com",
  tel: "+ 7 (909) 909 99 99",
  password: "password",
})
</script>

<template>
  <div class="users-card">
    <h2 class="users-card__heading visually-hidden">Информация о пользователе</h2>

    <p class="users-card__hello-text--mobile">{{ userInfo.name }}, здравствуйте!</p>

    <div class="users-card__avatar-wrapper">
      <picture class="users-card__avatar-picture">
        <source
          media="(max-width: 768px)"
          srcset="../../images/personal/user-avatar-mobile.png"
        />
        <source
          media="(max-width: 1348px)"
          srcset="../../images/personal/user-avatar-tablet.png"
        />
        <source
          media="(max-width: 1904px)"
          srcset="../../images/personal/user-avatar-laptop.png"
        />
        <img
          class="users-card__avatar-image"
          src="../../images/personal/user-avatar-desktop.png"
          width="119"
          height="119"
          alt="Аватар"
        />
      </picture>

      <button
        class="users-card__change-btn btn-cornsilk"
      >
        Изменить
      </button>
    </div>


    <div class="users-card__hello-wrapper">
      <p class="users-card__hello-text">{{ userInfo.name }}, здравствуйте!</p>
      <div class="large-input">
        <label class="little-input__label visually-hidden" for="user-name">Имя и фамилия</label>
        <input class="large-input__field" type="text" v-model="userInfo.name" id="user-name">
        <span class="large-input__error">это поле должно быть заполнено</span>
        <label class="little-input__label visually-hidden" for="user-hello">Приветствие</label>
        <input class="large-input__disabled" type="text" :value="userInfo.name + ', здравствуйте!'" id="user-hello">
      </div>

      <ul class="users-card__personal-list">
        <li class="users-card__personal-item">
          <div class="little-input">
            <input class="little-input__field" type="email" v-model="userInfo.email" id="user-email">
            <span class="little-input__error">это поле должно быть заполнено</span>
          </div>
        </li>

        <li class="users-card__personal-item">
          <div class="little-input">
            <label class="little-input__label visually-hidden" for="user-tel">Телефон</label>
            <input class="little-input__field" type="tel" v-model="userInfo.tel" id="user-tel">
            <span class="little-input__error">это поле должно быть заполнено</span>
          </div>
        </li>

        <li class="users-card__personal-item">
          <div class="little-input little-input--password">
            <label class="little-input__label" for="user-password">Пароль:</label>
            <input class="little-input__field" 
            type="password" 
            v-model="userInfo.password" 
            id="user-password">
            <button type="button" class="little-input__btn btn-icon">
              <svg
                class="btn-icon__svg"
                width="17"
                height="13"
                aria-hidden="true"
              >
                <use xlink:href="../../assets/input-sprite.svg#personal-eye"></use>
              </svg>
            </button>
              <span class="little-input__error">это поле должно быть заполнено</span>
        </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
}

.btn-icon {
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: $color-black;
  
  &__svg {
    width: 16px;
    height: 12px;
    
    @include vp-laptop {
      width: 10px;
      height: 8px;
    }
  }

  &:hover {
    color: $color-mustard-yellow;
  }

  &::before {
    position: absolute;
    content: "";
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    cursor: pointer;
  }
}

.btn-cornsilk {
  font-family: $ff-gilroy, sans-serif;
  margin: 0;
  padding: 8px 0 4px;
  display: flex;
  background-color: $color-cornsilk;
  border-color: $color-ucla-gold;
  border-style: solid;
  border-width: 1px;
  color: $color-ucla-gold;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  text-align: center;

  @include vp-laptop {
    padding: 6px 0 3px;
    border-width: 0.7px;
    border-radius: 4px;
    font-size: 12px;
    line-height: 13px;
  }

  @include vp-tablet {
    border-radius: 2px;
    border-width: 1px;
    padding: 7px 0 8px;
    font-size: 12px;
    line-height: 13px;
  }

  @include vp-mobile {
    border-radius: 5px;
    padding: 7px 0 3px;
    line-height: 14px;
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

.little-input {
  display: flex;
  border-radius: 5px;
  background-color: $color-cultured-f6;
  width: 100%;
  position: relative;

  @include vp-laptop {
    border-radius: 4px;
  }

  &__field {
    color: $color-raising-black;
    font-family: $ff-gilroy, sans-serif;
    padding: 3px 0 2px;
    margin: 0;
    background-color: transparent;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    border: none;
    width: 100%;

    @include vp-laptop {
      font-size: 14px;
      line-height: 17px;
      padding: 2px 0 1px;
    }

    @include vp-tablet {
      font-size: 12px;
      line-height: 14px;
      padding: 2px 0 0;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 16px;
      padding: 6px 0 3px;
    }
  }

  &__error {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(100%);
    color: $color-ucla-gold;
    font-family: $ff-gilroy, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: right;

    @include vp-laptop {
      font-size: 10px;
      line-height: 11px;
    }

    @include vp-tablet {
      font-size: 8px;
      line-height: 9px;
    }

    @include vp-mobile {
      font-size: 10px;
      line-height: 12px;
    }
  }

  &::placeholder {
    color: $color-silver-sand-c4;

    @include vp-tablet {
      color: $color-chinese-silver;
    }
  }
}


.little-input--password {
  position: relative;

  .little-input__label {
    color: $color-raising-black;
    font-family: $ff-gilroy, sans-serif;
    padding: 3px 0 2px;
    margin: 0;
    background-color: transparent;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    border: none;
    user-select: none;
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;

    @include vp-laptop {
      font-size: 14px;
      line-height: 17px;
      padding: 2px 0 1px;
    }

    @include vp-tablet {
      font-size: 12px;
      line-height: 14px;
      padding: 2px 0 0;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 16px;
      padding: 4px 0 3px;
    }
  }

  .little-input__field {
    padding: 3px 34px 2px 90px;  

    @include vp-laptop {
      padding: 2px 40px 1px 60px;    
    }

    @include vp-tablet {
      padding: 2px 20px 1px 60px;    
    }
  }

  .little-input__btn {
    position: absolute;
    right: 9px;
    top: 50%;
    transform: translateY(-50%);

    @include vp-laptop {
      right: 15px;
    }

    @include vp-tablet {
      right: 7px;
    }

    @include vp-mobile {
      right: 5px;
    }
  }
}

.little-input--error {
  .little-input__error {
    display: flex;
  }
}

.little-input--disabled {
  background-color: transparent;

  .little-input__field {
    pointer-events: none;
    cursor: auto;
  }
}

.users-card {
  color: $color-raising-black;
  font-family: $ff-gilroy, sans-serif;
  padding: 35px 140px 29px;
  display: flex;
  background-color: $color-white;
  border-radius: 20px 0 0 20px;
  gap: 20px;

  @include vp-laptop {
    padding: 30px 100px 20px;
    border-radius: 14px 0 0 14px;
    gap: 14px;
  }

  @include vp-tablet {
    padding: 15px 48px 20px;
    border-radius: 8px 0 0 8px;
    gap: 19px;
  }

  @include vp-mobile {
    padding: 40px 0 0;
    border-radius: 10px 10px 0 0;
    padding: 79px 32px 24px;
    gap: 14px;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__hello-text--mobile {
    display: none;
    
    @include vp-mobile {
      display: flex;
      width: 100%;
      font-family: $ff-gilroy, sans-serif;
      color: $color-raising-black;
      font-weight: 900;
      font-size: 20px;
      line-height: 25px;
      margin: 0;
      padding: 0;
    }
  }

  &__avatar-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    @include vp-laptop {
      gap: 13px;
    }

    @include vp-tablet {
      gap: 11px;
      align-items: flex-start;
    }

    @include vp-mobile {
      align-items: center;
      gap: 15px;
    }
    
  }

  &__avatar-image {
    width: 119px;
    height: 119px;
    border-radius: 50%;
    overflow: hidden;

    @include vp-laptop {
      width: 80px;
      height: 80px;
    }

    @include vp-tablet {
      width: 60px;
      height: 60px;
    }

    @include vp-mobile {
      width: 70px;
      height: 70px;
    }
  }

  &__change-btn {
    width: 120px;

    @include vp-laptop {
      width: 84px;
    }

    @include vp-tablet {
      width: 83px;
    }

    @include vp-mobile {
      width: 70px;
    }
  }

  &__hello-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include vp-laptop {
      gap: 5px;
    }

    @include vp-tablet {
      gap: 7px;
    }

    @include vp-mobile {
      width: calc(100% - 91px);
    }
  }

  &__hello-text {
    margin: 0;
    padding: 0;
    font-family: $ff-gilroy, sans-serif;
    color: $color-raising-black;
    font-weight: 900;
    font-size: 40px;
    line-height: 50px;

    @include vp-laptop {
      font-size: 28px;
      line-height: 35px;
    }

    @include vp-tablet {
      font-size: 16px;
      line-height: 19px;
    }

    @include vp-mobile {
      display: none;
    }
  }

  &__personal-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: space-between;

    @include vp-laptop {
      gap: 11px;
    }

    @include vp-tablet {
      gap: 8px;
    }

    @include vp-mobile {
      gap: 20px;
    }
  }

  &__personal-item {
    margin: 0;
    padding: 0;
    display: flex;
  }
}

</style>
