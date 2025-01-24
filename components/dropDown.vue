<template>
  <div>
    <MazDropdown :items="options" trigger="click">
      <slot />
    </MazDropdown>
  </div>
</template>

<script setup>
defineProps(["options"]);
</script>

<style lang="scss" scoped>
.m-dropdown__icon {
  color: white !important;
  fill: white;
}
</style>
