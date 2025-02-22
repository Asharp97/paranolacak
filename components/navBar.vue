<template>
  <div>
    <div class="nav-wrapper" :class="{ transparent: transparent }">
      <nav class="desktop-nav container hideMob hideTab">
        <div class="menu">
          <NuxtLink to="/">
            <nuxt-img class="img desktop-logo" src="logo.png" />
          </NuxtLink>
          <NuxtLink
            v-for="(x, n) in menu"
            :key="n"
            :to="`/${x.link}`"
            class="link-wrapper"
            :class="{ active: isActive(`/${x.parent}`) }">
            <div class="link">
              <div v-for="n in 3" :key="n" class="headers">{{ x.name }}</div>
            </div>
          </NuxtLink>
        </div>
        <user-comp />
        <div v-if="!session.user" class="auth">
          <Btn
            variant="primary"
            text-color="white"
            @click="modal.show = 'login'"
            >Giriş Yap</Btn
          >
          <Btn variant="secondry" @click="modal.show = 'signup'"
            >Hesap Oluştur</Btn
          >
          <!-- remove meeeeee -->
          <!-- <Btn variant="secondry" @click="modal.show = 'kimlik-foto'"
            >kimlik-foto</Btn
          > -->
        </div>
      </nav>
      <nav class="mobile-nav showMob showTab">
        <div class="mobile-nav">
          <div class="nav container">
            <NuxtLink to="/">
              <nuxt-img class="img" src="logo.png" />
            </NuxtLink>
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
                    <!-- <nuxt-img class="img" src="miniLogo.png" /> -->
                    <img src="../public/favicon.ico" alt="" class="img" />
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
                <div v-if="!session.user" class="auth">
                  <Btn variant="primary" @click="modal.show = 'login'"
                    >Giriş Yap</Btn
                  >
                  <Btn variant="secondryAlt" @click="modal.show = 'signup'"
                    >Hesap Oluştur</Btn
                  >
                </div>
                <user-comp :inv="true" />
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
    <Teleport to="body">
      <Transition name="fade" class="modals">
        <fscreen v-if="modal.show == 'login'">
          <Log-in />
        </fscreen>
        <fscreen v-else-if="modal.show == 'signup'">
          <Sign-up />
        </fscreen>
        <!-- remove meeeeeee  -->
        <!-- <fscreen v-else-if="modal.show == 'kimlik-foto'">
          <kimlik-foto />
        </fscreen> -->
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
defineProps(["transparent", "menu"]);
const showNav = ref(false);
const modal = useModal();
const session = useSession();
const route = useRoute();

const isActive = (parentPath) => route.path.startsWith(parentPath);
// const lenis = useLenis();
watch(showNav, () => {
  if (showNav.value == true) {
    document.body.classList.add("no-scroll"); // Add no-scroll class
    // lenis.stop();
  } else {
    document.body.classList.remove("no-scroll"); // Remove no-scroll class
    // lenis.start();
  }
});
</script>

<style lang="scss" scoped>
.transparent {
  background-color: transparent !important;
  position: absolute;
  // top: 0;
  z-index: 50;
}
.nav-wrapper {
  width: 100%;
  height: $navHeight;
  background-color: $black;
  color: white;
  display: flex;
  align-items: center;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      max-width: 38rem;
      width: 100%;
      .desktop-logo {
        width: 150px;
        transform: translateY(3px);
      }
      .link-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        height: 26%;
        overflow-y: clip;
        padding-inline: 10px;
        .link {
          &:hover {
            transform: translateY(-67%);
            transition: 500ms;
          }
          .headers {
            &:last-child {
              // background-color: $primary;
              color: $primary;
              // color: black;
            }
          }
        }
      }
      .router-link-active,
      .active {
        .headers {
          color: $primary;
          // background-color: $primary;
          // border-radius: 0.25rem;
          // padding-inline: 1rem;
          // padding-block: 0.5rem;
          // color: black;
        }
      }
    }
    .auth {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 240px;
    }
  }
  .mobile-nav {
    width: 100%;
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .img {
        width: 50%;
        min-width: 180px;
      }
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
</style>
