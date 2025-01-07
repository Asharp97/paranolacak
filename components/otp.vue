<template>
  <div class="input-wrapper verification-wrapper">
    <input
      v-for="(n, x) in 6"
      :key="n"
      :ref="`items`"
      v-model="otp[x]"
      type="password"
      maxLength="1"
      :autofocus="n == 0"
      @input="handleKeyDown($event, x)"
      @keydown="del($event, x)" />
    <!-- @keyup="handleKeyDown($event, x)"  -->
  </div>
</template>

<script setup>
const itemRefs = useTemplateRef("items");
const log = console.log
onMounted(() => {
  itemRefs.value[0].focus();
});

const otp = ref([]);

const del = function (event, index) {
  log(event.key)
};

const handleKeyDown = function (event, index) {
  // console.log(event.inputType == "insertText");
  // console.log(event.inputType == "deleteContentBackward");
  // console.log(event.inputType);
  // console.log(index);

  if (event.inputType == "deleteContentBackward") {
    console.log("backsy");
    if (index > 0) {
      itemRefs.value[index - 1].focus();
    }
  } else itemRefs.value[index + 1].focus();
};
</script>

<style lang="scss" scoped>
.verification-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  input {
    display: flex;
    justify-content: center;
    font-size: 41.616px;
    font-weight: 600;
    text-align: center;
  }
}
</style>
