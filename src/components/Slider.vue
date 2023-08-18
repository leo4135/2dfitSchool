<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<template>
  <section id="about__club" class="main--margin">

  <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
  >

    <swiper-slide>
      <div class="carousel__custom__size__slide1">
        <div class="wrapper carousel__height__for__wrapper">
          <div class="carousel__contain__for__text__slider">
<!--            <h2 class="h2__for__carousel">ТРЕНАЖЕРНЫЙ ЗАЛ</h2>-->
            <p>Наша миссия - предоставлять исключительно качественные тренировки, подбирать занятия, опираясь на индивидуальные особенности вашего организма и те цели, которых вы хотите достичь
            </p>
            <p>Мы - за грамотный и умный подход к тренировкам, включающий работу в тренажерном зале, функциональные тренировки и растяжку</p>
<!--            <div class="container__for__main__button color__for__banner__button">-->
<!--              <button class="main__button button__for__banner">ПРОБНОЕ ПОСЕЩЕНИЕ</button>-->
<!--            </div>-->
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="carousel__custom__size__slide2">
        <div class="wrapper carousel__height__for__wrapper">
          <div class="carousel__contain__for__text__slider">
            <!--            <h2 class="h2__for__carousel">ТРЕНАЖЕРНЫЙ ЗАЛ</h2>-->
            <p>Наша миссия - предоставлять исключительно качественные тренировки, подбирать занятия, опираясь на индивидуальные особенности вашего организма и те цели, которых вы хотите достичь
            </p>
            <p>Мы - за грамотный и умный подход к тренировкам, включающий работу в тренажерном зале, функциональные тренировки и растяжку</p>
            <!--            <div class="container__for__main__button color__for__banner__button">-->
            <!--              <button class="main__button button__for__banner">ПРОБНОЕ ПОСЕЩЕНИЕ</button>-->
            <!--            </div>-->
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="carousel__custom__size__slide3">
        <div class="wrapper carousel__height__for__wrapper">
          <div class="carousel__contain__for__text__slider">
            <!--            <h2 class="h2__for__carousel">ТРЕНАЖЕРНЫЙ ЗАЛ</h2>-->
            <p>Наша миссия - предоставлять исключительно качественные тренировки, подбирать занятия, опираясь на индивидуальные особенности вашего организма и те цели, которых вы хотите достичь
            </p>
            <p>Мы - за грамотный и умный подход к тренировкам, включающий работу в тренажерном зале, функциональные тренировки и растяжку</p>
            <!--            <div class="container__for__main__button color__for__banner__button">-->
            <!--              <button class="main__button button__for__banner">ПРОБНОЕ ПОСЕЩЕНИЕ</button>-->
            <!--            </div>-->
          </div>
        </div>
      </div>
    </swiper-slide>
    ...
  </swiper>

  </section>

</template>

<style scoped>
.carousel__custom__size__slide1 {
  width: 99vw;
  height: 60vh;
  background-image: url('/public/images/Ujb_8BclwSY.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.carousel__custom__size__slide2 {
  width: 99vw;
  height: 60vh;
  background-image: url('/public/images/1.2cardio.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.carousel__custom__size__slide3 {
  width: 99vw;
  height: 60vh;
  background-image: url('/public/images/5ianvntEhhw.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}


.carousel__height__for__wrapper {
  height: 101%;
}

.carousel__contain__for__text {
  padding: 3%;
  background: #1A1A1ABB;
  max-width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  left: 20px;
}

.carousel__contain__for__text__slider {
  padding: 3%;
  background: #1A1A1ABB;
  max-width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  position: relative;
  left: 20px;
}

.carousel__contain__for__text__slider p {
  max-width: 100%;
}

.h2__for__carousel {
  color: var(--main-color-for-text);
}


</style>