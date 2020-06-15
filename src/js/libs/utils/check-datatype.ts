// source https://github.com/yveyeh/datatypes-check/blob/master/src/index.ts

/**
 * Tests the null state of a javascript object.
 * @param arg - The javascript object.
 * @return boolean
 */
const isNull = (arg: any): boolean => {
  return arg === null;
}

/**
 * Tests if a javascript object is undefined.
 * @param arg - The javascript object.
 * @return boolean
 */
const isUndefined = (arg: any): boolean => {
  return typeof arg === 'undefined' || arg === undefined; // this.isNull(arg);
}

/**
 * Tests if a javascript object is defined.
 * @param arg - The javascript object.
 * @return boolean
 */
const isDefined = (arg: any): boolean => {
  return arg !== undefined && arg !== null || typeof arg !== 'undefined' && arg !== null; // !this.isNull(arg);
}

/**
 * Tests if a javascript oject is primitive.
 * @param arg - The javascript object.
 * @return boolean
 */
const isPrimitive = (arg: any): boolean => {
  return (
    typeof arg === 'string' ||
    typeof arg === 'number' ||
    // $flow-disable-line
    typeof arg === 'symbol' ||
    typeof arg === 'boolean'
  )
}

// Returns if a value is a boolean
const isBoolean = (arg: any): boolean => {
  return typeof arg === 'boolean';
}

// Returns if a value is a string
const isString = (arg?: any) => {
  return typeof arg === 'string' || arg instanceof String;
}

// Returns if a value is really a number
const isNumber = (arg: any): boolean => {
  return typeof arg === 'number' && isFinite(arg);
}

// Returns if value is a date object
const isDate = (arg: any): boolean => {
  return arg instanceof Date;
}

// Returns if a value is a function
const isFunction = (arg: any): boolean => {
  return typeof arg === 'function';
}

// Returns if a value is an array
// ES5 actually has a method for this (ie9+)
// Array.isArray(arg);
const isArray = (arg: any): boolean => {
  return arg && typeof arg === 'object' && arg.constructor === Array;
}

// Returns if a value is an object
const isObject = (arg: any): boolean => {
  return arg && typeof arg === 'object' && arg.constructor === Object;
}

// Returns if a Symbol
const isSymbol = (arg: any): boolean => {
  return typeof arg === 'symbol';
}

// Returns if a value is a regexp
const isRegExp = (arg: any): boolean => {
  return arg && typeof arg === 'object' && arg.constructor === RegExp;
}

// Returns if value is an error object
const isError = (arg: any): boolean => {
  return arg instanceof Error && typeof arg.message !== 'undefined';
}


module.exports = {
  isNull: isNull,
  isUndefined: isUndefined,
  isDefined: isDefined,
  isPrimitive: isPrimitive,
  isBoolean: isBoolean,
  isString: isString,
  isNumber: isNumber,
  isDate: isDate,
  isFunction: isFunction,
  isArray: isArray,
  isObject: isObject,
  isSymbol: isSymbol,
  isRegExp: isRegExp,
  isError: isError
};
