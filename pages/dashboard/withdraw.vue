<template>
  <div>
    <DashboardLayout
      :menu="menu.withdraw"
      title="Para Çek"
      action-name="Çek"
      :action="() => {}"
      sub="Para çekmek istediğiniz hesabınız">
      <TransitionGroup name="list" tag="form">
        <div class="left-icon input-wrapper" :class="{ error: gsmError }">
          <input
            v-model="phone"
            type="number"
            placeholder="IBAN"
            @blur="gsmCheck" />
          <div class="icon">TR</div>
        </div>
        <div v-if="gsmError" class="errormessage">
          {{ gsmError }}
        </div>

        <div class="right-icon input-wrapper" :class="{ error: passError }">
          <input
            :value="session.user"
            placeholder="Alıcı Adı Soyadı"
            type="text"
            @blur="passCheck" />
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

        <MazSwitch v-model="registerAccount" color="secondary"
          >Kayıtlı hesaplara ekle</MazSwitch
        >
        <div
          v-if="registerAccount"
          class="right-icon input-wrapper"
          :class="{ error: passError }">
          <input
            v-model="accountName"
            placeholder="Hesap Adi"
            type="text"
            required />
        </div>
      </TransitionGroup>
    </DashboardLayout>
  </div>
</template>

<script setup>
import menu from "@/content/menus.json";
const session = useSession();
const registerAccount = ref(false);
const accountName = ref("");
</script>

<style lang="scss" scoped></style>
