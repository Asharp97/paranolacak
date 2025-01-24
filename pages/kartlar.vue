<template>
  <div class="cards">
    <section class="container hero">
      <h2><span>paranolacak</span> debit kart</h2>
      <p>harcadıkça kazandıran kart</p>

      <nuxt-img class="img" src="kart_hero.png" />
      <h4>Yurt içinde ve yurt dışında tüm harcamaların tek bir yerde!</h4>
      <h5>Dünya üzerindeki 80 binden fazla ATM’den para çekin.</h5>
    </section>
    <section class="campaigns">
      <nuxt-img
        v-for="n in 4"
        :key="n"
        class="img from-below"
        :style="`animation-range:cover ${30 + n * 5}% cover ${40 + n * 5}%;`"
        :src="`campaign${n - 1}.png`" />
    </section>
    <section class="advantage">
      <nuxt-img class="img zoom-out" src="thought.png" />
      <div class="text">
        <h3 class="cover-remove">
          paran<span class="cover-remove">olacak </span>ile avantajlar dünyasına
          giriş yap!
        </h3>
        <h5 class="cover-remove">
          Kartınız ile sürekli yenilenen
          <span class="cover-remove">paran</span>olacak kampanyalarından
          faydalanın ve her ay 2000₺’ye kadar iade alın!
        </h5>
      </div>
    </section>
    <section class="temas">
      <nuxt-img class="img" src="temassiz.png" />
      <div class="text container">
        <h2 class="cover-remove">Temassız Öde</h2>
        <p class="gentle-slide">
          paranolacak kart’ının temassız ödeme özelliği ile 1000₺’ye kadar olan
          ödemelerinde şifre girmeden hızlı ve güvenli harcama yapabilirsin.
        </p>
      </div>
    </section>
    <section class="tutorial container">
      <h2 class="cover-remove">
        <span>Hemen kaydolun,</span> avantajlardan yararlanın.
      </h2>
      <div class="steps">
        <nuxt-img class="img rotato" src="download.png" />
        <div class="text">
          <img src="../assets/imgs/Vector 6.svg" class="lines" alt="" />
          <ol name="list">
            <li v-for="(step, n) in steps" :key="n">
              <div>
                <h5 class="gentle-slide">{{ step.title }}</h5>
                <p class="gentle-slide">{{ step.paragraph }}</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
    <call-to-action />
  </div>
</template>

<script setup>
const steps = ref([
  {
    title: "Kayit",
    paragraph:
      "Kayıt aşaması hızlı, kolay ve tamamen ücretsizdir. Saniyeler içinde kaydolun.",
  },
  {
    title: "KYC Doğrulama",
    paragraph:
      "Mobil uygulamamız üzerinden kimliğinizi doğrulayın. Bu işlem 5 dakika içinde tamamlanır.",
  },
  {
    title: "IBAN & Fiziksel Kart",
    paragraph:
      "IBAN'ınızı oluşturun ve fiziksel paranolacak kartınızı sipariş edin!",
  },
]);
</script>

<style lang="scss" scoped>
.cards {
  background: radial-gradient(circle at 100% 200dvh, $primary -10%, $white 34%);
  text-align: center;
  overflow: clip;

  .hero {
    h2 {
      padding-top: 10rem;
      span {
        background-color: black;
        color: $primary;
        padding-inline: 4px;
      }
    }
    p {
      font-family: "Reenie Beanie";
      font-size: 2.71919rem;
      margin-top: 2rem;
    }
    .img {
      width: min(44rem, 100%);
      margin-top: 2rem;
    }
    h4 {
      margin-top: 2rem;
    }
    h5 {
      font-size: $font20;
    }
  }
  .campaigns {
    display: flex;
    justify-content: space-between;
    gap: clamp(0.5rem, 5vw, 3rem);
    max-width: 1590px;
    flex-wrap: wrap;
    width: 90%;
    margin-inline: auto;
    margin-top: 10rem;
    .img {
      flex: 1 1 calc(25% - clamp(0.5rem, 5vw, 3rem));
      max-width: calc(25% - clamp(0.5rem, 5vw, 1rem));
      min-width: 300px;
    }
  }
  .advantage {
    display: grid;
    place-items: center;
    isolation: isolate;
    gap: 1rem;
    margin-block: 4rem;
    padding-block: 20rem;
    .img,
    .text {
      grid-column: 1/-1;
      grid-row: 1/-1;
    }
    .img {
      width: min(37rem, 90%);
    }
    .text {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding-inline: 3rem;
      h3 {
        max-width: 22rem;
        span {
          font-weight: 400;
        }
      }
      h5 {
        font-weight: 400;
        max-width: 29rem;
        font-size: $font22;
        span {
          font-weight: 700;
        }
      }
    }
  }
  .temas {
    text-align: start;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-block: 4rem;
    .text {
      // width: min(45rem, 100%);
      max-width: 45rem;
      width: 48%;
      min-width: 18rem;
      p {
        font-size: $font20;
      }
    }
    .img {
      max-width: 1300px;
      min-width: 320px;
      width: 50%;
      // flex: 1;
    }
  }
  .tutorial {
    h2 {
      margin-bottom: 7rem;
      span {
        background-color: $primary;
      }
    }
    .steps {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 4rem;
      margin-bottom: 24rem;
      .img {
        max-width: 420px;
        width: 100%;
      }
      .text {
        text-align: start;
        min-width: 130px;
        flex: 1;
        position: relative;
        .lines {
          position: absolute;
          width: 69%;
          left: -40px;
          top: 1rem;
          z-index: 0;
          min-height: 275px;
        }
        ol {
          counter-reset: item;
          list-style: none;
          display: flex;
          gap: 20px;
          flex-direction: column;
          li {
            display: flex;
            gap: 10px;
            h5 {
              font-size: $font22;
            }
            &:nth-child(2) {
              margin-left: auto;
            }
            &:last-child {
              margin-left: 7.4rem;
            }
            &:before {
              z-index: 10;
              display: inline-block;
              content: counter(item);
              background-color: $black;
              color: $primary;
              border-radius: 50%;
              width: 1rem;
              height: 1rem;
              padding: 1rem;
              font-weight: 800;
              display: flex;
              align-items: center;
              justify-content: center;
              counter-increment: item;
              margin-left: -2em;
              font-size: 2rem;
            }
            p {
              max-width: 280px;
              font-size: $font20;
            }
          }
        }
      }
    }
  }
}
</style>
