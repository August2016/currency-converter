export class CurrencyService {
  constructor() {
  }

  //call the endpoint asynchronously - 'value': value to convert, 'from': base currency to convert, 'to': the final currency rate
  async convert(value, from, to) {
    try {
      let promise = await fetch(`http://api.fixer.io/latest?base=${from}&symbols=${to}`);
      let result = await promise.json();
      let rate = parseFloat(result.rates[to]);

      return rate * value;
    }
    catch (e) {
      return -1;
    }
  }
}
