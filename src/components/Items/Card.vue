<script setup>

import MiddleHead from "./Text/MiddleHead.vue";

defineProps({
  card: Object,
  description: String,
  leftBTN: Boolean
})


</script>

<template>
  <div class="card">
    <middle-head :text="name"/>
    <p>{{ description }}</p>
    <button v-if="leftBTN">Подробнее</button><button>Записаться</button>
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