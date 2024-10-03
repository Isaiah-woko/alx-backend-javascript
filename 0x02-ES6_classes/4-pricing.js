import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter methods
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setter methods with validation
  set amount(value) {
    if (typeof newCode !== 'string') {
      throw new TypeError('Amount must be a string');
    }
    this._code = value;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be a number');
    }
    this._currency = value;
  }

  // display method
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // static method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
