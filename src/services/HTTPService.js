import axios from 'axios';

export class HTTPService {

    constructor () {

        this.coinGeckoUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=";
        this.ticker = "bitcoin";

    }

    getCoinData(callback, ticker) {
        let url = this.coinGeckoUrl + ticker;
        axios
        .get(url)
        .then(response => {
        // JSON responses are automatically parsed.
            callback(response.data[0]);
        })
        .catch(e => {
            this.errors.push(e)
        })
    }
}