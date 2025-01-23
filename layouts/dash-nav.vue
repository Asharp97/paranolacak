<template>
  <div>
    <nav-bar :menu="menu.dashboard" />
    <slot />
    <Foot />
  </div>
</template>

<script setup>
import menu from "@/content/menus.json";
</script>

<style lang="scss" scoped></style>
