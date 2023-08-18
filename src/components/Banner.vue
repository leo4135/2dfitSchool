<script setup>

import BiggestHead from "./Items/Text/BiggestHead.vue";


</script>

<template>
  <section class="size__for_banner" style="margin-bottom: 3%">
    <div class="wrapper" data-role="banner">
      <div class="banner__h__and__button">

        <div class="headers">
          <BiggestHead text='ПОДНИМИ СВОИ ЗНАНИЯ'/>
          <div class="headers--inline">
          <BiggestHead text='НА '/>
          <BiggestHead style="color: var(--h-and-border);" text='НОВЫЙ УРОВЕНЬ'/>
          </div>
        </div>

        <p>Расширь свои знания в сфере фитнеса, получи уникальный опыт<br/> и присоединись к команде профессионалов 2D-Fit</p>

        <div class="container__for__main__button color__for__banner__button">
          <button class="main__button button__for__banner">ЗАПИСАТЬСЯ</button>
        </div>
      </div>



      <div class="container__for__logo__and__social">
        <div class="logo">
          <img src="/src/assets/2d-fit-logo-2.svg" style="min-width: 100px">
        </div>
        <div class="banner__social">
          <a href="+7(812)926-25-22">+7 (812) 926-25-22</a>
          <div class="container__for__svg">
            <svg class="svg__banner__logo__social" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                 viewBox="0 0 24 24">
              <path fill="currentColor"
                    d="M21.503 18.381h-2.281c-.863 0-1.123-.699-2.67-2.247c-1.352-1.303-1.923-1.465-2.265-1.465c-.473 0-.602.13-.602.781v2.052c0 .555-.18.88-1.63.88a8.9 8.9 0 0 1-6.955-4.17a18.18 18.18 0 0 1-3.6-7.558c0-.342.13-.652.782-.652h2.28c.586 0 .797.261 1.027.864c1.107 3.258 2.996 6.092 3.763 6.092c.294 0 .422-.13.422-.863V8.739c-.097-1.531-.91-1.66-.91-2.214a.563.563 0 0 1 .585-.523h3.584c.49 0 .652.244.652.83v4.53c0 .489.21.651.358.651c.294 0 .52-.162 1.059-.7a18.76 18.76 0 0 0 2.802-4.66a.982.982 0 0 1 .993-.65h2.281c.684 0 .829.342.684.83a28.466 28.466 0 0 1-3.062 5.262c-.246.375-.344.57 0 1.01c.226.342 1.026 1.01 1.563 1.645c.782.78 1.431 1.682 1.922 2.67c.196.636-.131.961-.782.961Z"/>
            </svg>
          </div>
          <div class="container__for__svg">
            <svg class="svg__banner__logo__social" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                 viewBox="0 0 24 24">
              <path fill="currentColor"
                    d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/>
            </svg>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>


<style scoped>

.size__for_banner {
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-image: linear-gradient( rgba(0,0,0,.65), rgba(0,0,0,.65) ), url("/public/images/main.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;

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

[data-role="banner"] {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: inherit;
  flex-direction: column;
  gap: 10%;
}



.banner__h__and__button {
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 30px;
}

.color__for__banner__button {
  background: none;
  width: 200px;
  max-height: 50%;
  justify-content: center;
}

.color__for__banner__button:hover {
  background: var(--h-and-border);
}

.button__for__banner {
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
}



.container__for__logo__and__social {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  position: absolute;
  bottom: 5%;
  padding: 10px;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner__social {
  display: flex;
  gap: 10px;
  align-items: center;
  font-style: normal;
  font-weight: 200;
}

.svg__banner__logo__social {
  color: var(--main-color-for-text);
}


.container__for__svg {
  border: 2px solid var(--h-and-border);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
}

.svg__banner__logo__social {
  width: 20px;
  height: 20px;
}

.headers {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.headers--inline {
  display: flex;
  gap: 10px;
}

</style>