<template>
  <div>
    <DashboardLayout
      :menu="menu.deposit"
      title="Para Yatır"
      sub="Havale/EFT ile Para Yatır"
      subp="paranolacak numaran ile para yatır. Para havuza geçtiğinde hesabına aktarılır.">
      <iban-copy iban="TR83 9283 9281 9273 9271 4723 01" name="Paranolacak Elektronik Para ve Ödeme A.Ş." :account="7384932" />
    </DashboardLayout>
  </div>
</template>

<script setup>
import menu from "@/content/menus.json";
</script>

<style lang="scss" scoped></style>
