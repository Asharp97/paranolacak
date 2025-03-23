<template>
  <Auth>
    <TransitionGroup name="list" tag="form" @submit.prevent>
      <h6 class="title">İnternet Şubesi Giriş</h6>
      <Login-Form />
      <p class="footer-text">
        Bir <span>paran</span>olacak hesabınız yok mu?<br />Üzülmeyin, hesap
        açmak tamamen ücretsizdir.
      </p>
      <Btn
        variant="primary"
        text="Ücretsiz Hesap Aç"
        text-color="white"
        @click="modal.show = 'signup'" />
      <!-- remove meeeee
      <button @click="auth.set({ user: 'Ali Elsayed', session: '123123123' })">
        quick login
      </button> -->
    </TransitionGroup>
  </Auth>
</template>
<script setup>
const modal = useModal();
const auth = useSession();
</script>

<style lang="scss" scoped></style>
