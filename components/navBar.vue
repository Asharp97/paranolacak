<template>
  <div>
    <div class="nav-wrapper">
      <nav class="container">
        <div class="menu">
          <img src="../assets/imgs/katman_1.png" alt="" />
          <NuxtLink to="/kartlar">Kartlar </NuxtLink>
          <NuxtLink to="/ucretler-limitler">Ücretler & Limitler</NuxtLink>
          <NuxtLink to="/paranolacak">paranolacak</NuxtLink>
        </div>
        <div class="auth">
          <Btn variant="primary">Giriş Yap</Btn>
          <Btn variant="secondry">Hesap Oluştur</Btn>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.nav-wrapper {
  background-color: transparent;
  position: absolute;
  width: 100%;
  height: $navHeight;
  top: 0;
  nav {
    padding-block: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu {
      display: flex;
      align-items: center;
      gap: 55px;
    }
    color: white;
    .auth {
      display: flex;
      gap: 27px;
    }
  }
}
</style>
