import { defineStore } from "pinia";
import { ref } from "vue";

export const useModal = defineStore("modal", () => {
  const show = ref(null);

  function close() {
    show.value = null;
  }

  return { show, close };
});
