<template>
  <div>
    <DashboardLayout
      :menu="menu.deposit"
      title="Para Yatır"
      sub="IBAN ile Para Yatır"
      subp="Başka banka hesabından aşadağı IBAN ve kişisel bilgilerinle paranolacak
hesabına para yatır.">

      <iban-copy :iban="iban" :name="session.user" />
    </DashboardLayout>
  </div>
</template>

<script setup>
import menu from "@/content/menus.json";
const session = useSession();
const iban = "TR83 9283 9281 9273 9271 4723 01";
</script>

<style lang="scss" scoped>

</style>
