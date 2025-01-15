import { defineStore } from "pinia";

export const useSession = defineStore(
  "session",
  () => {
    const user = ref("");
    const token = ref("");

    function reset() {
      user.value = "";
      token.value = "";
    }
    function set(x: any) {
      user.value = x.user;
      token.value = x.session;
    }

    return { user, token, reset, set };
  },
  {
    persist: true,
  }
);
