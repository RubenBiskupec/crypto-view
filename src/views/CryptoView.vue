<script>

    import { HTTPService } from '../services/HTTPService.js'

  export default {
    name: 'CryptoView',
    data: function() {
        return {
            httpService: new HTTPService(),
            newTicker: null,
            deleteTicker: null,
            btcData: null,
            crypto:  {
                name: 'Frozen Yogurt',
                ticker: this.newTicker,
                price: "the moon",
                marketCap: 159,
                dilutedMarketCap: 6.0,
                currentSupply: 24,
                futureSupplu: 4.0,
                
            },
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
        addRow() {
            this.getCoinData(this.newTicker);
        },
        getCoinData(coinName) {
            this.httpService.getCoinData(this.coinDataCallback, coinName);
        },
        coinDataCallback(responseData) {
            let coinData = {
                "name": responseData.name,
                "ticker": responseData.symbol,
                "price": responseData.current_price,
                "marketCap": responseData.market_cap,
                "dilutedMarketCap": responseData.fully_diluted_valuation,
                "currentSupply": responseData.circulating_supply,
                "futureSupply": responseData.max_supply,
            }
            this.addCrypto(coinData);
        },
        addCrypto: function (data) {
            this.cryptos.push(data);
        }
    },
    mounted: function () {
        this.getCoinData("bitcoin");
    }
  }
</script>

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
                    placeholder="Name (CoinGecko)"
                    v-model="deleteTicker"
                ></v-text-field>
                <v-btn
                    v-on:click="deleteRow"
                >DELETE</v-btn>
            </div>
      </v-container>
  </v-app>
</template>

<style scoped>

.button-container {
    display: flex;
}

.text-field{
    width: 20%;
}
</style>
