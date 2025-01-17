<template>
  <TransitionGroup name="slide" tag="div" class="input-wrapper file-input">
    <input
      ref="imageUploadReference"
      type="file"
      style="display: none"
      accept="image/png, image/jpg, image/jpeg, image/pdf, image/svg, image/webp"
      @change="select" />
    <button
      class="file-upload-area"
      @click="$refs.imageUploadReference.click()">
      <Icon name="lets-icons:upload" class="icon" />
      <p>Yükle</p>
    </button>
    <div v-if="error" class="errormessage">
      {{ error }}
    </div>
  </TransitionGroup>
</template>

<script setup>
const emit = defineEmits(["sendImage"]);
defineProps(["selectedImage"]);
const error = ref(null);
const file = ref();
// let imgExt;
const select = (event) => {
  if (event.target.files[0].type.startsWith("image/")) {
    error.value = null;
    file.value = event.target.files[0];
    emit("sendImage", file.value);
  } else error.value = "Resmin formate olması gerekiyor";
};

</script>

<style lang="scss" scoped>
.file-input {
  display: flex;
  flex-direction: column;
  .file-upload-area {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    color: white;
    border: 1px white solid;
    border-radius: 1rem;
    padding-inline: 2.6rem;
    padding-block: 1.8rem;
    .icon {
      font-size: 3rem;
    }
  }
}
</style>
