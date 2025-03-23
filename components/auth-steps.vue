<template>
  <div>
    <ul class="steps">
      <li
        v-for="n in 4"
        :key="n"
        class="step"
        :class="{ active: n <= step }"
        @click="$emit('activateStep', n)">
        <!-- @click="step = n" -->
        <h6 v-if="n != 4">{{ n }}</h6>
        <Icon
          v-else
          :name="
            !auth.user
              ? 'material-symbols:check-rounded'
              : 'fluent:hourglass-one-quarter-24-regular'
          " />
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps(["step"]);
defineEmits(["activateStep"]);
const auth = useSession();
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  gap: 2.8rem;
  margin-bottom: 1.1rem;
  li {
    cursor: pointer;
    position: relative;
    border: 1px solid $dimgrey;
    width: 2.7rem;
    height: 2.7rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:not(:first-child):before {
      content: "";
      display: block;
      position: absolute;
      margin: 3em 0;
      border-bottom: 2px dotted $dimgrey;
      width: 41px;
      left: -44px;
    }
  }
  .active {
    border: 1px solid $primary;
    color: $primary;
    &:before {
      border-bottom: 2px dotted $primary !important;
    }
  }
}
</style>
