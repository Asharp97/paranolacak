<template>
  <Auth>
    <TransitionGroup name="list" tag="form" @submit.prevent>
      <auth-steps :step="activeStep" @activate-step="activateStep" />
      <div v-if="activeStep == 1">
        <h6 class="title">Lütfen özçekim fotoğrafınızı yükleyin.</h6>
        <File-upload @send-image="recieveImage(activeStep)" />
      </div>
      <div v-if="activeStep == 2">
        <h6 class="title">
          Lütfen T.C. Kimlik kartınızın arka yüz fotoğrafını yükleyin.
        </h6>
        <File-upload />
      </div>
      <div v-if="activeStep == 3">
        <h6 class="title">Lütfen özçekim fotoğrafınızı yükleyin.</h6>
        <File-upload />
      </div>
      <div v-if="activeStep == 4">
        <h6 class="title">Kimlik doğrulama işleminiz kontrol ediliyor.</h6>
        <p>
          Bu işlem genellikle 5 dakikadan kısa sürer. Evraklarınız onaylanmadığı
          taktirde KYC işlemini tekrarlamanız gerekir.
        </p>
      </div>

      <Btn
        v-if="activeStep <= 3"
        text="Devam Et"
        variant="fill"
        @click="activeStep++"
      />
    </TransitionGroup>
  </Auth>
</template>

<script setup>
const activeStep = ref(1);
const activateStep = (x) => (activeStep.value = x);
const recieveImage = (x) => {
  console.log("imgfile is: " + x);
};
</script>

<style lang="scss" scoped></style>
