<template>
  <div
    :class="[
      { primary: variant == 'primary' },
      { secondry: variant == 'secondry' },
      { fill: variant == 'fill' },
      { secondryAlt: variant == 'secondryAlt' },
      { white: textColor == 'white' },
    ]">
    <NuxtLink :to="`/${destination}`" class="btn">
      <button>
        <slot />
      </button>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps(["variant", "textColor", "destination"]);
</script>

<style lang="scss" scoped>
.btn {
  font-size: 16px;
  display: block;
  button {
    color: black;
    border-radius: 4px;
  }
}
.white {
  button {
    color: $white;
  }
}
.fill {
  button {
    background-color: $primary;
    border: 2px solid $primary;
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
.fullwidth {
  button {
    width: 100%;
  }
}
</style>
