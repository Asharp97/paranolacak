<template>
  <div class="input-wrapper verification-wrapper">
    <input
      v-for="(n, x) in 6"
      :key="n"
      v-model="otp[x]"
      type="password"
      maxLength="1"
      :autofocus="n == 0"
      @keydown="handleKeyDown($event, ind)" />
  </div>
</template>

<script setup>
const otp = ref([]);

const props = defineProps({
  default: String,

  digitCount: {
    type: Number,
    required: true,
  },
});

const digits = reactive([]);

if (props.default && props.default.length === props.digitCount) {
  for (let i = 0; i < props.digitCount; i++) {
    digits[i] = props.default.charAt(i);
  }
} else {
  for (let i = 0; i < props.digitCount; i++) {
    digits[i] = null;
  }
}

const handleKeyDown = function (event, index) {
  if (
    event.key !== "Tab" &&
    event.key !== "ArrowRight" &&
    event.key !== "ArrowLeft"
  ) {
    event.preventDefault();
  }

  if (event.key === "Backspace") {
    digits[index] = null;

    if (index != 0) {
      otpCont.value.children[index - 1].focus();
    }

    return;
  }

  if (new RegExp("^([0-9])$").test(event.key)) {
    digits[index] = event.key;

    if (index != props.digitCount - 1) {
      otpCont.value.children[index + 1].focus();
    }
  }
};

const otpCont = ref(null);
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
