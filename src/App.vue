<script>
import BaseCard from './components/BaseCard.vue';
import { stockService } from '@/services/stockService';
// import { RouterLink, RouterView } from 'vue-router'

/**Apple, Amazon, Google (Alphabet), Meta, Microsoft, Nvidia, Tesla */
companies = [
  '$AAPL',
  '$AMZN',
  '$GOOG',
  '$META',
  '$MSFT',
  '$NVDA',
  '$TSLA',
];

export default {
  name: 'App',
  components: {
    BaseCard
  },
  methods: {
    getSheet() {
      // for (let i = 0; i < array.length; i++) {
      //   const element = array[i];

      // }

    },
  },
  async created() {
    this.data = await stockService.getRevenue(this.getSheet());
    console.log('Loaded data', this.data);
  }
}

</script>


<template>

  <header>
    <img src="/src/assets/img/blue_rectangle.png" alt="blue rectangle">
    <h1 style="color: white;">The Magnificent Seven Companies</h1>
  </header>

  <div class="main-content">
    <BaseCard />

  </div>


  <RouterView />
</template>

<style>
template {
  display: flex;
}

header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 64px 0 32px 0;
}

header>img {
  height: 32px;
}

.main-content {
  padding-left: 100px;
  padding-right: 100px;
}
</style>