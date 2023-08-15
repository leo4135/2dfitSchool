<script setup>
import { ref } from 'vue'

// defineProps({
//   msg: String,
// })
// const count = ref(0)


</script>

<template>

  <header>
    <div class="wrapper" data-role="header">
      <div class="logo__header">
        <img src="../assets/2d-fit-logo-2.svg">
      </div>
      <div class="header__nav__and__button">
        <nav class="header__nav">
          <a href="#about__club">О КЛУБЕ</a>
          <a href="#workouts">ТРЕНИРОВКИ</a>
          <a onclick="getSchedule()">РАСПИСАНИЕ</a>
          <a href="#team">КОМАНДА</a>
          <a href="#results">РЕЗУЛЬТАТЫ</a>
          <a href="#feedback">ОТЗЫВЫ</a>
        </nav>
        <div class="container__for__main__button">
          <button class="main__button"><a href="https://lk.2d-fit.ru/login">ВОЙТИ</a></button>
        </div>
      </div>
      <div class="burger">
        <input id="menu-toggle" type="checkbox"/>
        <label class='menu-button-container' for="menu-toggle">
          <div class='menu-button'></div>
        </label>
        <ul class="menu">
          <li><a href="#about__club">О КЛУБЕ</a></li>
          <li><a href="#workouts">ТРЕНИРОВКИ</a></li>
          <li><a id="scheduleOnclicker" onclick="getSchedule()">РАСПИСАНИЕ</a></li>
          <li><a href="#team">КОМАНДА</a></li>
          <li><a href="#results">РЕЗУЛЬТАТЫ</a></li>
          <li><a href="#feedback">ОТЗЫВЫ</a></li>
          <li>
            <div class="container__for__main__button">
              <button class="main__button" style="padding: 0px 15px;"><a href="https://lk.2d-fit.ru/login">ВОЙТИ</a>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>

</template>

<style scoped>

header {
  padding: 10px;
  font-weight: 200;
  position: fixed;
  z-index: 10;
  width: 100vw;
}

button:hover {
  cursor: pointer;
}


.main__button {
  background: none;
  font-family: 'Sofia Sans';
  font-weight: 200;
  color: var(--main-color-for-text);
  padding: 5px 15px;
  border: none;
  transform: skew(10deg);
}

.container__for__main__button {
  border: var(--h-and-border) solid 1px;
  transform: skew(-10deg);
  background: none;
  display: flex;
}


.logo__header {
  visibility: hidden;
}

[data-role="header"] {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 15px;
}

.header__nav__and__button {
  display: flex;
  gap: 30px;
  align-items: center;
}

.burger {
  display: none;
  z-index: 10000;
}

.menu {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu > li {
  margin: 0 1rem;
  overflow: hidden;
}

.menu-button-container {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#menu-toggle {
  display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: #fff;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}

.menu-button::before {
  content: '';
  margin-top: -8px;
}

.menu-button::after {
  content: '';
  margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}





@media screen and (max-width: 750px) {

  .burger {
    display: unset;
  }

  .header__nav__and__button {
    display: none;
  }

  .logo__header {
    visibility: visible;
  }

  .menu-button-container {
    display: flex;
  }
  .menu {
    position: absolute;
    top: 0;
    margin-top: 60px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  #menu-toggle ~ .menu li {
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  #menu-toggle:checked ~ .menu li {
    border: 1px solid #333;
    height: 2.5em;
    padding: 0.5em;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .menu > li {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.5em 0;
    width: 100%;
    color: white;
    background-color: #222;
  }
  .menu > li:not(:last-child) {
    border-bottom: 1px solid #444;
  }

  .modal__flexible__container .container__for__name__trainer__and__button {
    display: none;
  }

  .media img {
    max-width: 100%;
  }

}
</style>
