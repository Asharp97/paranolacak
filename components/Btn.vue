<template>
  <div
    :class="[
      { primary: variant == 'primary' },
      { secondry: variant == 'secondry' },
    ]"
    class="btn"
  >
    <button>
      <slot />
    </button>
  </div>
</template>

<script setup>
defineProps(["variant"]);
</script>

<style lang="scss" scoped>
.btn {
  font-size: 16px;
  button {
    color: white;
    padding-inline: 24px;
    padding-block: 0.5rem;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 8px;
  }
}
.primary {
  button {
    background-color: transparent;
    border: 1px solid $primary;
  }
}
.secondry {
  button {
    background-color: rgba(255, 255, 255, 0.195);
    border: 1px solid transparent;
  }
}
</style>
