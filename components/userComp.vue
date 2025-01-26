<template>
  <div v-if="session.user" class="user">
    <div class="trigger">
      <drop-down :options="userMenu">
        <p>
          Hoş geldiniz <span> Sn {{ session.user }}</span>
        </p>
        <Icon name="material-symbols:keyboard-arrow-down" class="icon" />
      </drop-down>
    </div>
    <Btn
      :variant="inv ? 'fill' : 'secondry'"
      :text-color="{ white: !inv }"
      text="Çıkış Yap"
      @click="session.reset()" />
  </div>
</template>

<script setup>
defineProps(["inv"]);
const session = useSession();
const userMenu = [
  { label: "Hesabım", to: { name: "dashboard" } },
  { label: "Ayarlar", to: { name: "index" } },
  { label: "Destek Merkezi", to: { name: "index" } },
  { label: "Limitlerim", to: { name: "ucretler-limitler" } },
  { label: "Güvenli Çıkış", action: () => session.reset() },
];
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;
  gap: 1rem;
  .trigger {
    display: flex;
    align-items: center;
    gap: 10px;
    p {
      color: white;
      white-space: nowrap;
    }
  }
  .icon {
    color: white;
  }
}
</style>
