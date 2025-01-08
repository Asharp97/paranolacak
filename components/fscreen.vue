<template>
  <div class="fscreen">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.fscreen {
  position: absolute;
  top: 0;
  height: 100dvh;
  width: 100%;
  z-index: 100;
}
</style>
