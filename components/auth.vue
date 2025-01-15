<template>
  <div class="login-wrapper">
    <nuxt-img class="img mob-app hideTab" src="mob-app.png" />
    <div class="login container">
      <div class="content">
        <div class="hideTab app-wrapper">
          <Transition appear name="special-left">
            <div class="app hideTab">
              <nuxt-img class="img logo" src="logo-small.png" />
              <h3>Mobil uygulamamızı</h3>
              <h4>indirdiniz mi?</h4>
              <p class="qr-text">
                Aşağıdaki QR okudu cep telefonunuzun kamerası ile okutun ve
                hemen paranolacak mobil uygulamamızı indirin! <br />
                <br />
                Avantajlı fırsatlar dünyasını kaçırmayın.
              </p>
              <div class="img-wrapper">
                <nuxt-img class="img qr" src="qr.png" />
                <img src="../assets/imgs/Vector 11.svg" class="vector" alt="" />
                <p class="floaty">
                  QR ile <br />
                  paranolacak Mobil’i <br />
                  hemen indir!
                </p>
              </div>
            </div>
          </Transition>
        </div>
        <Transition appear name="scaleVertical">
          <div class="vhr hideTab" />
        </Transition>
        <div class="form-wrapper">
          <div class="user-wrapper">
            <div v-if="session.user" class="user">
              <p>
                Hoş geldiniz <span> Sn {{ session.user }}</span>
              </p>
              <Btn
                variant="secondry"
                text-color="white"
                text="Çıkış Yap"
                @click="session.reset()"
              />
            </div>

            <div class="close-hover-area">
              <div class="close-wrapper" @click="modal.show = null">
                <Icon name="material-symbols:close-rounded" class="icon" />
              </div>
            </div>
          </div>
          <Transition appear name="special-right">
            <div class="auth-forms">
              <slot />
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onKeyStroke } from "@vueuse/core";
const modal = useModal();
const session = useSession();

onKeyStroke("Escape", () => {
  modal.show = null;
});
</script>

<style lang="scss" scoped>
.login-wrapper {
  background: radial-gradient(circle at 100% 25dvh, $primary -200%, $black 74%);
  display: flex;
  height: 100%;
  color: white;
  .mob-app {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 15%;
    max-width: 18rem;
  }
  .login {
    // min-height: calc(100dvh);
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
      display: flex;
      justify-content: center;
      min-height: 80dvh;
      width: 100%;
      .app-wrapper,
      .form-wrapper {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
      }
      .app-wrapper {
        align-items: flex-end;
        text-align: right;
        .app {
          margin-right: 4rem;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          .logo {
            width: 12rem;
            margin-bottom: 1.2rem;
          }
          h4 {
            margin-bottom: 0.6rem;
          }
          .qr-text {
            margin-bottom: 1.2rem;
            max-width: 30rem;
          }
          .img-wrapper {
            position: relative;
            width: fit-content;
            .qr {
              background-color: white;
              border-radius: 1rem;
              width: 8rem;
            }
            .vector {
              position: absolute;
              bottom: 0px;
              left: 0px;
              transform: translate(-110%, 0);
            }
            .floaty {
              text-align: center;
              position: absolute;
              bottom: 0;
              left: 0;
              transform: translate(-150%, 100%);
              max-width: 300px;
              width: 100%;
            }
          }
        }
      }
      .vhr {
        background-color: white;
      }
      .user-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 110;
        .user {
          padding-block: 1rem;
          display: flex;
          gap: 1rem;
          align-items: center;
          span {
            font-weight: 700;
          }
        }
        .close-hover-area {
          height: 4rem;
          &:hover {
            .close-wrapper {
              padding-inline: 0.5rem;
              padding-block: 0.25rem;
              font-size: 2rem;
              background-color: white;
              color: black;
              .icon{
                transform: translateY(4px);
              }
            }
          }

          .close-wrapper {
            color: white;
            cursor: pointer;
            font-size: 1rem;
            height: fit-content;
            border-radius: 0 0 0 1rem;
          }
        }
      }
      .form-wrapper {
        min-width: 410px;
        justify-content: center;
        .auth-forms {
          margin-left: 4rem;
          max-width: 420px;
          width: 90%;
        }
      }
    }
  }
}
</style>
