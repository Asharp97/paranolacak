<template>
  <div
    :class="[
      { primary: variant == 'primary' },
      { secondry: variant == 'secondry' },
      { fill: variant == 'fill' },
      { secondryAlt: variant == 'secondryAlt' },
      { noir: variant == 'noir' },
      { white: textColor == 'white' },
      { full: width == 'full' },
    ]">
    <NuxtLink :to="`${destination ? '/' + destination : ''}`" class="btn">
      <button @click="$emit('clicked')">
        {{ text }}
        <slot />
      </button>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps(["variant", "textColor", "destination", "text", "width"]);
defineEmits(["clicked"]);
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
.full {
  button {
    width: min(100%, 420px);
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
.noir {
  button {
    background-color: black;
    border: 2px solid black;
    color: white;
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
