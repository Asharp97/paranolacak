<template>
  <div>
    <dashboard-layout sub="Hesap Hareketleri">
      <template #side>
        <div class="account-summary">
          <header class="account-header">
            <h1 class="account-name">{{ auth.user }}</h1>
            <p class="iban">
              <strong>IBAN:</strong> TR83 9283 9281 9273 9271 4723 01
            </p>
          </header>

          <!-- Balance Display -->
          <div class="balance">
            <p class="currency-symbol">₺</p>
            <p class="amount">29.817,01</p>
          </div>

          <!-- Account Type -->
          <!-- <div class="account-type">
            <Icon :name="accounts[accountType - 1].icon" class="icon" />
            <MazSelect
              v-slot="{ option }"
              v-model="accountType"
              color="white"
              :no-chevron="true"
              :no-border="true"
              :options="accounts">
              <div class="account-option">
                <div class="icon-wrapper">
                  <Icon :name="option.icon" class="icon" />
                </div>
                <strong> {{ option.label }} </strong>
              </div>
            </MazSelect>
            <span>Türk Lirası Hesabım</span> 
          </div> -->

          <!-- Action Buttons -->
          <div class="actions">
            <Btn
              variant="fill"
              class="deposit-button"
              destination="dashboard/deposit/iban"
              >Para Yatır</Btn
            >
            <Btn
              variant="secondryAlt"
              class="withdraw-button"
              destination="dashboard/withdraw"
              >Para Çek</Btn
            >
          </div>
        </div>
        <div class="card-list">
          <h2>Kartlarım</h2>
          <div class="image-wrapper">
            <nuxt-img class="img" src="card-straight.png" />
            <div class="detail">
              <Icon name="cuida:open-in-new-tab-outline" class="card-details" />
            </div>
          </div>
          <div class="noCard-wrapper">
            <Icon name="hugeicons:credit-card-not-accept" class="noCard-icon" />
            <p>Henüz bir kartınız yok.</p>
          </div>
          <Btn variant="fill">paranolacak Card sipariş et</Btn>
        </div>
      </template>

      <div
        v-for="(x, n) in history"
        :key="n"
        :class="[
          { withdraw: x.type == 'withdraw' },
          { deposit: x.type == 'deposit' },
          { shopping: x.type == 'shopping' },
        ]"
        class="account-history">
        <div class="details">
          <div class="icons">
            <div v-if="x.type == 'withdraw'" class="icon-wrapper withdraw">
              <Icon name="ic:outline-currency-lira" class="icon history-type" />
            </div>
            <div v-else-if="x.type == 'shopping'" class="icon-wrapper deposit">
              <Icon
                name="material-symbols-light:shopping-bag"
                class="icon history-type" />
            </div>
            <div v-else-if="x.type == 'deposit'" class="icon-wrapper shopping">
              <Icon
                name="material-symbols:add-2-rounded"
                class="icon history-type" />
            </div>
          </div>
          <div>
            <div class="name">
              <p>{{ x.name }}</p>
            </div>
            <div class="date">
              <p>{{ x.date }}</p>
            </div>
          </div>
        </div>
        <div class="value">
          <span v-if="x.type == 'withdraw' || x.type == 'shopping'">-</span>
          <span v-else>+</span>
          {{ x.value }}
        </div>
      </div>
    </dashboard-layout>
  </div>
</template>

<script setup>
definePageMeta({ layout: "dash-nav" });
const auth = useSession();
const history = [
  {
    type: "withdraw",
    name: "a101",
    value: "100",
    date: "11.12.2024",
  },
  {
    type: "shopping",
    name: "Gratis",
    value: "100",
    date: "11.12.2024",
  },
  {
    type: "deposit",
    name: "Gelen Transfer",
    value: "100",
    date: "11.12.2024",
  },
];
// const accounts = [
//   {
//     icon: "emojione:flag-for-turkey",
//     label: "TRY",
//     value: 1,
//   },
//   {
//     icon: "emojione:flag-for-us-outlying-islands",
//     label: "USD",
//     value: 2,
//   },
//   {
//     icon: "emojione:flag-for-european-union",
//     label: "Euro",
//     value: 3,
//   },
// ];
// const accountType = ref(1);
</script>

<style lang="scss" scoped>
.account-summary {
  display: flex;
  flex-direction: column;
  gap: 10px;
  .account-header {
    display: flex;
    flex-direction: column;
    h1 {
      font-size: $font15;
      font-weight: 400;
    }
    .iban {
      font-size: $font15;
      font-weight: 400;
      strong {
        color: $grey;
      }
    }
  }
  .balance {
    display: flex;
    font-size: $font34;
    font-weight: 900;
    .currency-symbol {
    }
    .amount {
    }
  }
  .account-type {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: $dimgrey;
    .m-select-list-item.--is-keyboard-selected {
      background-color: blue !important;
    }
    .m-select {
      min-width: 100%;

      .account-option {
        display: flex;
        align-items: center;
        width: 100%;
        gap: 1rem;

        .icon-wrapper {
          font-size: 1.5rem;
        }
      }
    }
  }
  .actions {
    display: flex;
    gap: 10px;
  }
}
.card-list {
  .image-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
    .img {
      max-width: 200px;
      flex: 1;
    }
    .card-details {
      flex: 1;
      font-size: $font22;
      cursor: pointer;
    }
  }
  h2 {
    font-size: $font22;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .noCard-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    .noCard-icon {
      font-size: $font22;
    }
  }
}

.account-history {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  .details {
    display: flex;
    align-items: center;
    gap: 10px;
    .icons {
      .icon-wrapper {
        font-size: 20px;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: white;
      }
    }
  }
  .value {
    font-size: $font22;
    font-weight: 800;
  }
}
.withdraw {
  .value {
    color: #ed4c5c;
  }
  .icon-wrapper {
    background-color: #ed4c5c;
  }
}
.deposit {
  .value {
  }
  .icon-wrapper {
    background-color: $primary;
    color: black;
  }
}
.shopping {
  .value {
    color: #ed4c5c;
  }
  .icon-wrapper {
    background-color: black;
  }
}
</style>
