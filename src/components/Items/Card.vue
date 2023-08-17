<script setup>

import MiddleHead from "./Text/MiddleHead.vue";

defineProps({
  card: Object
})


</script>

<template>
  <div class="card">
    <middle-head :text="card.name"/>
    <p>{{ card.description }}</p>
    <button v-if="card.leftBTN">Подробнее</button><button>Записаться</button>
  </div>
</template>


<style scoped>
.card {
  width: 350px;
  height: 350px;
  background: #444444;
  color: white;
}
</style>