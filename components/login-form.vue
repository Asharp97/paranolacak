<template>
  <div>
    <TransitionGroup name="list" tag="form">
      <div class="input-wrapper" :class="{ error: gsmError }">
        <input
          v-model="TCKNGSM"
          type="number"
          placeholder="TCKN veya GSM No"
          @blur="gsmCheck" />
      </div>
      <div v-if="gsmError" class="errormessage">
        {{ gsmError }}
      </div>

      <div class="input-wrapper" :class="{ error: passError }">
        <input
          v-model="password"
          placeholder="Şifreniz"
          :type="showPassword ? 'text' : 'password'"
          @blur="passCheck" />

        <Icon
          :name="showPassword ? 'gridicons:visible' : 'gridicons:not-visible'"
          class="icon"
          @click="showPassword = !showPassword" />
      </div>

      <div v-if="passError" class="errormessage">
        {{ passError }}
      </div>

      <div class="btns-wrapper">
        <Btn variant="fill">Giriş Yap</Btn>
        <Btn variant="secondry">Şifremi Unuttum</Btn>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { validateGSM, validatePassword } from "@/utils/validations";

const TCKNGSM = ref();
const password = ref();

const showPassword = ref(false);
const gsmError = ref("");
const passError = ref("");

const gsmCheck = () => {
  const { isValid, error, type } = validateGSM(TCKNGSM.value);
  gsmError.value = error;
  return isValid;
};

const passCheck = () => {
  const { isValid, error } = validatePassword(password.value);
  passError.value = error;
  return isValid;
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;
  .icon {
    border: none;
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: $dimgrey;
  }
}
</style>
