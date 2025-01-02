<template>
  <div>
    <div class="nav-wrapper">
      <nav class="container hideMob">
        <div class="menu">
          <NuxtLink to="/"
            ><img src="../assets/imgs/katman_1.png" alt=""
          /></NuxtLink>
          <NuxtLink v-for="(x, n) in menu" :key="n" :to="`/${x.link}`"
            ><div class="headers">{{ x.name }}</div>
          </NuxtLink>
        </div>
        <div class="auth">
          <Btn variant="primary" text-color="white">Giriş Yap</Btn>
          <Btn variant="secondry">Hesap Oluştur</Btn>
        </div>
      </nav>
      <nav>
        <div class="mobile-nav showMob">
          <div class="nav container">
            <img src="../assets/imgs/katman_1.png" alt="" />
            <div class="icon-wrapper" @click="showNav = true">
              <Icon
                name="icon-park-outline:hamburger-button"
                class="hamburger icon" />
            </div>
          </div>
          <Transition name="slide-left">
            <div v-show="showNav" class="menu" @click.self="showNav = false">
              <div class="menu-content">
                <div class="back">
                  <NuxtLink to="/">
                    <nuxt-img class="img" src="miniLogo.png" />
                  </NuxtLink>
                  <div class="icon-wrapper">
                    <Icon
                      name="material-symbols:arrow-forward-ios-rounded"
                      class="forward icon"
                      @click="showNav = false" />
                  </div>
                </div>
                <div class="hr" />
                <NuxtLink v-for="(x, n) in menu" :key="n" :to="`/${x.link}`"
                  ><h4>{{ x.name }}</h4>
                </NuxtLink>
                <div class="hr" />
                <div class="auth">
                  <Btn variant="primary">Giriş Yap</Btn>
                  <Btn variant="secondryAlt">Hesap Oluştur</Btn>
                </div>
                <div class="footer">
                  <div class="logo">
                    <nuxt-img class="img" src="miniLogoDark.png" />
                  </div>
                  <div class="copyright">
                    <p>Geliştirici: Ali Elsayed</p>
                    <p>© 2025 Ayhanlar Holding. Tüm hakları saklıdır.</p>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
const showNav = ref(false);
watch(showNav, () => {
  if (showNav.value == true) {
    document.body.classList.add("no-scroll"); // Add no-scroll class
  } else {
    document.body.classList.remove("no-scroll"); // Remove no-scroll class
  }
});
const menu = [
  {
    link: "kartlar",
    name: "Kartlar",
  },
  {
    link: "ucretler-limitler",
    name: "Ücretler & Limitler",
  },
  {
    link: "paranolacak",
    name: "Paranolacak",
  },
];
</script>

<style lang="scss" scoped>
.nav-wrapper {
  background-color: transparent;
  width: 100%;
  height: $navHeight;
  background-color: $black;
  color: white;
  nav {
    padding-block: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu {
      display: flex;
      align-items: center;
      gap: 55px;
      .router-link-active {
        .headers {
          background-color: $primary;
          border-radius: 0.25rem;
          padding-inline: 1rem;
          padding-block: 0.5rem;
        }
      }
    }
    .auth {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 240px;
    }
    .mobile-nav {
      width: 100%;
      .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .icon-wrapper {
        font-size: 1.5rem;
      }
      .menu {
        width: 100%;
        height: 100dvh;
        position: absolute;
        z-index: 10;
        backdrop-filter: blur(1rem);
        background-color: rgba(0, 0, 0, 0.418);
        top: 0;
        display: flex;
        justify-content: end;
        .router-link-active {
          h4 {
            background-color: $primary;
            padding: 1rem;
            border-radius: 4px;
          }
        }

        .menu-content {
          display: flex;
          flex-direction: column;
          background-color: $white;
          height: 100dvh;
          width: 60%;
          color: $black;
          padding: 1rem;
          border-radius: 1rem 0 0 1rem;
          gap: 2rem;

          .back {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            * {
              height: 2rem;
            }
            .icon-wrapper {
              background-color: black;
              width: 2rem;
              border-radius: 1rem;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-left: auto;
              .forward {
                color: $primary;
              }
            }
          }
          .footer {
            margin-top: auto;
            display: flex;
            align-items: center;
            text-align: center;
            gap: 1rem;
            .logo {
              .img {
                width: 2rem;
              }
            }
            .copyright {
              p {
                font-size: 11px;
                color: gray;
              }
            }
          }
        }
      }
    }
  }
}
</style>
