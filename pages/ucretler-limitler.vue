<template>
  <div class="ucretler">
    <div class="hero">
      <h4>Ücretler & Limitler</h4>
      <p>
        İşlem ücretlerimizi, komisyon oranlarını ve limitlerimizi bu sayfadan
        inceleyebilirsiniz.
      </p>
    </div>
    <div v-for="(ucret, n) in ucretler" :key="n" class="tables container">
      <h2>{{ ucret.title }}</h2>
      <table>
        <tr>
          <th class="p">Hesap Türü</th>
          <th class="p">İşlem Türü</th>
          <th class="p">İşlem Ücreti</th>
        </tr>
        <tr v-for="(x, y) in ucret.table" :key="y">
          <td class="p">{{ x.hesap }}</td>
          <td class="p">{{ x.islem }}</td>
          <td class="p">{{ x.ucret }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
const ucretler = [
  {
    title: "Hesap İşlem Ücretleri",
    table: [
      {
        hesap: "Hesap türü",
        islem: "İşlem Adı",
        ucret: "ÜCRETSİZ",
      },
      {
        hesap: "Hesap türü",
        islem: "İşlem Adı",
        ucret: "ÜCRETSİZ",
      },
      {
        hesap: "Hesap türü",
        islem: "İşlem Adı",
        ucret: "ÜCRETSİZ",
      },
    ],
  },
  {
    title: "Kart İşlem Ücretleri",
    table: [
      {
        hesap: "Hesap türü",
        islem: "İşlem Adı",
        ucret: "ÜCRETSİZ",
      },
    ],
  },
];
</script>

<style lang="scss" scoped>
.hero {
  background-color: black;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.7rem;
  padding-top: 6rem;
  padding-bottom: 8rem;
  h4 {
    color: $primary;
  }
  p {
    max-width: 560px;
  }
}
.tables {
  margin-block: 3rem;
  h2 {
    margin-bottom: 1rem;
  }
  table {
    width: 100%;
    tr {
      &:first-child {
        background-color: $primary;
      }
      th {
        &:last-child {
          background: linear-gradient(90deg, $primary 0%, #000 100%);
          color: white;
        }
      }
    }
    tr {
      &:nth-child(even) {
        background-color: #e0e0e066;
      }
    }
    td,
    th {
      padding-block: 0.9rem;
      padding-inline: 0.8rem;
      &:first-child {
        text-align: start;
      }
      &:nth-child(2) {
        text-align: center;
      }
      &:last-child {
        // color: white;
        text-align: end;
      }
    }
  }
}
</style>
