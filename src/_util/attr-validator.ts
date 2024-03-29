import { isNumber, isString, isArray, isFunction, Attributes } from 'jinge';

export class BaseAttrValidator {
  _cn: string;
  _an: string;
  _io: boolean;

  /**
   *
   * @param {String} componentName
   * @param {String} attrName
   * @param {Boolean} isOptional
   */
  constructor(componentName: string, attrName: string, isOptional = true) {
    this._cn = componentName;
    this._an = attrName;
    this._io = isOptional;
  }

  throwRequired() {
    throw new Error(`Attribute "${this._an}" of ${this._cn} is required.`);
  }

  throwType(requiredType: 'number' | 'function' | 'Array') {
    throw new Error(`Type of value of attribute "${this._an}" must be ${requiredType} for ${this._cn}.`);
  }

  assert(attrs: Attributes) {
    if (!(this._an in attrs)) {
      if (this._io) return;
      this.throwRequired();
    }
  }
}

const NUM_REGEXP = /^[+-]?\d+(\.\d*)?$/;
export class NumberAttrValidator extends BaseAttrValidator {
  constructor(componentName: string, attrName: string, isOptional = true) {
    super(componentName, attrName, isOptional);
  }

  assert(attrs: Attributes) {
    super.assert(attrs);
    const val = attrs[this._an];
    if (isNumber(val)) return;
    if (isString(val) && NUM_REGEXP.test(val)) return;
    this.throwType('number');
  }
}

export class ArrayAttrValidator extends BaseAttrValidator {
  assert(attrs: Attributes) {
    super.assert(attrs);
    if (this._an in attrs && !isArray(attrs[this._an])) {
      this.throwType('Array');
    }
  }
}

export class FunctionAttrValidator extends BaseAttrValidator {
  constructor(componentName: string, attrName: string, isOptional = true) {
    super(componentName, attrName, isOptional);
  }

  assert(attrs: Attributes) {
    super.assert(attrs);
    if (this._an in attrs && !isFunction(attrs[this._an])) {
      this.throwType('function');
    }
  }
}

export class EnumAttrValidator extends BaseAttrValidator {
  _en: (string | number)[];

  constructor(componentName: string, attrName: string, enums: (string | number)[], isOptional = true) {
    if (!isArray(enums) || enums.length === 0) {
      throw new Error('EnumAttrValidator require "enums" argument to be non-empty array.');
    }
    super(componentName, attrName, isOptional);
    this._en = enums;
  }

  assert(attrs: Attributes) {
    super.assert(attrs);
    if (this._an in attrs && this._en.indexOf(attrs[this._an] as string) < 0) {
      throw new Error(`Value of attribute "${this._an}" must be one of ${JSON.stringify(this._en)} for ${this._cn}`);
    }
  }
}
