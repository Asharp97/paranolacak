<template>
  <div v-if="session.user" class="user">
    <div>
      Hoş geldiniz <span> Sn {{ session.user }}</span>
    </div>
    <Btn
      :variant="inv ? 'fill' : 'secondry'"
      :text-color="{ white: !inv }"
      text="Çıkış Yap"
      @click="session.reset()"
    />
  </div>
</template>

<script setup>
defineProps(["inv"]);
const session = useSession();
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
