<template>
  <div>
    <footer>
      <div class="container footer-content">
        <div class="info">
          <div class="menus-wrapper">
            <div v-for="(x, n) in footer" :key="n" class="menus">
              <h6>{{ x.title }}</h6>
              <div v-for="(title, y) in x.links" :key="y" class="menu">
                <NuxtLink :to="title.url">
                  <p class="gentle-slide">{{ title.name }}</p>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="contact-info">
            <div>
              <div class="footer-title">DESTEK HATTI</div>
              <NuxtLink to="tel:0800 800 80 80">
                <p class="gentle-slide">0800 800 80 80</p>
              </NuxtLink>
              <NuxtLink to="mailto:destek@paranolacak.com">
                <p class="gentle-slide">destek@paranolacak.com</p>
              </NuxtLink>
            </div>
            <div>
              <div class="footer-title">SOSYAL MEDYA</div>
              <div class="social-media">
                <NuxtLink
                  v-for="(x, n) in social"
                  :key="n"
                  target="_blank"
                  :to="x.link"
                  class="gentle-slide"
                  :title="x.name"
                >
                  <Icon :name="x.icon" class="icon" />
                </NuxtLink>
              </div>
            </div>
            <div>
              <div class="footer-title">Ödeme Altyapısı</div>
              <NuxtLink
                to="https://www.mastercard.com.tr/tr-tr.html"
                target="_blank"
                class="gentle-slide"
              >
                <Icon name="lineicons:mastercard" class="mastercard icon" />
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="legal">
          <nuxt-img class="img" src="logo.png" />
          <p class="gentle-slide">
            ParanOlacak, Türkiye Cumhuriyeti Merkez Bankası tarafından
            elektronik para (e-para) ihraç etme ve ödeme hizmetleri sağlama
            yetkisine sahiptir. (Şirket Numarası: 12472532) tarafından verilir
            (Firma Referans Numarası 901097). Mastercard®️ Mastercard
            International Incorporated'ın tescilli ticari markasıdır. Kart,
            Mastercard International Inc. tarafından verilen lisans uyarınca
            ParanOlacak tarafından düzenlenmektedir.
            <br />
            <br />ParanOlacak, Türkiye’de 14815623 tescil numarasıyla kayıtlı
            bir limited şirket olan Paran Olacak Elektronik Para Ltd'nin
            tescilli ticari markasıdır.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import footer from "../content/footer.json";
import social from "../content/social.json";
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 700px;
  padding: 2rem;
  color: $white;
  background-color: $black;
  z-index: 10;
  position: relative;
  .footer-content {
    .info {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      .menus-wrapper {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 770px;
        width: 100%;
        margin-bottom: 70px;
        .menus {
          h6 {
            border-bottom: 2px solid $primary;
            margin-bottom: 13px;
          }
          .menu {
            p {
              font-size: 15px;
              margin-bottom: 13px;
            }
          }
        }
      }

      .contact-info {
        display: flex;
        flex-direction: column;
        gap: 40px;
        text-align: right;
        .footer-title {
          color: $primary;
          font-size: 18.916px;
          font-weight: 400;
          letter-spacing: 8.512px;
        }
        .social-media {
          font-size: 30px;
          display: flex;
          gap: 40px;
          justify-content: end;
        }
        .mastercard {
          font-size: 5rem;
        }
      }
    }
    .legal {
      .img {
        max-width: 139px;
        width: 100%;
        margin-bottom: 20px;
      }
      p {
        font-size: 15px;
      }
    }
  }
}
</style>
