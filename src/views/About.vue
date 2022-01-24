<template>
  <div class="about">
    <h1>This is a page about Bitcoin Price Index</h1>
    <!-- <Spinner 
        v-if="!isLoaded"
    />
    <section v-else-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section> -->
    <div  v-for="product in productsData" :key="product.id"  class="currency">
      {{ product.title }}
      <!-- <span class="lighten">
        <span v-html="currency.symbol"></span
        >{{ currency.rate_float | currencydecimal }}
      </span> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// import Spinner from '@/components/Spinner'

export default {
  data: () => ({
    productsData: null,
    // info: null,
    isLoaded: false,
    errored: false
  }),
  mounted() {
    axios
      .get("http://127.0.0.1:3000/products")
      .then((response) => {
        this.productsData = response.data;
          // this.info = response.data.bpi;
          // this.isLoaded = true;
      })
      .catch(error => {
          this.errored = true;
          console.log(error);
          });
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  }
  // components: {
  //     Spinner
  // }
};
</script>