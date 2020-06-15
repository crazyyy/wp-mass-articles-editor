const CheckDataType = {
  isNull: (arg) => {
    return arg === null;
  },
  isUndefined: (arg) => {
    return typeof arg === "undefined" || arg === undefined; // this.isNull(arg);
  },
  isDefined: (arg) => {
    return (
      (arg !== undefined && arg !== null) ||
      (typeof arg !== "undefined" && arg !== null)
    ); // !this.isNull(arg);
  },
  isPrimitive: (arg) => {
    return (
      typeof arg === "string" ||
      typeof arg === "number" ||
      // $flow-disable-line
      typeof arg === "symbol" ||
      typeof arg === "boolean"
    );
  },
  isBoolean: (arg) => {
    return typeof arg === "boolean";
  },
  isString: (arg) => {
    return typeof arg === "string" || arg instanceof String;
  },
  isNumber: (arg) => {
    return typeof arg === "number" && isFinite(arg);
  },
  isDate: (arg) => {
    return arg instanceof Date;
  },
  isFunction: (arg) => {
    return typeof arg === "function";
  },
  isArray: (arg) => {
    return arg && typeof arg === "object" && arg.constructor === Array;
  },
  isObject: (arg) => {
    return arg && typeof arg === "object" && arg.constructor === Object;
  },
  isSymbol: (arg) => {
    return typeof arg === "symbol";
  },
  isRegExp: (arg) => {
    return arg && typeof arg === "object" && arg.constructor === RegExp;
  },
  isError: (arg) => {
    return arg instanceof Error && typeof arg.message !== "undefined";
  },
  getTypeOf: (arg) => {
    if (CheckDataType.isNull(arg)) {
      return 'Null';
    } else if (CheckDataType.isUndefined(arg)) {
      return 'undefined';
    } else if (CheckDataType.isArray(arg)) {
      if (CheckDataType.isObject(arg[0])) {
        return 'Array of Objects';
      } else {
        return 'Array';
      }
    } else if (CheckDataType.isString(arg)) {
      return 'String';
    } else if (CheckDataType.isNumber(arg)) {
      if (!isNaN(arg)) {
        return 'Number';
      } else {
        return 'NaN';
      }
    } else if (CheckDataType.isBoolean(arg)) {
      return 'Boolean';
    } else if (CheckDataType.isObject(arg)) {
      return 'Object';
    } else if (CheckDataType.isFunction(arg)) {
      return 'Function';
    } else if (CheckDataType.isSymbol(arg)) {
      return 'Symbol';
    } else if (CheckDataType.isRegExp(arg)) {
      return 'RegExp';
    } else if (CheckDataType.isError(arg)) {
      return 'Error';
    } else if (CheckDataType.isDate(arg)) {
      return 'Date';
    } else {
      return 'Unknown'
    }
  }
};

export default CheckDataType;
