<template>
  <div>
    <div class="login-wrapper">
      <nuxt-img class="img mob-app hideMob" src="mob-app.png" />
      <div class="login container">
        <div class="content">
          <div class="app hideMob">
            <nuxt-img class="img logo" src="logo-small.png" />
            <h3>Mobil uygulamamızı</h3>
            <h4>indirdiniz mi?</h4>
            <p class="qr-text">
              Aşağıdaki QR okudu cep telefonunuzun kamerası ile okutun ve hemen
              paranolacak mobil uygulamamızı indirin! <br />
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
          <div class="vhr hideMob" />
          <div class="form-wrapper">
            <div class="auth-forms">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.login-wrapper {
  background: radial-gradient(circle at 100% 25dvh, $primary -200%, $black 74%);
  position: relative;
  .mob-app {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 20%;
    max-width: 18rem;
  }
  color: white;
  .login {
    height: calc(100dvh - $navHeight);
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
      display: flex;
      justify-content: center;
      height: 70dvh;
      width: 100%;
      .app {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
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
          .qr {
            background-color: white;
            border-radius: 1rem;
            width: 8rem;
          }
          .vector {
            position: absolute;
            bottom: -71px;
            left: -141px;
          }
          .floaty {
            text-align: center;
            position: absolute;
            bottom: -150px;
            left: -225px;
          }
        }
      }
      .vhr {
        height: 100%;
        margin-inline: 4rem;
        background-color: white;
      }
      .form-wrapper {
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        .auth-forms {
          max-width: 420px;
          width: 100%;
        }
      }
    }
  }
}
</style>
