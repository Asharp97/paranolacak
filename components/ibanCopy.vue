<template>
  <div class="info-wrapper" tag="div">
    <ul>
      <li v-for="(y, _, n) in props" :key="n">
        <button v-if="y" class="info" @click="handleCopy(y, n)">
          <p>
            {{ params[n] }}: <span>{{ y }}</span>
          </p>
          <TransitionGroup name="slide" tag="div" class="icons">
            <div class="icon-wrapper">
              <Icon name="material-symbols:content-copy" class="copy" />
            </div>
            <div v-if="copied[n]">
              <div class="feedback">
                Kopyalandı
                <Icon name="material-symbols:done-all" />
              </div>
            </div>
          </TransitionGroup>
        </button>
      </li>
    </ul>
    <p>
      <span>NOT:</span> Havale/EFT yaparken açıklama bölümüne yukarıda yer alan
      paranolacak hesap numaranızı yazmanız mecburidir. Hesap numaranızı
      yazmadan yapacağınız tüm havale/eft işlemleriniz hesabınıza geri iade
      olacaktır.
    </p>
  </div>
</template>

<script setup>
import { copy } from "@/utils/misc";
const props = defineProps(["iban", "name", "account"]);
const params = ["IBAN", "Alıcı Adı", "paranolacak Hesap Numaran"];
const copied = ref([false]);
const handleCopy = (x, n) => {
  copy(x);
  copied.value[n] = true;
  setTimeout(() => (copied.value[n] = false), 1000);
};
</script>

<style lang="scss" scoped>
.info-wrapper {
  width: min(100%, 600px);
}
ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  margin-bottom: 3rem;
  li {
    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 0.5rem;
      padding: 0.5rem;
      width: 100%;
      background-color: $cloudgrey;
      overflow: clip;
      .icons {
        display: flex;
        gap: 1rem;
        .copy {
          color: black;
          font-size: $font22;
        }
        .feedback {
          display: flex;
          align-items: center;
          font-weight: 700;
        }
      }
    }
  }
}
button {
  all: unset;
  cursor: pointer;
  span {
    text-decoration: underline;
  }
}
</style>
