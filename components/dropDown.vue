<template>
  <div>
    <MazDropdown
      :items="options"
      trigger="click"
      size="xl"
      :no-chevron="true"
      menu-panel-class="menuboy"
      position="bottom right">
      <slot />
    </MazDropdown>
  </div>
</template>

<script setup>
defineProps(["options"]);
</script>

<style>
/* .m-dropdown__icon {
  fill: white;
} */
.m-btn {
  /* width: 1rem; */
  padding: 0 !important;
}

.menuboy {
  button {
    justify-content: start;
  }
}
</style>
