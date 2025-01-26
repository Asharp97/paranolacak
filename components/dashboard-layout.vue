<template>
  <div class="container">
    <div class="dashboard-layout">
      <div class="side-nav">
        <h1>{{ title }}</h1>

        <div v-for="(x, n) in menu" :key="n" class="menu-wrapper">
          <NuxtLink :to="x.link" class="menu">
            <Icon
              name="material-symbols:arrow-right-alt-rounded"
              class="iconleft" />{{ x.title }}
          </NuxtLink>
          <p>{{ x.description }}</p>
        </div>
        <slot name="side" />
      </div>
      <div class="vhr" />
      <div class="main-content">
        <h2>{{ sub }}</h2>
        <p>{{ subp }}</p>
        <slot />
        <Btn
          v-if="actionName"
          width="full"
          class="button"
          variant="noir"
          @clicked="() => $emit('action')"
          >{{ actionName }}</Btn
        >
        <Transfer-contacts v-if="transfersPage()" :contacts="contacts" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["menu", "title", "sub", "actionName", 'subp']);
defineEmits(["action"]);
const route = useRoute();
const contacts = [
  {
    name: "john doe",
  },
  {
    name: "ali dude",
  },
  {
    name: "stefen hawyking",
  },
];
const transfersPage = () => {
  return route.fullPath.startsWith("/dashboard/transfers");
};
</script>

<style lang="scss" scoped>
.dashboard-layout {
  margin-block: 4rem;
  display: flex;
  min-height: calc(70dvh - $navHeight);
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
      }
      p {
        font-size: $font15;
        font-weight: 300;
        padding-left: 1.5rem;
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
    h2 {
      font-size: $font22;
    }
    p {
      margin-bottom: 3rem;
    }
    .button {
      margin-top: 2rem;
      width: 100%;
    }
  }
}
::v-deep(form) {
  width: min(100%, 420px);
  .input-wrapper {
    margin-top: 1rem;
    position: relative;
    input,
    textarea {
      border: 1px solid #dedede;
      border-radius: 0.25rem;
      padding-block: 1rem;
      padding-inline: 0.5rem;
      width: 100%;
      &::placeholder {
        color: #b1b1b1;
        font-weight: 600;
      }
    }
    .icon {
      border: none;
      position: absolute;
      top: 50%;
      transform: translateY(-52%);
      cursor: pointer;
      font-weight: 600;
    }
  }
  .left-icon {
    input {
      width: calc(100% - 3.5rem);
      padding-left: 3rem;
    }
    .icon {
      left: 0.5rem;
    }
  }
  .right-icon {
    input {
      width: calc(100% - 1rem);
    }
    .icon {
      right: 0.5rem;
    }
  }
  .available-balance {
    margin-left: auto;
    margin-bottom: 2rem;
    width: fit-content;
    font-size: 14px;
  }
}
</style>
