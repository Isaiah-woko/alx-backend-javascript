export default class Currency {
  constructor(code, name) {
    // Validate name
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;

    // Validate length
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a number');
    }
    this._name = name;
  }

  // Getter methods
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setter methods with validation
  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = newCode;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a number');
    }
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
