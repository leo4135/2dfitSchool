<script setup>

defineProps({
  text: Object,
})

</script>

<template>

  <h2 class="banner__main__h2"> {{ text }} </h2>

</template>


<style scoped>
.banner__main__h2 {
  font-style: italic;
  font-weight: bold;
  font-size: 48px;
  display: flex;
  flex-direction: column;
  line-height: 0.8;
}
</style>