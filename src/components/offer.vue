<template>
  <div class="container">
    <div class="reg d-flex between">
      <div class="offer d-flex">
        <div class="offer__workshop">
          <i class="fas fa-graduation-cap"></i>
          Создавай уже сейчас
          <h1
            class="offer__title animate__animated animate__backInUp"
          >Регистрируйся и принимай участие в новых проектах уже сегодня.</h1>
        </div>
      </div>
      <form action="#" class="form center center-items">
        <h4 class="form__title">Принять участие</h4>
        <p>Что бы стать один из нас тебе достаточно зарегистрироваться.</p>
        <div class="form__wrap">
          <iframe
            class="animate__animated animate__zoomIn"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/BSGlfE3I7Tc"
            frameborder="0"
            modestbranding="1"
            allowfullscreen
          ></iframe>
          <a href="#" class="form__submit" @click="kek()">Начать регистрацию</a>
        </div>
        <p class="form__safety">Ваши данные под защитой.</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  methods: {
    kek() {
      document.getElementById("reg").click();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reg {
  padding: 90px 0px;
  width: 100%;
}
.offer {
  font-weight: 900;
  text-align: center;
  align-items: center;
}
.offer__title {
  font-size: 45px;
  display: block;
  margin: 35px 0;
  color: #1b3bde;
}
.offer__workshop {
  font-weight: 300;
  font-size: 16px;
  width: 590px;
}
.offer__workshop i {
  font-size: 16px;
  padding: 0 5px 0 15px;
}
.offer__time {
  font-size: 13px;
  margin: auto;
  color: #fff;
}
.form {
  background: #fff;
  width: 535px;
  height: 520px;
  padding: 0 33px;
  text-align: center;
}
.form__wrap {
  height: 260px;
  margin-bottom: 90px;
}
.form__title {
  margin-top: 40px;
  margin-bottom: 20px;
}

.form p {
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 20px;
}
.form__input {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  display: block;
  border: none;
  width: 270px;
  padding: 15px 0px;
  font-size: 13px;
  color: #acacac;
  margin-bottom: 8px;
  border-bottom: 1px solid #acacac;
}
.form__input:focus {
  color: #000;
  border-bottom: 1px solid black;
}

.form__submit {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 900;
  background: #4acc4d;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 20px;
  width: 270px;
  height: 60px;
  border-radius: 9px;
  margin-top: 10px;
  margin-left: 20%;
  display: block;
}
.form__safety {
  margin-top: 10px;
  font-size: 12px;
  color: #adadad;
}
.form__reg {
  width: 100%;
}
</style>
