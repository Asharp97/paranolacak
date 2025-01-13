<template>
  <div class="main">
    <Hero class="landing" :video="true">
      <h1><span> Para al </span>, para gönder.</h1>
      <h3>Harca, harcadıkça kazan.</h3>
      <p>
        Hesabınızdan alınan gizli ücretler yok, yüksek komisyon yok, kart aidatı
        yok! <br />
        <span>paran</span> olacak<span> kart</span> ile yaptığın alışverişlerden
        iade kazan veya saniyeler içerisinde hesabından transfer yap.
      </p>
      <Btn variant="primary" destination="signUp">
        Hesap Oluştur
        <Icon name="material-symbols:arrow-right-alt-rounded" class="icon" />
      </Btn>
    </Hero>
    <Hero img="hero2.png" max-width="17rem" :inv="true" class="cashback">
      <div class="cashback-content">
        <h2 class="cover-remove">
          Harcadıkça kazan, <span>kazandıkça harca!</span>
        </h2>
        <p class="gentle-slide">
          Anlaşmalı üye işyerlerinden yaptığınız alışverişlerde %5 geri iade
          ediyoruz. Kartınıza yüklenen paraları dilediğiniz yerde
          harcayabilirsiniz.
        </p>
        <div class="cards">
          <div
            v-for="(x, n) in cashback"
            :key="n"
            :style="`animation-range:cover ${30 + n * 5}% cover ${
              40 + n * 5
            }%;`"
            class="card from-below-blur">
            <div class="text">
              <h5>{{ x.title }} Cashback</h5>
              <p>{{ x.description }}</p>
            </div>
            <nuxt-img class="img" :src="x.logo" />
          </div>
        </div>
      </div>
    </Hero>
    <Hero img="download.png" max-width="419px" :inv="true" class="download">
      <h1 class="cover-remove">PO Mobil’i <span>indirin</span>.</h1>
      <p class="gentle-slide">
        Paranolacak mobil uygulaması ile paranızı dilediğiniz gibi yönetin.
        Transfer yapın, ödeme alın ve yatırımlarınızı kontrol edin. <br />
        <br />
        PO Mobil ile tüm kontrol sizde!
      </p>
      <div class="stores">
        <nuxt-img class="img from-below-blur" src="google-play.png" />
        <nuxt-img
          class="img from-below-blur"
          src="app-store.png"
          style="animation-range: cover 35% cover 45%" />
      </div>
    </Hero>

    <section class="transfer container">
      <nuxt-img class="img from-below-blur" src="glass.png" />
      <h3 class="cover-remove">
        Saniyeler içinde <span>transfer</span> veya ödeme yapın.
      </h3>
      <p class="gentle-slide">
        Saniyeler içerisinde hesabınızdan transfer yapın veya ödeme alın.
        Üstelik<strong> FAST</strong> ile 100.000 ₺ limitle!
      </p>
      <div class="bill-bg">
        <div class="bill">
          <div
            v-for="(x, n) in bill"
            :key="n"
            class="row elastic-enter-mb"
            :class="{ bold: n == 0 }">
            <div class="category">
              <div v-if="x.icon" class="icon-wrapper">
                <Icon :name="x.icon" class="icon" />
              </div>
              <p>{{ x.category }}</p>
            </div>
            <p class="amount">{{ x.amount }}</p>
          </div>
        </div>
        <nuxt-img
          v-for="(img, n) in imgs"
          :key="n"
          class="img from-below"
          :style="`animation-range:cover ${30 + n * 5}% cover ${40 + n * 5}%;`"
          :src="`${img}.png`"
          :class="img" />

        <div class="comments">
          <div v-for="(x, n) in comments" :key="n" class="comment from-below">
            <Icon :name="x.icon" class="icon" />
            <p>{{ x.text }}</p>
            <img src="../assets/imgs/Vector 5.svg" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="security container">
      <h2 class="cover-remove">Önceliğimiz sizin güvenliğiniz.</h2>
      <p class="gentle-slide">
        Güvenliğiniz bizim için önemlidir. Destek ekibimiz 7/24 hizmetinizdedir.
        Lütfen her türlü sorunuz ve probleminiz için bize danışın.
      </p>
      <div class="imgs">
        <!-- <nuxt-img v-for="n in 3" :key="n" class="img" :src="`secure${n}.png`" /> -->
        <div class="img-wrapper from-below-blur">
          <p class="gentle-slide" style="animation-range: cover 5% cover 50%">
            Kişisel bilgileriniz güvenli veri sunucuları ile güvendedir.
          </p>
          <nuxt-img class="img" src="silverdb.png" />
        </div>
        <nuxt-img
          class="img secure2img from-below-blur"
          src="secure2.png"
          style="animation-range: cover 20% cover 30%" />
        <div
          class="img-wrapper from-below-blur"
          style="animation-range: cover 40% cover 50%">
          <nuxt-img class="img" src="fingerprint.png" />
          <p>
            Biyometrik oturum açma ve iki faktörlü koruma ile yüksek güvenlik.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from "../components/hero.vue";
import cashback from "@/content/cashback.json";
import bill from "@/content/bill.json";
definePageMeta({ layout: "transparent-nav" });
const imgs = ["restaurant", "fam", "party", "rent"];
const comments = [
  {
    icon: "twemoji:beaming-face-with-smiling-eyes",
    text: "lezzetli bir akşam yemeği",
  },
  {
    icon: "twemoji:money-with-wings",
    text: "ev kirası ödendi",
  },
  {
    icon: "twemoji:service-dog",
    text: "köpeğimi çok seviyorum",
  },
];
</script>

<style lang="scss" scoped>
section {
  padding-block: 10dvh;
}
.main {
  background: radial-gradient(circle at 100% 50dvh, $primary -10%, $white 34%);

  .landing {
    padding-top: $navHeight;

    h1 {
      line-height: 1;
      span {
        color: $primary;
      }
    }
    p {
      max-width: 650px;
      margin-bottom: 34px;
      margin-top: 1.8rem;
    }
  }
  .cashback {
    .cashback-content {
      max-width: 58rem;
      h2 {
        span {
          background-color: $primary;
        }
      }
      p {
        max-width: 600px;
        margin-bottom: 57px;
      }
      .cards {
        display: flex;
        flex-wrap: wrap;
        gap: 28px;
        .card {
          min-width: 260px;
          max-width: 16rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          p {
            margin-bottom: 14px;
          }
          .img {
            width: 94px;
          }
        }
      }
    }
  }
  .download {
    h1 {
      span {
        background-color: $black;
        color: $primary;
      }
    }
    p {
      margin-bottom: 28px;
      max-width: 580px;
    }
    .stores {
      display: flex;
      gap: 12px;
      .img {
        max-width: 172px;
        width: 50%;
      }
    }
  }
  .transfer {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h3 {
      max-width: 533px;
      span {
        background-color: $primary;
      }
    }
    p {
      max-width: 600px;
    }
    .bill-bg {
      margin-top: 16rem;
      margin-bottom: 20rem;
      position: relative;
      .bill {
        background-color: #fff;
        border-radius: 14.187px;
        box-shadow: 0px 0px 69.99px 0px rgba(0, 0, 0, 0.35);
        padding: 17px 19px;
        min-width: 268px;
        z-index: 10;
        position: relative;

        display: flex;
        flex-direction: column;
        gap: 20px;

        .row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .category {
            display: flex;
            align-items: center;
            gap: 6px;
            p {
              font-size: 15px;
            }
            .icon-wrapper {
              width: 28px;
              height: 28px;
              background-color: black;
              color: $primary;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
            }
          }
          .amount {
            color: #808080;
            text-align: right;
            font-size: 15.133px;
          }
        }
      }
      .comment {
        border: 2px solid $primary;
        border-radius: 1rem;
        position: absolute;
        padding-inline: 1rem;
        padding-block: 0.5rem;
        img {
          position: absolute;
          z-index: 1;
        }
        &:first-child {
          top: -12rem;
          right: 0rem;
          img {
            bottom: -93px;
            right: 133px;
            transform: rotate(2deg);
          }
        }
        &:nth-child(2) {
          top: -7rem;
          right: -8rem;
          img {
            bottom: -110px;
            right: 40px;
            transform: rotate(-30deg);
          }
        }
        &:last-child {
          background-color: $primary;
          bottom: -15rem;
          right: -4rem;
          img {
            top: -100px;
            right: 0;
          }
        }

        .icon {
          transform: translate(-50%, -50%);
          top: -5px;
          font-size: 1.5rem;
          position: absolute;
        }
      }
      .img {
        position: absolute;
        z-index: 2;
        max-width: 366px;
        width: 100%;
      }
      .fam {
        bottom: -100px;
        right: -207px;
      }
      .restaurant {
        top: -80px;
        left: -210px;
      }
      .rent {
        top: 0;
        right: -230px;
      }
      .party {
        bottom: -79px;
        left: -197px;
      }
      .bold {
        border-bottom: 1px solid #dadada;
        .category p,
        p {
          color: #000 !important;
          font-size: 17.025px;
          font-weight: 800;
        }
      }
    }
  }
  .security {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20rem;
    p {
      max-width: 56rem;
      text-align: center;
      margin-top: 2rem;
    }
    .imgs {
      display: flex;
      align-items: flex-end;
      justify-content: space-evenly;
      flex-wrap: wrap;
      margin-top: 50px;
      width: 100%;

      .img-wrapper {
        background: radial-gradient(
          circle at 50% 50%,
          $primary -50%,
          $black 80%
        );
        box-shadow: 0px 0px 69.99px 0px rgba(37, 239, 125, 0.452);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 50px;
        border-radius: 10px;
        text-align: center;
        width: 100%;
        max-width: 341px;

        p {
          color: $white;
          max-width: 274px;
          font-size: 26px;
          text-align: center;
          font-weight: 600;
          line-height: 34.995px; /* 132.143% */
          letter-spacing: -1.059px;
        }
      }
      .secure2img {
        max-width: 424px;
        width: 100%;
      }
    }
  }
}
</style>
