<template>
  <div>
    <DashboardLayout
      :menu="menu.deposit"
      title="Para Yatır"
      sub="Banka/Kredi Kartı ile Para Yatır"
      :action="() => {}"
      subp="Banka/Kredi kartın ile paranolacak hesabına para yatır. Banka/Kredi kartının
sana ait olması gerektiğini unutma. Başkasına ait banka/kredi kartları ile para yatırılmamaktadır."
      action-name="Yatır">
      <TransitionGroup name="list" tag="form">
        <div class="input-wrapper" :class="{ error: gsmError }">
          <input
            v-model="ccNumber"
            type="text"
            placeholder="Kredi Kartı Numaranız"
            maxlength="22"
            @input="formateCard()"
            @blur="gsmCheck" />
        </div>
        <div v-if="gsmError" class="errormessage">
          <!-- {{ gsmError }} -->
        </div>

        <div class="right-icon input-wrapper" :class="{ error: gsmError }">
          <input
            v-model="name"
            disabled
            type="text"
            placeholder="Tum Adi"
            @blur="gsmCheck" />
          <div class="icon">Kart Sahibi</div>
        </div>
        <div v-if="gsmError" class="errormessage">
          <!-- {{ gsmError }} -->
        </div>

        <div class="cc">
          <div class="input-wrapper">
            <!-- v-model="date" -->
            <input
              v-model="date"
              placeholder="AA/YY"
              type="text"
              maxlength="5"
              pattern="^\\d{2}/\\d{2}$"
              required
              @input="formateDate()" />
          </div>
          <div class="input-wrapper">
            <input
              type="text"
              placeholder="CVV"
              oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 3)" />
          </div>
        </div>

        <div class="right-icon input-wrapper" :class="{ error: passError }">
          <input
            v-model="password"
            placeholder="Tutar"
            type="number"
            @blur="passCheck" />
          <Icon name="material-symbols:currency-lira" class="icon" />
        </div>

        <div v-if="passError" class="errormessage">
          {{ passError }}
        </div>

        <div class="available-balance">
          <strong>Hesap Bakiyesi: 29.817,01</strong> ₺
        </div>
      </TransitionGroup>
    </DashboardLayout>
  </div>
</template>

<script setup>
import menu from "@/content/menus.json";
const auth = useSession();
const name = ref(auth.user);

const date = ref("");
const ccNumber = ref("");

const formateDate = () => {
  date.value = date.value.replace(/[^0-9]/g, "");

  if (date.value.length > 2)
    date.value = date.value.slice(0, 2) + "/" + date.value.slice(2);
};

const formateCard = () => {
  ccNumber.value =
    ccNumber.value
      .replace(/\s+/g, "")
      .match(/.{1,4}/g)
      ?.join("  ") || "";
};
</script>

<style lang="scss" scoped>
.cc {
  display: flex;
  gap: 2rem;
  input {
    max-width: 90px;
  }
}
</style>
