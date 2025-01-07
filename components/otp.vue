<template>
  <TransitionGroup
    name="list"
    tag="div"
    class="input-wrapper verification-wrapper"
  >
    <input
      v-for="(n, x) in 6"
      :key="n"
      ref="items"
      v-model="otp[x]"
      type="password"
      maxLength="1"
      :autofocus="n == 0"
      @input="handleKeyDown($event, x)"
      @keydown="del($event, x)"
    />

    <button v-if="otp.some((item) => item != '')" @click="clear">
      <Icon name="material-symbols:cancel" class="icon" />
    </button>
  </TransitionGroup>
</template>

<script setup>
const itemRefs = useTemplateRef("items");
onMounted(() => {
  itemRefs.value[0].focus();
});

const otp = ref([]);

const clear = function () {
  otp.value = [];
};
const del = function (event, index) {
  if (event.key == "Backspace") {
    if (index > 0 && index <= 5)
      setTimeout(() => itemRefs.value[index - 1].focus(), 0);
  }
};

const handleKeyDown = function (event, index) {
  if (event.inputType != "deleteContentBackward")
    if (index < 5) itemRefs.value[index + 1].focus();
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
  .icon {
    font-size: 1.5rem;
    color: white;
  }
  button {
    all: unset;
    cursor: pointer;
  }
}
</style>
