<template>
  <div class="white-box">
        <div class="container">
          <div class="nav d-flex center-items between">
            <div class="nav__logo d-flex center-items">
              <img src="../assets/image/logo.png" alt="Logo" class="logo">
              <div class="nav__text">
                Project
                <span>live</span>
              </div>
              <accost/>
              <div id="app" class="nav__menu d-flex center-items">
                <div class="login">
                  <div class="Dialog" style="display: none;">
                    <div class="Dialog__overlay animate__bounceIn"></div> <div class="Dialog__content"><div class="Dialog__body animate__flipInX"><div class="group"><div class="v-input theme--light v-text-field v-text-field--is-booted"><div class="v-input__control"><div class="v-input__slot"><div class="v-text-field__slot"><label for="input-2" class="v-label theme--light" style="left: 0px; right: auto; position: absolute;">Email</label><input id="input-2" type="text"></div><div class="v-input__append-inner"><div class="v-input__icon v-input__icon--clear"><button disabled="disabled" type="button" aria-label="clear icon" class="v-icon notranslate v-icon--disabled v-icon--link mdi mdi-close theme--light"></button></div></div></div><div class="v-text-field__details"><div class="v-messages theme--light"><div class="v-messages__wrapper"></div></div></div></div></div> <span></span> <div class="v-input theme--light v-text-field v-text-field--is-booted"><div class="v-input__control"><div class="v-input__slot"><div class="v-text-field__slot"><label for="input-6" class="v-label theme--light" style="left: 0px; right: auto; position: absolute;">Пароль</label><input name="input-10-1" id="input-6" type="password"></div><div class="v-input__append-inner"><div class="v-input__icon v-input__icon--clear"><button disabled="disabled" type="button" aria-label="clear icon" class="v-icon notranslate v-icon--disabled v-icon--link mdi mdi-close theme--light"></button></div></div><div class="v-input__append-inner"><div class="v-input__icon v-input__icon--append"><button type="button" aria-label="append icon" class="v-icon notranslate v-icon--link mdi mdi-eye-off theme--light"></button></div></div></div><div class="v-text-field__details"><div class="v-messages theme--light"><div class="v-messages__wrapper"></div></div><div class="v-counter theme--light">0</div></div></div></div> <span></span></div></div> <div class="Dialog__footer"><button class="btn">Отмена</button> <button class="btn btn-ok">
                Вход
              </button></div></div></div> <ul class="nav__menu d-flex center-items"><li href="#" class="link nav__item">Вход</li></ul></div> <div class="reg"><div class="Dialog" style="display: none;"><div class="Dialog__overlay animate__bounceIn"></div> <div class="Dialog__content"><div class="Dialog__body animate__flipInX"><div data-app="true" class="v-application v-application--is-ltr theme--light" id="inspire" style="max-height: 90%;"><div class="v-application--wrap"><div><div class="v-input v-input--is-label-active v-input--is-dirty theme--light v-text-field v-text-field--is-booted v-select"><div class="v-input__control"><div role="button" aria-haspopup="listbox" aria-expanded="false" aria-owns="list-13" class="v-input__slot"><div class="v-select__slot"><label for="input-13" class="v-label v-label--active theme--light" style="left: 0px; right: auto; position: absolute;">Role</label><div class="v-select__selections"><div class="v-select__selection v-select__selection--comma">General</div><input id="input-13" readonly="readonly" type="text" aria-readonly="false" autocomplete="off"></div><div class="v-input__append-inner"><div class="v-input__icon v-input__icon--append"><i aria-hidden="true" class="v-icon notranslate mdi mdi-menu-down theme--light"></i></div></div><input type="hidden" value="General"></div><div class="v-menu"><!----></div></div><div class="v-text-field__details"><div class="v-messages theme--light"><div class="v-messages__wrapper"></div></div></div></div></div> <div><div class="v-input theme--light v-text-field v-text-field--is-booted"><div class="v-input__control"><div class="v-input__slot"><div class="v-text-field__slot"><label for="input-18" class="v-label theme--light" style="left: 0px; right: auto; position: absolute;">Имя</label><input id="input-18" type="text"></div><div class="v-input__append-inner"><div class="v-input__icon v-input__icon--clear"><button disabled="disabled" type="button" aria-label="clear icon" class="v-icon notranslate v-icon--disabled v-icon--link mdi mdi-close theme--light"></button></div></div></div><div class="v-text-field__details"><div class="v-messages theme--light"><div class="v-messages__wrapper"></div></div></div></div></div> <div class="v-input v-input--hide-details theme--light v-text-field v-text-field--is-booted"><div class="v-input__control"><div class="v-input__slot"><div class="v-text-field__slot"><label for="input-22" class="v-label theme--light" style="left: 0px; right: auto; position: absolute;">Фамилия</label><input id="input-22" type="text"></div><div class="v-input__append-inner"><div class="v-input__icon v-input__icon--clear"><button disabled="disabled" type="button" aria-label="clear icon" class="v-icon notranslate v-icon--disabled v-icon--link mdi mdi-close theme--light"></button></div></div></div></div></div></div></div></div></div></div> <div class="Dialog__footer"><button class="btn">Отмена</button> <button class="btn btn-ok">
                Регистрация
              </button></div></div></div> <ul class="nav__menu d-flex center-items"><li href="#" class="link nav__item">Регистрация</li></ul></div></div>
            </div>
            <div class="nav__language d-flex center-items">
              <i class="fas fa-language"></i>
              <p>Языки</p>
            </div>
          </div>
        </div>
      </div>
</template>



<script>
import accost from "./accost";

export default {
  data() {
    return {

    }
  },
    components: {
    accost,    
  },
  name: "",
  props: ["btnText"],
};
</script>



<style>
.white-box {
  background: #fff;
}
.nav {
  padding: 20px 0;
}


.nav__text {
  font-family: "Roboto", sans-serif;
  font-size: 14.5px;
  font-weight: 900;
  color: #1b3bde;
  width: 100px;
  margin-left: 10px;
  margin-right: 80px;
  text-transform: uppercase;
  text-align: left;
}
.nav__text span {
  font-size: 20.5px;
  
}

.nav__menu {
  max-height: 50px;
}
.nav__item {
  font-size: 13px;
  padding: 8px 22px;
}
.nav__item:hover {
  background: #000;
  color: #fff;
  border-radius: 7px;
}
.nav__language {
  margin-left: 5px;
  font-size: 15px;
  font-weight: 900;
}

</style>


