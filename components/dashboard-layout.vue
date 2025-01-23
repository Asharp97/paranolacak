<template>
  <div class="container">
    <div class="dashboard-layout">
      <div class="side-nav">
        <h1>{{ title }}</h1>

        <div v-for="(x, n) in menu" :key="n" class="menu-wrapper">
          <NuxtLink :to="x.link" class="menu">
            <Icon
              name="material-symbols:arrow-right-alt-rounded"
              class="iconleft"
            />{{ x.title }}
          </NuxtLink>
          <p>{{ x.description }}</p>
        </div>
        <slot name="side" />
      </div>
      <div class="vhr" />
      <div class="main-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["menu", "title"]);
</script>

<style lang="scss" scoped>
.dashboard-layout {
  margin-block: 4rem;
  display: flex;
  .side-nav {
    max-width: 290px;
    width: 100%;
    .menu-wrapper {
      margin-bottom: 1rem;
      .menu {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        .iconleft {
          display: none;
        }
        p {
          font-size: $font15;
          font-weight: 300;
        }
      }
    }
    .router-link-active {
      font-weight: 700;

      .iconleft {
        display: block !important;
      }
    }
    h1 {
      font-size: $font22;
      margin-bottom: 2rem;
    }
  }
  .vhr {
    background-color: black;
    margin-inline: 40px;
  }
  .main-content {
    flex: 1;
  }
}
</style>
