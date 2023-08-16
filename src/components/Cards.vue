<script setup>
import BiggestHead from "./Items/Text/BiggestHead.vue";
import MiddleHead from "./Items/Text/MiddleHead.vue";
</script>

<template>

<section data-role="cards">
  <div class="wrapper">
    <BiggestHead text='Присоединяйся к нам' />
    <MiddleHead text="Школа на базе успешно развивающегося клуба 2D-Fit" />
    <div class="cards">
      <div class="card">
        <p>Лекции и обучающие<br/> видео от действующих<br/> тренеров</p>
      </div>
      <div class="card">
        Более 10 направлений<br/> обучения
      </div>
      <div class="card">
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
  gap: 5px;

}

.card {
  width: 200px;
  height: 200px;
  background: #4D4D4D;
}

</style>