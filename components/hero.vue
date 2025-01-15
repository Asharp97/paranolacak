<template>
  <section class="hero-component section-bg" :class="{ grad: video }">
    <div class="section container" :class="{ inv: inv }">
      <div class="text" :class="{ white: video }">
        <h1>{{ header }}</h1>
        <p>{{ paragraph }}</p>
        <slot />
      </div>
      <div v-if="img" class="img rotato" :style="`max-width: ${maxWidth}`">
        <nuxt-img class="img float" :src="`${img}`" />
      </div>
      <video
        v-if="video"
        class="video-src hideTab"
        autoplay
        muted
        playsinline
        src="https://ik.imagekit.io/sharp/paranolacak/hero.mp4" />
    </div>
  </section>
</template>

<script setup>
defineProps(["inv", "header", "paragraph", "img", "maxWidth", "video"]);
</script>

<style lang="scss" scoped>
.grad {
  background: radial-gradient(circle at 100% 25dvh, $primary -200%, $black 74%);
}
.section-bg {
  position: relative;
  .section {
    min-height: calc(100dvh - $navHeight);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    gap: 60px;
    .text {
      z-index: 2;
    }
    .img {
      width: 100%;
    }
    .white {
      color: white;
    }
    .video-src {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: bottom;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1;
    }
  }
  .inv {
    .text {
      order: 1;
    }
  }
}
</style>
