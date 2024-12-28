<template>
  <div>
    <div class="homepage">
      <div class="flex hero container">
        <div class="hero-text">
          <h1><span> Para al </span>, para gönder.</h1>
          <h3>Harca, harcadıkça kazan.</h3>
          <p>
            Hesabınızdan alınan gizli ücretler yok, yüksek komisyon yok, kart
            aidatı yok! <span>paran</span>olacak<span>kart</span> ile yaptığın
            alışverişlerden iade kazan veya saniyeler içerisinde hesabından
            transfer yap.
          </p>
          <Btn variant="primary">
            Hesap Oluştur
            <Icon
              name="material-symbols:arrow-right-alt-rounded"
              class="icon"
            />
          </Btn>
        </div>
        <img src="../assets/imgs/image 8.png" alt="" >
      </div>
      <div class="kazan-wrapper">
        <div class="kazan container">
          <h2>Harcadıkça kazan, <span>kazandıkça harca!</span></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.homepage {
  padding-top: $navHeight;
  background-color: black;
  .hero {
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(100dvh - $navHeight);
    .hero-text {
      display: flex;
      flex-direction: column;
      align-items: start;
      h1 {
        margin-bottom: 1rem;
        span {
          color: $primary;
        }
      }
    }
    img {
      max-width: 411px;
    }
  }
  .kazan-wrapper {
    background-color: white;
  }
}
</style>
