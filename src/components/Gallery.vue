<script setup>

defineProps({
  src: String,
})

</script>

<template>

  <div class="wrapper gap">
    <div class="line">
      <div style="width: 20%; background: #B71B26;"></div>
      <div style="width: 40%; background: #444444;"></div>
      <div style="width: 40%; background: #ffffff;"></div>
    </div>
    <div class="line">
      <div style="width: 40%; background: #B71B26;"></div>
      <div style="width: 30%; background: #444444;"></div>
      <div style="width: 30%; background: #ffffff;"></div>
    </div>

    <div class="line">
      <div style="width: 20%; background: #B71B26;"></div>
      <div style="width: 40%; background: #444444;"></div>
      <div style="width: 40%; background: #ffffff;"></div>
    </div>

  </div>

</template>


<style scoped>
.line {
  display: flex;
  width: 100%;
  height: 300px;
  gap: 5px;
}

.gap {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>