<template>
  <div>
    <Auth>
      <TransitionGroup name="list" tag="form">
        <h6 class="title">İnternet Şubesi Giriş</h6>
        <Login-Form />
        <p class="footer-text">
          Bir <span>paran</span>olacak hesabınız yok mu?<br />Üzülmeyin, hesap
          açmak tamamen ücretsizdir.
        </p>
        <Btn variant="primary" text-color="white" destination="signUp">
          Ücretsiz Hesap Aç
        </Btn>
      </TransitionGroup>
    </Auth>
  </div>
</template>
