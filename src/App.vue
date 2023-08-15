<script setup>
import { ref } from 'vue'
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import Cards from "./components/Cards.vue";

const lolkek = ref("lolkekaas");
</script>

<template>
  <div class="main--container">
    <Header :msg="lolkek" />
    <Banner/>
    <Cards/>
  </div>
</template>

<style scoped>
.main--container {
  width: 100vw;

}
</style>
