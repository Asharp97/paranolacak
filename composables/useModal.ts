import { defineStore } from "pinia";
import { ref } from "vue";

export const useModal = defineStore("modal", () => {
  const show = ref("");

  function close() {
    show.value = "";
  }

  

  return { show, close };
});
