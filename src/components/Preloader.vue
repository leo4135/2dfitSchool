<script setup>

</script>


<template>
<div class="preloader">
  <img class="logo" src="/src/assets/2d-fit-logo-2.svg">
</div>
</template>

<style scoped>
.preloader {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  background: #1F1F1F;
}

.logo {
  animation: 1s linear 0s infinite alternate animating-multiple-properties;
  width: 250px;
}

@keyframes animating-multiple-properties {
  from {
    opacity: 1;
  }
  to {
opacity: 0;
  }
}
</style>