<template>
  <div class="main">
    <Hero img="hero.png" max-width="30rem" class="landing">
      <h1><span> Para al </span>, para gönder.</h1>
      <h3>Harca, harcadıkça kazan.</h3>
      <p>
        Hesabınızdan alınan gizli ücretler yok, yüksek komisyon yok, kart aidatı
        yok! <br />
        <span>paran</span> olacak<span> kart</span> ile yaptığın alışverişlerden
        iade kazan veya saniyeler içerisinde hesabından transfer yap.
      </p>
      <Btn variant="primary">
        Hesap Oluştur
        <Icon name="material-symbols:arrow-right-alt-rounded" class="icon" />
      </Btn>
    </Hero>
    <Hero img="hero2.png" max-width="17rem" :inv="true" class="cashback">
      <div class="cashback-content">
        <h2>Harcadıkça kazan, <span>kazandıkça harca!</span></h2>
        <p>
          Anlaşmalı üye işyerlerinden yaptığınız alışverişlerde %5 geri iade
          ediyoruz. Kartınıza yüklenen paraları dilediğiniz yerde
          harcayabilirsiniz.
        </p>
        <div class="cards">
          <div v-for="(x, n) in cashback" :key="n" class="card">
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
      <h1>PO Mobil’i <span>indirin</span>.</h1>
      <p>
        Paranolacak mobil uygulaması ile paranızı dilediğiniz gibi yönetin.
        Transfer yapın, ödeme alın ve yatırımlarınızı kontrol edin. <br />
        <br />
        PO Mobil ile tüm kontrol sizde!
      </p>
      <div class="stores">
        <nuxt-img class="img" src="google-play.png" />
        <nuxt-img class="img" src="app-store.png" />
      </div>
    </Hero>

    <div class="transfer container">
      <nuxt-img class="img" src="glass.png" />
      <h3>Saniyeler içinde <span>transfer</span> veya ödeme yapın.</h3>
      <p>
        Saniyeler içerisinde hesabınızdan transfer yapın veya ödeme alın.
        Üstelik<strong> FAST</strong> ile 100.000 ₺ limitle!
      </p>
      <div class="bill-bg">
        <div class="bill">
          <div
            v-for="(x, n) in bill"
            :key="n"
            class="row"
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
          class="img"
          :src="`${img}.png`"
          :class="img" />
      </div>
    </div>
    <div class="security container">
      <h2>Önceliğimiz sizin güvenliğiniz.</h2>
      <p>
        Güvenliğiniz bizim için önemlidir. Destek ekibimiz 7/24 hizmetinizdedir.
        Lütfen her türlü sorunuz ve probleminiz için bize danışın.
      </p>
      <div class="imgs">
        <!-- <nuxt-img v-for="n in 3" :key="n" class="img" :src="`secure${n}.png`" /> -->
        <div class="img-wrapper">
          <p>Kişisel bilgileriniz güvenli veri sunucuları ile güvendedir.</p>
          <nuxt-img class="img" src="silverdb.png" />
        </div>
        <nuxt-img class="img secure2img" src="secure2.png" />
        <div class="img-wrapper">
          <nuxt-img class="img" src="fingerprint.png" />
          <p>
            Biyometrik oturum açma ve iki faktörlü koruma ile yüksek güvenlik.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Hero from "../components/hero.vue";
import cashback from "@/content/cashback.json";
import bill from "@/content/bill.json";
const imgs = ["restaurant", "fam", "party", "rent"];
</script>

<style lang="scss" scoped>
.main {
  background: radial-gradient(circle at 100% 50dvh, $primary -10%, $white 34%);
  overflow-x: hidden;

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
      margin-top: 21rem;
      margin-bottom: 40rem;
      position: relative;
      .bill {
        background-color: #fff;
        border-radius: 14.187px;
        box-shadow: 0px 0px 69.99px 0px rgba(0, 0, 0, 0.35);
        padding: 17px 19px;
        min-width: 268px;
        z-index: 10;
        position: relative;

        .row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
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
      .img {
        position: absolute;
        z-index: 0;
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
