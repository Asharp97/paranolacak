<template>
  <div v-if="auth.user" class="user">
    <div class="trigger">
      <drop-down :options="userMenu">
        <p>
          Hoş geldiniz <span> Sn {{ auth.user }}</span>
        </p>
        <Icon name="material-symbols:keyboard-arrow-down" class="icon" />
      </drop-down>
    </div>
    <Btn
      :variant="inv ? 'fill' : 'secondry'"
      :text-color="{ white: !inv }"
      text="Çıkış Yap"
      @click="auth.reset()" />
  </div>
</template>

<script setup>
defineProps(["inv"]);
const auth = useSession();
const userMenu = [
  { label: "Hesabım", to: { name: "dashboard" } },
  { label: "Ayarlar", to: { name: "index" } },
  { label: "Destek Merkezi", to: { name: "index" } },
  { label: "Limitlerim", to: { name: "ucretler-limitler" } },
  { label: "Güvenli Çıkış", action: () => auth.reset() },
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
