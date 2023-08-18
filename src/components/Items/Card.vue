<script setup>

import MiddleHead from "./Text/MiddleHead.vue";

defineProps({
  card: Object
})


</script>

<template>
  <div class="card">
    <div class="other--cards" v-if="!card.modal">

    <div class="text">
      <middle-head style="margin-bottom: 10%" :text="card.name"/>
      <p>{{ card.description }}</p>
    </div>
    <div class="buttons">
      <div v-if="card.leftBTN" class="container__for__main__button color__for__banner__button">
        <button class="main__button button__for__banner">ПОДРОБНЕЕ</button>
      </div>
      <div class="container__for__main__button color__for__banner__button">
        <button class="main__button button__for__banner">ЗАПИСАТЬСЯ</button>
      </div>
    </div>

    </div>

      <div class="card--hover" v-if="card.modal">
        <div class="text">
          <middle-head style="margin-bottom: 10%" :text="card.name"/>
          <p>{{ card.description }}</p>
        </div>
        <div class="buttons">
          <div v-if="card.leftBTN" class="container__for__main__button color__for__banner__button">
            <button class="main__button button__for__banner">ПОДРОБНЕЕ</button>
          </div>
          <div class="container__for__main__button color__for__banner__button">
            <button class="main__button button__for__banner">ЗАПИСАТЬСЯ</button>
          </div>
        </div>
      </div>

  </div>
</template>


<style scoped>
.card {
  width: 300px;
  height: 300px;
  background: #444444;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  position: relative;
}

.other--cards {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100%;
}

.card--hover {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  opacity: 0;
  transition: all 0.5s linear;
  cursor: pointer;
}

.card:hover .card--hover {
  opacity: 1;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.text {
  max-width: 100%;
}
</style>