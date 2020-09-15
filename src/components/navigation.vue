<template>
  <div class="white-box">
    <div class="container">
      <div class="nav d-flex center-items between">
        <div class="nav__logo d-flex center-items">
          <img src="../assets/image/logo.png" alt="Logo" class="logo" />
          <div class="nav__text">
            Project
            <span>live</span>
          </div>
          <accost btn-text="Регистрация" />
          <accost btn-text="Вход" />
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
    return {};
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


