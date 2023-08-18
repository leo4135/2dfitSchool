<script setup>
import BiggestHead from "./Items/Text/BiggestHead.vue";
import MiddleHead from "./Items/Text/MiddleHead.vue";
import {onMounted} from "vue";


onMounted(() => {
  const CARDS = document.querySelectorAll(".card");

  CARDS[0].style = 'background-image: url("src/assets/cards/2d-fit-join-1.png"); background-size: cover;';
  CARDS[1].style = 'background-image: url("src/assets/cards/2d-fit-join-2.png"); background-size: cover;';
  CARDS[2].style = 'background-image: url("src/assets/cards/2d-fit-join-3.png"); background-size: cover;';

})

</script>

<template>



<section v-motion
         :initial="{ opacity: 0, y: 100 }"
         :visible="{ opacity: 1, y: 0, scale: 1 }"
         :enter="{ opacity: 1, y: 0, scale: 1 }"
         :delay="600" data-role="cards main--margin">
  <div class="wrapper">
    <div class="position">
    <BiggestHead text='Присоединяйся к нам' />
    </div>
    <MiddleHead style="margin-bottom: 10px" text="ШКОЛА НА БАЗЕ УСПЕШНО" />
    <MiddleHead style="margin-bottom: 10px" text="РАЗВИВАЮЩЕГОСЯ" />
    <MiddleHead text="КЛУБА 2D-FIT" />
    <div class="cards">
      <div class="card card-pos-1">
        <p>Лекции и обучающие<br/> видео от действующих<br/> тренеров</p>
      </div>
      <div class="card card-pos-2">
        Более 10 направлений<br/> обучения
      </div>
      <div class="card card-pos-3">
        Профессиональное,<br/>
        интерактивное<br/>
        взаимодействие
      </div>
    </div>
  </div>
</section>

</template>

<style scoped>

.cards {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 30px;

}

.card {
  width: 250px;
  height: 250px;
  background: #4D4D4D;
  padding: 10px;
  transition: all 0.1s linear;
  cursor: pointer;
}

.card:hover {
  transform: scale(103%);
}

.card-pos-1 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}

.card-pos-2 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-pos-3 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.position {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

</style>