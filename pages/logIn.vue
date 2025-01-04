<template>
  <div>
    <Auth>
      <h6>İnternet Şubesi Giriş</h6>
      <div class="input-wrapper">
        <input type="text" placeholder="TCKN veya GSM No" />
      </div>
      <div class="input-wrapper">
        <input type="password" placeholder="Şifreniz" />
      </div>
      <div class="btns-wrapper">
        <Btn variant="fill">Giriş Yap</Btn>
        <Btn variant="secondry">Şifremi Unuttum</Btn>
      </div>
      <p>
        Bir <span>paran</span>olacak hesabınız yok mu?<br />Üzülmeyin, hesap
        açmak tamamen ücretsizdir.
      </p>
      <Btn variant="primary" text-color="white" destination="signUp"
        >Ücretsiz Hesap Aç</Btn
      >
    </Auth>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
::v-deep(.btn) {
  width: 100%;
  button {
    width: 100%;
  }
}

p {
  text-align: center;
}
</style>
