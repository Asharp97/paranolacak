<template>
  <div class="section-bg">
    <section class="section container" :class="{ inv: inv }">
      <div class="text">
        <h1>{{ header }}</h1>
        <p>{{ paragraph }}</p>
        <slot />
      </div>
      <div class="img" :style="`max-width: ${maxWidth}`">
        <nuxt-img class="img" :src="`${img}`" />
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps(["inv", "header", "paragraph", "img", "maxWidth"]);
</script>

<style lang="scss" scoped>
.section-bg {
  .section {
    min-height: calc(100dvh - $navHeight);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    gap: 60px;
    .img {
      width: 100%;
    }
  }
  .inv {
    .text {
      order: 1;
    }
  }
}
</style>
