<template>
  <div>
    <DashboardLayout
      :menu="menu.transfers"
      title="Transferler"
      sub="IBAN ile Para Gönder"
      action-name="Gönder"
      @submit="console.log('hey')">
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
            v-model="password"
            placeholder="Alıcı Adı Soyadı"
            type="number"
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

        <div class="input-wrapper" :class="{ error: passError }">
          <textarea
            v-model="password"
            placeholder="Açıklama (İsteğe bağlı)"
            type="text"
            @blur="passCheck" />
        </div>
      </TransitionGroup>
    </DashboardLayout>
  </div>
</template>

<script setup>
import menu from "@/content/menus.json";
</script>

<style lang="scss" scoped></style>
