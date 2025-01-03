<template>
  <div class="to-action-wrapper">
    <div class="to-action container">
      <div class="img-wrapper hideMob">
        <nuxt-img class="img" src="card.png" />
      </div>
      <div class="text">
        <h2>paran<span>olacak</span> kart sahibi ol</h2>
        <p>
          paranolacak kartın ile yükledikçe harca, harcadıkça kazan. Hemen
          başvur kartını sana ulaştıralım.
        </p>
        <btn variant="primary">Başvur</btn>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.to-action-wrapper {
  background-color: white;
}
.to-action {
  display: flex;
  // flex-wrap: wrap;
  align-items: center;
  text-align: start;
  max-height: 22rem;
  gap: 30px;
  .img-wrapper {
    width: min(500px, 26%);
    display: flex;
    align-items: center;
    .img {
      width: min(340px, 100%);
      // min-width: 10px;
      object-fit: cover;
      // object-position: top;
    }
  }
  .text {
    margin-block: 3rem;
    h2 {
      span {
        font-weight: 300;
      }
    }
    p {
      min-width: 10px;
      margin-top: 1rem;
      margin-bottom: 2rem;
      max-width: 45rem;
    }
  }
}
</style>
