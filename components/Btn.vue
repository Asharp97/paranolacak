<template>
  <div
    :class="[
      { primary: variant == 'primary' },
      { secondry: variant == 'secondry' },
      { secondryAlt: variant == 'secondryAlt' },
      { white: textColor == 'white' },
    ]"
    class="btn">
    <button>
      <slot />
    </button>
  </div>
</template>

<script setup>
defineProps(["variant", "textColor"]);
</script>

<style lang="scss" scoped>
.btn {
  font-size: 16px;
  width: fit-content;
  button {
    color: black;
    // padding-inline: 24px;
    padding-block: 0.5rem;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
}
.white {
  button {
    color: $white;
  }
}

.primary {
  button {
    background-color: transparent;
    border: 2px solid $primary;
  }
}
.secondry {
  button {
    background-color: rgba(255, 255, 255, 0.2);
    border: 2px solid transparent;
    color: $white;
  }
}

.secondryAlt {
  button {
    background-color: rgba(95, 95, 95, 0.2);
    border: 2px solid transparent;
    color: $black;
  }
}
</style>
