<script setup>

import {onMounted} from "vue";

defineProps({
  src: String,
})

</script>

<template>
<section v-motion
         :initial="{ opacity: 0, y: 100 }"
         :visible="{ opacity: 1, y: 0, scale: 1 }"
         :enter="{ opacity: 1, y: 0, scale: 1 }"
         :delay="600" class="main--margin">
  <div class="wrapper gap">
    <div class="line">
      <div class="image--insert1" style="width: 20%;"></div>
      <div class="image--insert2" style="width: 40%;"></div>
      <div class="image--insert3" style="width: 40%;"></div>
    </div>
    <div class="line">
      <div class="image--insert4" style="width: 40%;"></div>
      <div class="image--insert5" style="width: 30%;"></div>
      <div class="image--insert6" style="width: 30%;"></div>
    </div>

    <div class="line">
      <div class="image--insert7" style="width: 20%;"></div>
      <div class="image--insert8" style="width: 40%;"></div>
      <div class="image--insert9" style="width: 40%;"></div>
    </div>

  </div>
</section>
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

.image--insert1 {
  background-image: url('public/images/gallery/1.jpg'); background-size: cover;
}

.image--insert1:hover {
  transform: scale(105%);
}

.image--insert2 {
  background-image: url('public/images/gallery/2.jpg'); background-size: cover;
}

.image--insert2:hover {
  transform: scale(105%);
}

.image--insert3 {
  background-image: url('public/images/gallery/3.jpg'); background-size: cover;
}

.image--insert3:hover {
  transform: scale(105%);
}

.image--insert4 {
  background-image: url('public/images/gallery/5.jpg'); background-size: cover;
}

.image--insert4:hover {
  transform: scale(105%);
}

.image--insert5 {
  background-image: url('public/images/gallery/5.jpg'); background-size: cover;
}

.image--insert5:hover {
  transform: scale(105%);
}

.image--insert6 {
  background-image: url('public/images/gallery/6.jpg'); background-size: cover;
}

.image--insert6:hover {
  transform: scale(105%);
}

.image--insert7 {
  background-image: url('public/images/gallery/7.jpg'); background-size: cover;
}

.image--insert7:hover {
  transform: scale(105%);
}

.image--insert8 {
  background-image: url('public/images/gallery/8.jpg'); background-size: cover;
}

.image--insert8:hover {
  transform: scale(105%);
}

.image--insert9 {
  background-image: url('public/images/gallery/9.jpg'); background-size: cover;
}

.image--insert9:hover {
  transform: scale(105%);
}


</style>