<script setup>
import {onBeforeMount, onMounted, ref} from 'vue'
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import Cards from "./components/Cards.vue";
import Slider from "./components/Slider.vue";
import Card from "./components/Items/Card.vue";
import MiddleHead from "./components/Items/Text/MiddleHead.vue";
import Gallery from "./components/Gallery.vue";
import Form from "./components/Form.vue";
import Footer from "./components/Footer.vue";
import Preloader from "./components/Preloader.vue";



let cardsProgramms = [{
  name: 'ХОЧУ СТАТЬ ТРЕНЕРОМ',
  description: 'Станьте профессионалом, умеющим грамотно сочетать все виды нагрузки для достижения любых целей клиентов',
  leftBTN: false,
  modal: false
},
  {
    name: 'Для себя',
    description: 'Пройдите полный курс, повысив свои знания в разных сферах фитнеса: биомеханика и физиология, растяжка, силовые, комплексные и функциональные тренировки',
    leftBTN: false,
    modal: false
  },
  {
    name: 'Получить консультацию',
    description: 'Узнайте новое для себя по интересующей тематике в формате онлайн либо очно, проведя занятие с тренерами клуба',
    leftBTN: false,
    modal: false
  }
]

let cardsMethodists = [{
  name: 'ДМИТРИЙ ЖЕМАН',
  description: 'ВЛАДЕЛЕЦ КЛУБА Тренер высшей категории',
  leftBTN: true,
  modal: true
},

  {
    name: 'ДМИТРИЙ ШИХИН',
    description: 'ВЛАДЕЛЕЦ КЛУБА Тренер высшей категории Тренер по фитнесу и бодибилдингу',
    leftBTN: true,
    modal: true
  },
  {
    name: 'ДМИТРИЙ ПЕТРАШКО',
    description: 'ПЕРСОНАЛЬНЫЙ ТРЕНЕР Тренер высшей категории Персональный тренер по фитнесу и бодибилдингу',
    leftBTN: true,
    modal: true
  }
]

onMounted(() => {
  const CARDS = document.querySelectorAll(".card");

  CARDS[6].style = 'background-image: url("public/images/team/Jeman.jpg"); background-size: cover;';
  CARDS[7].style = 'background-image: url("public/images/team/Petrashko.jpg"); background-size: cover;';
  CARDS[8].style = 'background-image: url("public/images/team/Shihin.jpg"); background-size: cover;';


})



</script>

<template>

  <div class="main--container">

    <Preloader/>

    <Header/>

    <Banner/>

    <Cards/>

    <Slider/>

    <div v-motion
         :initial="{ opacity: 0, y: 100 }"
         :visible="{ opacity: 1, y: 0, scale: 1 }"
         :enter="{ opacity: 1, y: 0, scale: 1 }"
         :delay="600" class="cards--programms main--margin">
      <Card v-for="card in cardsProgramms" :card="card" />
    </div>

    <MiddleHead v-motion
                :initial="{ opacity: 0, y: 100 }"
                :visible="{ opacity: 1, y: 0, scale: 1 }"
                :enter="{ opacity: 1, y: 0, scale: 1 }"
                :delay="600" style="text-align: center;" text="Методисты" />

    <div v-motion
         :initial="{ opacity: 0, y: 100 }"
         :visible="{ opacity: 1, y: 0, scale: 1 }"
         :enter="{ opacity: 1, y: 0, scale: 1 }"
         :delay="600" class="cards--methodists main--margin">
      <Card v-for="card in cardsMethodists" :card="card" />
    </div>

    <Gallery/>

    <Form v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible="{ opacity: 1, y: 0, scale: 1 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :delay="600" />

    <Footer v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible="{ opacity: 1, y: 0, scale: 1 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :delay="600" />

  </div>
</template>

<style scoped>


.main--container {
  width: 100vw;
}
.cards--programms {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.cards--methodists {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
