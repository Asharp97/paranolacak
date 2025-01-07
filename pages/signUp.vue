<template>
  <div>
    <Auth>
      <TransitionGroup name="slide" tag="form" @submit.prevent>
        <ul class="steps">
          <li
            v-for="n in 4"
            :key="n"
            class="step"
            :class="{ active: n <= activeStep }"
            @click="activeStep = n"
          >
            <h6 v-if="n != 4">{{ n }}</h6>
            <Icon v-else name="material-symbols:check-rounded" />
          </li>
        </ul>
        <div v-if="activeStep == 1">
          <h6 class="title">Hesap Oluştur</h6>
          <div class="input-wrapper">
            <input ref="inputfocus" type="number" placeholder="TCKN" />
          </div>
          <div class="input-wrapper">
            <input type="tel" placeholder="Telefon" />
          </div>
        </div>
        <div v-if="activeStep == 2">
          <h6 class="title">Cep Telefonunuzu Onaylayın</h6>
          <p class="subtitle">
            Cep telefonunuza gelen 6 haneli doğrulama kodunu aşağıdaki alana
            girin.
          </p>
          <otp />
        </div>
        <div v-if="activeStep == 3">
          <h6 class="title">Bilgilerinizi Doldurun</h6>
          <div class="input-wrapper">
            <input type="text" placeholder="İsim" />
          </div>
          <div class="input-wrapper">
            <input type="text" placeholder="Soyisim" />
          </div>
          <div class="input-wrapper">
            <input type="text" placeholder="E-posta" />
          </div>
          <div class="input-wrapper">
            <input type="password" placeholder="Şifreniz" />
          </div>
          <div class="input-wrapper">
            <input type="password" placeholder="Şifrenizi Tekrar Giriniz" />
          </div>
          <div
            v-for="(n, x) in terms"
            :key="x"
            class="input-wrapper checkbox-wrapper"
          >
            <input
              id="term"
              v-model="terms[x].value"
              type="checkbox"
              name="term"
            />
            <label :for="n.name">
              <span v-if="terms[x].value" class="icon-wrapper">
                <Icon
                  name="material-symbols:check-small-rounded"
                  class="icon"
                />
              </span>
              <NuxtLink class="link">{{ n.name }}</NuxtLink>
              <span> okudum onaylıyorum.</span>
            </label>
          </div>
        </div>
        <div v-if="activeStep == 4">
          <h6 class="title">Hesabınız açıldı! Şimdi giriş yapabilirsiniz.</h6>
          <Login-Form />
        </div>

        <Btn
          v-if="activeStep <= 3"
          text="Devam Et"
          variant="fill"
          @click="activeStep++"
        />
        <div v-if="activeStep < 3">
          <p class="footer-text">Bir<span> paran</span>olacak hesabım var.</p>
          <Btn text="Giriş Yap" variant="primary" text-color="white" />
        </div>
      </TransitionGroup>
    </Auth>
  </div>
</template>

<script setup>
const activeStep = ref(1);
const input = useTemplateRef("inputfocus");
onMounted(() => {
  input.value.focus();
});

const terms = ref([
  {
    name: "Aydınlatma Metnini",
    link: "",
    value: false,
  },
  {
    name: "Bilgilendirme Metnini",
    link: "",
    value: false,
  },
  {
    name: "Hesap Açılış Sözleşmesi",
    link: "",
    value: false,
  },
]);
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  min-width: 350px;
  max-width: 410px;
}
ul {
  display: flex;
  gap: 2.8rem;
  margin-bottom: 1.1rem;
  li {
    cursor: pointer;
    position: relative;
    border: 1px solid $dimgrey;
    width: 2.7rem;
    height: 2.7rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:not(:first-child):before {
      content: "";
      display: block;
      position: absolute;
      margin: 3em 0;
      border-bottom: 2px dotted $dimgrey;
      width: 41px;
      left: -44px;
    }
  }
  .active {
    border: 1px solid $primary;
    color: $primary;
    &:before {
      border-bottom: 2px dotted $primary !important;
    }
  }
}
button {
  all: unset;
}
.subtitle {
  color: #b1b1b1;
  font-size: 13.241px;
  font-weight: 600;
}
.checkbox-wrapper {
  display: flex;
  gap: 8px;
  align-items: center;
  position: relative;
  .link {
    text-decoration: underline;
    color: $primary;
  }
  .icon-wrapper {
    display: none;
    .icon {
      position: absolute;
      left: -5px;
      bottom: -4px;
    }
  }
  input[type="checkbox"]:checked + label .icon-wrapper {
    font-size: 2.2rem;
    color: $primary;
    display: inline-block;
  }
}
</style>
