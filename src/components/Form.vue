<script setup>

</script>

<template>

  <section class="form__and__map" style="background: #fff; padding: 5% 0;" id="formSender">
    <div class="wrapper" style="padding: 0 40px">
      <div class="container__for__send__message__border">
        <div class="container__for__send__message">
          <form class="form">
            <h2 class="banner__main__h2"><span style="color: #1A1A1A"><span class="banner__h2__red__word">НЕ ЖДИ </span>ПОНЕДЕЛЬНИК</span>
            </h2>
            <h2 class="h2__for__carousel" style="color: #1A1A1A">ЗАПИШИСЬ НА ПРОБНОЕ ЗАНЯТИЕ СЕЙЧАС</h2>
            <p style="color: #1A1A1A">Пожалуйста, оставьте свой номер телефона и мы Вам перезвоним</p>
            <input style="display: none" type="hidden" name="title" value="Заявка"/>
            <div class="container__for__inputs">
              <input class="send__message__input" type="text" name="name" placeholder="Имя">
              <input class="send__message__input" type="text" name="phone" placeholder="+7(___) ___ ____">
            </div>
            <div class="button__and__telephone">
              <p style="color: #1A1A1A; margin-bottom: 0">или перезвоните нам по номеру +7 (812)
                926-25-22</p>
              <div class="container__for__main__button color__for__banner__button">
                <button class="main__button button__for__banner" type="submit">ОБРАТНЫЙ ЗВОНОК</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

</template>


<style scoped>

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.container__for__send__message__border {
  border: 1px solid var(--h-and-border);
  transform: skew(-10deg);
  background: var(--main-color-for-text);
}

.container__for__send__message {
  transform: skew(10deg);
  padding: 30px 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;

}

.container__for__inputs {
  display: flex;
  gap: 5%;
}

.send__message__input {
  width: 40%;
  border: 2px solid #1A1A1A;
  border-radius: 25px;
  padding: 10px 20px;
}

.button__and__telephone {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>