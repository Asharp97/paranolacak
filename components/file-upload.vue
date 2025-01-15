<template>
  <TransitionGroup name="slide" tag="div" class="input-wrapper file-input">
    <input
      ref="imageUploadReference"
      type="file"
      style="display: none"
      accept="image/png, image/jpg, image/jpeg, image/pdf, image/svg, image/webp"
      @change="imageSelected"
    />
    <button
      class="file-upload-area"
      @click="$refs.imageUploadReference.click()"
    >
      <Icon name="lets-icons:upload" class="icon" />
      <p>Yükle</p>
    </button>
    <div v-if="imgName" class="file-name">
      <p>{{ imgName }}</p>
      <Icon name="material-symbols:delete-rounded" class="icon" @click="clearImage" />
    </div>
    <div v-if="error" class="errormessage">
      {{ error }}
    </div>
  </TransitionGroup>
</template>

<script setup>
const emit = defineEmits(["sendImg"]);
const error = ref(null);
let imgFile;
// let imgExt;
const imgName = ref();
const imageSelected = (event) => {
  if (event.target.files[0].type.startsWith("image/")) {
    error.value = null;
    imgFile = event.target.files[0];
    imgName.value = event.target.files[0].name;
    emit("sendImg", imgName.value, imgFile);
  } else error.value = "Resmin formate olması gerekiyor";
};

const clearImage = () => {
  imgFile = null;
  imgName.value = null;
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
  .file-name {
    display: flex;
    margin-block: 1rem;
    align-items: center;
    justify-content: space-between;
    .icon {
      cursor: pointer;
    }
  }
}
</style>
