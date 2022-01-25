<template>
  <div class="about">
    <h1>This is a page about Bitcoin Price Index</h1>
    <Spinner 
        v-if="!isLoaded"
    />
    <section v-else-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <div v-else v-for="currency in info" :key="currency.id"  class="currency">
      {{ currency.description }}:
      <span class="lighten">
        <span v-html="currency.symbol"></span
        >{{ currency.rate_float | currencydecimal }}
      </span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Spinner from '@/components/Spinner'
export default {
  data: () => ({
    info: null,
    isLoaded: false,
    errored: false
  }),
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
          this.info = response.data.bpi;
          this.isLoaded = true;
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
  },
  components: {
      Spinner
  }
};
</script>