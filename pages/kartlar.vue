<template>
  <div class="cards">
    <div class="container hero">
      <h2><span>paranolacak</span> debit kart</h2>
      <p>harcadıkça kazandıran kart</p>

      <nuxt-img class="img" src="kart_hero.png" />
      <h4>Yurt içinde ve yurt dışında tüm harcamaların tek bir yerde!</h4>
      <h5>Dünya üzerindeki 80 binden fazla ATM’den para çekin.</h5>
    </div>
    <div class="container campaigns">
      <nuxt-img
        v-for="n in 4"
        :key="n"
        class="img"
        :src="`campaign${n - 1}.png`" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.cards {
  .hero {
    text-align: center;
    h2 {
      margin-top: 2rem;
      span {
        background-color: black;
        color: $primary;
        padding-inline: 4px;
      }
    }
    p {
      font-family: "Reenie Beanie";
      font-size: 2.71919rem;
    }
  }
  .campaigns {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    .img {
      max-width: 23rem;
      width: 100%;
    }
  }
}
</style>
