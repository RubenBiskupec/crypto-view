<template>
  <v-app>
      <v-container>
          <v-data-table
                v-bind:headers="headers"
                v-bind:items="cryptos"
                v-bind:items-per-page="5"
                class="elevation-1"
            ></v-data-table>
            <br>
            <div class="button-container">
                <v-text-field
                    class="text-field"
                    label="Regular"
                    placeholder="Ticker"
                    v-model="newTicker"
                ></v-text-field>
                <v-btn
                    v-on:click="addRow"
                >ADD</v-btn>
                <v-spacer></v-spacer>
                <v-text-field
                    class="text-field"
                    label="Regular"
                    placeholder="Ticker"
                    v-model="deleteTicker"
                ></v-text-field>
                <v-btn
                    v-on:click="deleteRow"
                >DELETE</v-btn>
            </div>
      </v-container>
  </v-app>
</template>

<script>

  export default {
    name: 'CryptoView',
    data: function() {
        return {
            newTicker: null,
            deleteTicker: null,
            headers: [
            {
                text: 'Crypto',
                align: 'start',
                sortable: false,
                value: 'name',
            },
            { text: 'Ticker', value: 'ticker' },
            { text: 'Price', value: 'price' },
            { text: 'Market Cap', value: 'marketCap' },
            { text: 'D. Market Cap', value: 'dilutedMarketCap' },
            { text: 'Supply', value: 'currentSupply' },
            { text: 'Final Supply', value: 'futureSupply' },
            ],
            cryptos: [
            {
                name: 'Frozen Yogurt',
                ticker: '1%',
                price: "the moon",
                marketCap: 159,
                dilutedMarketCap: 6.0,
                currentSupply: 24,
                futureSupplu: 4.0,
                
            },
            {
                name: 'Frozen Yogurt',
                ticker: '1%',
                price: "the moon",
                marketCap: 159,
                dilutedMarketCap: 6.0,
                currentSupply: 24,
                futureSupplu: 4.0,
                
            },
            {
                name: 'Frozen Yogurt',
                ticker: '1%',
                price: "the moon",
                marketCap: 159,
                dilutedMarketCap: 6.0,
                currentSupply: 24,
                futureSupplu: 4.0,
                
            },
            {
                name: 'Frozen Yogurt',
                ticker: '1%',
                price: "the moon",
                marketCap: 159,
                dilutedMarketCap: 6.0,
                currentSupply: 24,
                futureSupplu: 4.0,
                
            },
            ]
        }
    },
    methods: {
        deleteRow: function () {
            for(let i=0; i<this.cryptos.length; i++) {
                if (this.cryptos[i].ticker == this.deleteTicker) {
                    this.cryptos.splice(i, 1);
                }
            }
            
        },
        addRow: function () {
            let crypto = {
                name: 'Frozen Yogurt',
                ticker: this.newTicker,
                price: "the moon",
                marketCap: 159,
                dilutedMarketCap: 6.0,
                currentSupply: 24,
                futureSupplu: 4.0,
                
            }
            this.cryptos.push(crypto);
        }
    }
  }
</script>

<style scoped>

.button-container {
    display: flex;
}

.text-field{
    width: 20%;
}
</style>
