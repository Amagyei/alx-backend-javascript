export default class Currency {
  /**
     * Represents a currency.
     * @constructor
     * @param {string} code - The currency code.
     * @param {string} name - The currency name.
     */
  constructor(code, name) {
    this.name = name;
    this.code = code;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
