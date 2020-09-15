<template>
  <div>
    <div class="Dialog" v-show="active">
      <div class="Dialog__overlay animate__bounceIn"></div>
      <div class="Dialog__content animate__flipInX">
        <div class="Dialog__body">
          <span class="Dialog__title animate__animated animate__backInDown">{{btnText}}</span>
          <div class="Dialog__group">
            <form>
              <input v-model="email" :rules="emailRules" placeholder="Email" type="email" required />
              <input v-model="password" placeholder="Пароль" required />
              <input v-show="show" v-model="password" placeholder="Повторите пароль" required />
            </form>
          </div>
        </div>

        <div class="Dialog__footer">
          <button class="btn" @click="onCancel()">Отмена</button>
          <button class="btn btn-ok" @click="onConfirm(); SingIn()">{{ btnText }}</button>
        </div>
      </div>
    </div>
    <ul class="nav__menu d-flex center-items">
      <li id="reg" class="link nav__item" href="#" @click="open()">{{ btnText }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      show: false,
      showpass: false,
      email: "",
      password: "",
      // select: "General",
      // items: ["General", "Corporate"],
    };
  },
  props: ["btnText"],
  methods: {
    open() {
      this.active = true;
    },
    close() {
      this.active = false;
    },
    onCancel() {
      this.close();
    },
    onConfirm() {
      this.close();
    },
    SingIn() {
      // push Login

      //console.log(this.btnText);
      console.log(this.email);
      console.log(this.password);
      // console.log(this.$emit.password);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>
.Dialog__group {
  margin-top: 25px;
}
.Dialog__group input {
  border: 1px solid;
  margin: 5px;
  border-radius: 15px 0px 15px 0px;
  opacity: 0.4;
  margin-top: 15px;
  transition: all;
  transition-duration: 1s;
}
.Dialog__group input:focus {
  border: 1px solid;
  margin: 5px;
  border-radius: 0px 15px 0px 15px;
  opacity: 0.9;
  box-shadow: 0px 0.2em 2.5em #c4c4c4;
  margin-top: 15px;
  transform: scale(1.075);
  transition: all;
  transition-duration: 1s;
}
</style>

<style>
.Dialog__overlay {
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  transition: all;
  transition-duration: 1s;
  background: rgba(0, 0, 0, 0.7);
  left: 0;
}

.Dialog__content {
  position: fixed;
  z-index: 13;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  text-align: center;
  border-radius: 2px;
}

.Dialog__body {
  /* background: url(../image/background-blue.png); */
  padding: 20px;
  font-size: 15px;
  color: #4a4a4a;
  word-wrap: break-word;
  word-break: break-all;
  font-weight: 500;
  min-height: 250px;
}

.Dialog__footer {
  position: relative;
  line-height: 42px;
  font-size: 15px;
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;
  width: 100%;
  height: 40px;
}

.Dialog__footer:after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #d5d5d6;
  color: #d5d5d6;
  transform-origin: 0 0;
  transform: scaleY(0.5);
}
.Dialog__title {
  display: block;
  padding: 10px 0px;
  color: #0179f1;
  font-weight: 600;
  font-size: 25px;
  border-bottom: 2px solid;
  text-transform: uppercase;
}

.btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  flex: 1;
  border-left: 1px solid #d5d5d6 !important;
  font-size: 1rem;
  line-height: 30px;
  display: inline-block;
  height: 32px;
  padding: 0 15px;
  text-align: center;
  text-decoration: none;
  background-color: transparent;
  color: #0179f1;
  border-radius: 3px;
  outline: 0;
  transition: box-shadow 0.1s ease-out, background-color 0.1s ease-out,
    border-color 0.1s ease-out, color 0.1s ease-out;
  border: none;
  cursor: pointer;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.btn-ok {
  font-weight: 500;
}

.btn:active {
  background-color: rgba(0, 0, 0, 0.05);
}

.btn:first-child {
  border-bottom-left-radius: 2px;
  border-left: none !important;
}

.link {
  display: inline-block;
  margin-right: 5px;
  color: #000;
}
.group {
  position: relative;
}

input {
  font-size: 16px;
  padding: 10px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #ccc;
}
input:focus {
  outline: none;
}

label {
  color: #999;
  font-size: 18px;
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 15px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ label,
input:valid ~ label {
  top: -15px;
  font-size: 14px;
  color: #5264ae;
}

/* BOTTOM BARS ================================= */
.bar {
  position: relative;
  display: block;
  width: 320px;
}
.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 0;
  position: absolute;
  background: #5264ae;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}

/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}
/* vuetifyjs выпадающий список */
.v-menu__content {
  min-width: 155px !important;
  top: 0 !important;
  left: 220px !important;
}
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.animate__bounceIn {
  --animate-duration: 5s !important;
  --animate-repeat: 2 !important;
}
</style>


