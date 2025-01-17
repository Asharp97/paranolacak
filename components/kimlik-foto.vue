<template>
  <Auth>
    <TransitionGroup name="list" tag="form" @submit.prevent>
      <auth-steps :step="activeStep" @activate-step="activateStep" />
      <div v-if="activeStep == 1">
        <h6 class="title">Lütfen özçekim fotoğrafınızı yükleyin.</h6>
        <File-upload @send-image="(name) => handleFileChange(name, 0)" />
        <div v-if="fileNames[0]" class="file-name">
          {{ fileNames[0].name }}
          <Icon
            name="material-symbols:delete-rounded"
            class="icon"
            @click="clearImage(0)" />
        </div>
      </div>
      <div v-if="activeStep == 2">
        <h6 class="title">
          Lütfen T.C. Kimlik kartınızın arka yüz fotoğrafını yükleyin.
        </h6>
        <File-upload @send-image="(name) => handleFileChange(name, 1)" />
        <div v-if="fileNames[1]" class="file-name">
          {{ fileNames[1].name }}
          <Icon
            name="material-symbols:delete-rounded"
            class="icon"
            @click="clearImage(1)" />
        </div>
      </div>
      <div v-if="activeStep == 3">
        <h6 class="title">Lütfen özçekim fotoğrafınızı yükleyin.</h6>
        <File-upload @send-image="(name) => handleFileChange(name, 2)" />
        <div v-if="fileNames[2]" class="file-name">
          {{ fileNames[2].name }}
          <Icon
            name="material-symbols:delete-rounded"
            class="icon"
            @click="clearImage(2)" />
        </div>
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
        @click="activeStep++" />
    </TransitionGroup>
  </Auth>
</template>

<script setup>
const activeStep = ref(1);
const activateStep = (x) => {
  if (fileNames.value[activeStep.value - 1] || x < activeStep.value)
    activeStep.value = x;
  else console.log("feed back error animation");
};

const fileNames = ref(["", "", ""]);
const handleFileChange = (fileName, stepIndex) => {
  fileNames.value[stepIndex] = fileName;
};
const clearImage = (stepIndex) => {
  fileNames.value[stepIndex] = null;
};
</script>

<style lang="scss" scoped>
.file-name {
  display: flex;
  margin-block: 1rem;
  align-items: center;
  justify-content: space-between;
  .icon {
    cursor: pointer;
    font-size: 1.8rem;
  }
}
</style>
