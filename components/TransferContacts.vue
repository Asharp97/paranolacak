<template>
  <div>
    <h3>Kayıtlı Alıcılar</h3>
    <div class="contact-wrapper">
      <button v-for="x in contacts" :key="x" class="contact">
        <div class="contact-image">{{ getInit(x.name) }}</div>
        <div class="contact-name">{{ x.name }}</div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { getInit } from "@/utils/misc";
defineProps(["contacts"]);
</script>

<style lang="scss" scoped>
h3 {
  font-size: $font18;
  margin-top: 3rem;
}
.contact-wrapper {
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;
  .contact {
    all: unset;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.25rem;
    .contact-image {
      background-color: $primary;
      width: fit-content;
      border-radius: 50%;
      padding: 1rem;
    }
    .contact-name {
      width: min-content;
      text-align: center;
      // max-height: 2.8rem;
      overflow: hidden;
      // overflow: clip;
      // white-space: nowrap;
      // text-overflow: ellipsis;
    }
  }
}
</style>
