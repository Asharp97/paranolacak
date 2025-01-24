<template>
  <div v-if="session.user" class="user">
    <div class="trigger">
      <p>
        Hoş geldiniz <span> Sn {{ session.user }}</span>
      </p>
      <drop-down :options="userMenu" />
    </div>
    <Btn
      :variant="inv ? 'fill' : 'secondry'"
      :text-color="{ white: !inv }"
      text="Çıkış Yap"
      @click="session.reset()" />
  </div>
</template>

<script setup>
import menu from "@/content/menus.json";
defineProps(["inv"]);
const session = useSession();
const userMenu = [
  { label: "Action", action: () => session.reset() },
  { label: "Link (href)", href: "https://www.google.com", target: "_blank" },
  { label: "Router Link", to: { name: "index" } },
];
</script>

<style lang="scss" scoped>
.trigger {
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    white-space: nowrap;
  }
}
.icon {
  color: white;
}
.user {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
