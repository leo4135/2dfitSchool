<script setup>

</script>

<template>
  <footer v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible="{ opacity: 1, y: 0, scale: 1 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :delay="600" style="background: #1F1F1F; padding: 5% 0;">
    <div class="wrapper" style="background: #1F1F1F">
      <div class="main__container">
        <div class="logo__and__contacts">
          <div class="logo__header" style="visibility: visible">
            <img src="/src/assets/2d-fit-logo-2.svg">
          </div>
          <div class="contacts">
            <p style="text-transform: uppercase; margin-bottom: 20px"> фитнес клуб 2d fit</p>
            <p>+7 (812) 926-25-22</p>
            <p>support@2d-fit.ru</p>
            <p>Санкт-Петербург, пр. Королёва, 65</p>
            <p>Документы</p>
          </div>
        </div>
        <div class="container__for__logo">
          <div class="container__for__svg">
            <svg class="svg__banner__logo__social" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                 viewBox="0 0 24 24">
              <path fill="currentColor"
                    d="M21.503 18.381h-2.281c-.863 0-1.123-.699-2.67-2.247c-1.352-1.303-1.923-1.465-2.265-1.465c-.473 0-.602.13-.602.781v2.052c0 .555-.18.88-1.63.88a8.9 8.9 0 0 1-6.955-4.17a18.18 18.18 0 0 1-3.6-7.558c0-.342.13-.652.782-.652h2.28c.586 0 .797.261 1.027.864c1.107 3.258 2.996 6.092 3.763 6.092c.294 0 .422-.13.422-.863V8.739c-.097-1.531-.91-1.66-.91-2.214a.563.563 0 0 1 .585-.523h3.584c.49 0 .652.244.652.83v4.53c0 .489.21.651.358.651c.294 0 .52-.162 1.059-.7a18.76 18.76 0 0 0 2.802-4.66a.982.982 0 0 1 .993-.65h2.281c.684 0 .829.342.684.83a28.466 28.466 0 0 1-3.062 5.262c-.246.375-.344.57 0 1.01c.226.342 1.026 1.01 1.563 1.645c.782.78 1.431 1.682 1.922 2.67c.196.636-.131.961-.782.961Z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.logo__header {
  visibility: visible;
}

.container__for__svg {
  border: 2px solid var(--h-and-border);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
}
.main__container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.logo__and__contacts {
  display: flex;
  gap: 40px;
}

.logo__and__contacts p {
  font-weight: 200;
}
</style>