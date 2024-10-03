<script>
import BaseCard from './components/BaseCard.vue';
import { stockService } from '@/services/stockService';
import HeadLine from './components/HeadLine.vue';
// import { RouterLink, RouterView } from 'vue-router'

/**Apple, Amazon, Google (Alphabet), Meta, Microsoft, Nvidia, Tesla */

export default {
  name: 'App',
  components: {
    BaseCard,
    HeadLine
  },

  methods: {
    getSheet() {
      for (let i = 0; i < this.companies.length; i++) {
        // const company = this.companies[i];
      }
    }
  },

  data() {
    return {
      companies: [
        { name: 'Apple', imgPath: '../src/assets/img/apple_icon.png' },
        { name: 'Meta', imgPath: '../src/assets/img/meta_icon.png' },
        { name: 'Microsoft', imgPath: '../src/assets/img/microsoft_icon.png' },
        { name: 'Google', imgPath: '../src/assets/img/google_icon.png' },
        { name: 'Amazon', imgPath: '../src/assets/img/amazon_icon.png' },
        { name: 'Tesla', imgPath: '../src/assets/img/tesla_icon.png' },
        { name: 'Nvidia', imgPath: '../src/assets/img/nvidia_icon.png' },
      ],

      // companyNames: [
      //   'Apple',
      //   'Meta',
      //   'Microsoft',
      //   'Google',
      //   'Amazon',
      //   'Tesla',
      //   'Nvidia',
      // ],

      companySheet: [
        '$AAPL',
        '$AMZN',
        '$GOOG',
        '$META',
        '$MSFT',
        '$NVDA',
        '$TSLA',
      ]
    }
  },

  async created() {
    this.data = await stockService.getRevenue('$AAPL');
    // console.log('Loaded data', this.data);
  }
}

</script>


<template>
  <HeadLine />

  <!-- Loop über die Firmen -->
  <div class="main-content">
    <BaseCard v-for="(company, index) in companies" :key="index" :company="company" />
  </div>


  <RouterView />
</template>

<style>
.head-line {
  height: 200px;
  color: white;
}

template {
  display: flex;
}

.main-content {
  display: flex;
  gap: 24px;
  padding: 24px;
  margin: 0 24px;
  border-radius: 20px;
  background-color: #023A6233;
  box-sizing: content-box;
  width: 100%;
}
</style>