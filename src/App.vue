<script setup>
import { ref } from 'vue'
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import Cards from "./components/Cards.vue";
import Slider from "./components/Slider.vue";
import Card from "./components/Items/Card.vue";
import MiddleHead from "./components/Items/Text/MiddleHead.vue";
import Gallery from "./components/Gallery.vue";
import Form from "./components/Form.vue";
import Footer from "./components/Footer.vue";

let cardsProgramms = [{
  name: 'lolkek',
  description: 'lolkek',
  leftBTN: false
},
  {
    name: 'lolkek2',
    description: 'lolkek2',
    leftBTN: false
  },
  {
    name: 'lolkek2',
    description: 'lolkek2',
    leftBTN: true
  }
]

let cardsMethodists = [{
  name: 'lolkek',
  description: 'lolkek',
  leftBTN: false
},
  {
    name: 'lolkek2',
    description: 'lolkek2',
    leftBTN: false
  },
  {
    name: 'lolkek2',
    description: 'lolkek2',
    leftBTN: true
  }
]

const lolkek = ref("lolkekaas");
</script>

<template>

  <div class="main--container">

    <Header :msg="lolkek" />

    <Banner/>

    <Cards/>

    <Slider/>

    <div class="cards--programms">
      <Card v-for="card in cardsProgramms" :card="card" />
    </div>

    <MiddleHead text="Методисты" />

    <div class="cards--methodists">
      <Card v-for="card in cardsMethodists" :card="card" />
    </div>

    <Gallery/>

    <Form/>

    <Footer/>

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
