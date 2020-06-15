/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/examples/example-promise.js":
/*!********************************************!*\
  !*** ./src/js/examples/example-promise.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExamplePromise; });
// todo example fetch https://googlechrome.github.io/samples/fetch-api/fetch-post.html
// https://developer.github.com/v3/
// https://cran.r-project.org/web/packages/jsonlite/vignettes/json-apis.html
// https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch
function ExamplePromise() {
  var URLs = ['https://api.github.com/users/crazyyy/repos', 'https://api.github.com/repos/vmg/redcarpet/issues?state=open', 'https://api.github.com/repos/vmg/redcarpet/issues?state=closed'];
  var requests = URLs.map(function (url) {
    return fetch(url);
  });
  var responses = Promise.all(requests);
  console.log(responses);
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/utils/index */ "./src/js/libs/utils/index.js");
/* harmony import */ var _examples_example_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examples/example-promise */ "./src/js/examples/example-promise.js");


var testUndf;
var testNull = null;
var testarr = [1, 2, 3, 4];
var testObj = {
  x: 22,
  y: '33',
  xyz: 'contenta'
};

var testFunc = function testFunc() {
  console.log('test function');
};

var testSting = 'lorem ipsum';
var testNum = 777;
var testBool = false;
var testBoolTrue = true;
var testDate = new Date();
var symbol2 = Symbol(42);
var regexp1 = /ab+c/i;
var regexp2 = new RegExp('ab+c', 'i');
var regexp3 = new RegExp(/ab+c/, 'i');
var testError = new Error('Ой-ой!');
var utils = new _libs_utils_index__WEBPACK_IMPORTED_MODULE_0__["default"]('new name');
utils.warn('hire');
utils.log(utils.name);

function sanitise(x) {
  if (isNaN(x)) {
    return NaN;
  }

  return x;
}

utils.log(testUndf);
utils.log(testNull);
utils.log(testarr);
utils.log(testObj);
utils.log(testFunc);
utils.log(testSting);
utils.log(testNum);
utils.log(sanitise('NotANumber'));
utils.log(testBool);
utils.log(testBoolTrue);
utils.log(testDate);
utils.log(symbol2);
utils.log(regexp1);
utils.log(regexp2);
utils.log(regexp3);
utils.log(testError);
utils.err(utils.name);
utils.ok(utils.name);
Object(_examples_example_promise__WEBPACK_IMPORTED_MODULE_1__["default"])(); //
// (function () {
//  let method;
//  const noop = function noop() {};
//  const methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
//  let { length } = methods;
//  const console = window.console = window.console || {};
//  while (length--) {
//    method = methods[length]; // Only stub undefined methods.
//    if (!console[method]) {
//      console[method] = noop;
//    }
//  }
// }());
//
//
//
// $('.custom-form').on('submit', (e) => {
//  e.preventDefault();
//  console.log('prevenr ');
// });
//
// $('.start-button').on('click', (e) => {
//  const data = {
//    action: 'my_action',
//    whatever: ajax_object.we_value, // We pass php values differently!
//
//  }; // We can also pass the url value separately from ajaxurl for front end AJAX implementations
//
//  jQuery.post(ajax_object.ajax_url, data, (response) => {
//    //    console.log(response)
//    const obj = JSON.parse(response); //      console.log(obj.count);
//
//    console.log(obj); //    alert('Got this from the server: ' + response);
//  });
// });
//
// $('.get-ids').on('click', (e) => {
//  const data = {
//    action: 'get_ids',
//    whatever: ajax_object.we_value, // We pass php values differently!
//
//  }; // We can also pass the url value separately from ajaxurl for front end AJAX implementations
//
//  jQuery.post(ajax_object.ajax_url, data, (response) => {
//    //    console.log(response)
//    const obj = JSON.parse(response); //      console.log(obj.count);
//
//    console.log(obj);
//    split_for_chunk_and_foreach(obj); //    alert('Got this from the server: ' + response);
//  });
// });
//
// $('.get-empty-authors').on('click', (e) => {
//  const data = {
//    action: 'get_empty_users',
//    whatever: ajax_object.we_value, // We pass php values differently!
//
//  }; // We can also pass the url value separately from ajaxurl for front end AJAX implementations
//
//  jQuery.post(ajax_object.ajax_url, data, (response) => {
//    //    console.log(response)
//    const obj = JSON.parse(response); //      console.log(obj.count);
//
//    console.log(obj);
//    split_authors_for_chunk_and_foreach_clean(obj); //    alert('Got this from the server: ' + response);
//  });
// });
// function split_authors_for_chunk_and_foreach_clean(ids) {
//  console.log(ids);
//  const chunks = ids.chunk(1);
//  console.log(chunks); //  chunks.forEach(function(chunkItem, index){
//
//  (async () => {
//    const data = [1, 2, 3, 4, 5];
//
//    for (const e of data) {
//      const i = await somePromiseFn(e);
//      console.log(i);
//    }
//
//    console.log('this will print delimiter ');
//
//    for (let n = 0; n < chunks.length; n++) {
//      const reslt = await someAjaxPromiseAuthors(chunks[n]);
//      console.log(`Finished ${n} of ${chunks.length}`);
//      console.log(reslt);
//    }
//    console.log('this will print last');
//  })();
// }
//
// function split_for_chunk_and_foreach(ids) {
//  console.log(ids);
//  const chunks = ids.chunk(50);
//  console.log(chunks);
//
//  (async () => {
//    const data = [1, 2, 3, 4, 5];
//
//    for (const e of data) {
//      const i = await somePromiseFn(e);
//      console.log(i);
//    }
//
//    console.log('this will print delimiter ');
//
//    for (let n = 0; n < chunks.length; n++) {
//      const reslt = await someAjaxPromise(chunks[n]);
//      console.log(`Finished ${n} of ${chunks.length}`);
//      console.log(reslt);
//    }
//
//    console.log('this will print last');
//  })();
//
// }
//
// function someAjaxPromise(chunker) {
//  return new Promise((res, rej) => {
//    setTimeout(() => {
//      $.ajax({
//        beforeSend() { /* console.log('beforesend') */ },
//        type: 'POST',
//        dataType: 'json',
//        url: ajax_object.ajax_url,
//        data: {
//          action: 'my_action_chanked',
//          whatever: chunker, // We pass php values differently!
//        },
//        success(result) {
//          //          console.log ( "success" );
//          //          console.log ( result );
//          res(result);
//        },
//        error(XMLHttpRequest, textStatus, errorThrown) {
//          console.log('XMLHttpRequest: ');
//          console.log(XMLHttpRequest);
//          console.log(`Status: ${textStatus}`);
//          console.log(`Error: ${errorThrown}`);
//        },
//      });
//
//      //      res(chunker)
//    }, 2000);
//  });
// }
// function someAjaxPromiseAuthors(chunker) {
//  return new Promise((res, rej) => {
//    setTimeout(() => {
//      $.ajax({
//        beforeSend() { /* console.log('beforesend') */ },
//        type: 'POST',
//        dataType: 'json',
//        url: ajax_object.ajax_url,
//        data: {
//          action: 'my_action_chanked_authors',
//          whatever: chunker, // We pass php values differently!
//        },
//        success(result) {
//          //          console.log ( "success" );
//          //          console.log ( result );
//          res(result);
//        },
//        error(XMLHttpRequest, textStatus, errorThrown) {
//          console.log('XMLHttpRequest: ');
//          console.log(XMLHttpRequest);
//          console.log(`Status: ${textStatus}`);
//          console.log(`Error: ${errorThrown}`);
//        },
//      });
//
//      //      res(chunker)
//    }, 2000);
//  });
// }
//
// function somePromiseFn(n) {
//  return new Promise((res, rej) => {
//    setTimeout(() => {
//      res(n);
//    }, 100);
//  });
// }
/// **
// * Define the chunk method in the prototype of an array
// * that returns an array with arrays of the given size.
// *
// * @param chunkSize {Integer} Size of every group
// */
//
// Object.defineProperty(Array.prototype, 'chunk', {
//  value: function value(chunkSize) {
//    const that = this;
//    return Array(Math.ceil(that.length / chunkSize)).fill().map((_, i) => that.slice(i * chunkSize, i * chunkSize + chunkSize));
//  },
// });
//

/***/ }),

/***/ "./src/js/libs/utils/check-datatype.js":
/*!*********************************************!*\
  !*** ./src/js/libs/utils/check-datatype.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var CheckDataType = {
  isNull: function isNull(arg) {
    return arg === null;
  },
  isUndefined: function isUndefined(arg) {
    return typeof arg === "undefined" || arg === undefined; // this.isNull(arg);
  },
  isDefined: function isDefined(arg) {
    return arg !== undefined && arg !== null || typeof arg !== "undefined" && arg !== null; // !this.isNull(arg);
  },
  isPrimitive: function isPrimitive(arg) {
    return typeof arg === "string" || typeof arg === "number" || // $flow-disable-line
    _typeof(arg) === "symbol" || typeof arg === "boolean";
  },
  isBoolean: function isBoolean(arg) {
    return typeof arg === "boolean";
  },
  isString: function isString(arg) {
    return typeof arg === "string" || arg instanceof String;
  },
  isNumber: function isNumber(arg) {
    return typeof arg === "number" && isFinite(arg);
  },
  isDate: function isDate(arg) {
    return arg instanceof Date;
  },
  isFunction: function isFunction(arg) {
    return typeof arg === "function";
  },
  isArray: function isArray(arg) {
    return arg && _typeof(arg) === "object" && arg.constructor === Array;
  },
  isObject: function isObject(arg) {
    return arg && _typeof(arg) === "object" && arg.constructor === Object;
  },
  isSymbol: function isSymbol(arg) {
    return _typeof(arg) === "symbol";
  },
  isRegExp: function isRegExp(arg) {
    return arg && _typeof(arg) === "object" && arg.constructor === RegExp;
  },
  isError: function isError(arg) {
    return arg instanceof Error && typeof arg.message !== "undefined";
  },
  getTypeOf: function getTypeOf(arg) {
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
      return 'Unknown';
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CheckDataType);

/***/ }),

/***/ "./src/js/libs/utils/index.js":
/*!************************************!*\
  !*** ./src/js/libs/utils/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Utils; });
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logging */ "./src/js/libs/utils/logging.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Utils = /*#__PURE__*/function () {
  function Utils(name) {
    _classCallCheck(this, Utils);

    this.name = name;
    this.logging = new _logging__WEBPACK_IMPORTED_MODULE_0__["Logging"]();
  }

  _createClass(Utils, [{
    key: "log",
    value: function log(message) {
      this.logging.showMessage(message);
    }
  }, {
    key: "err",
    value: function err(message) {
      this.logging.showError(message);
    }
  }, {
    key: "ok",
    value: function ok(message) {
      this.logging.showOk(message);
    }
  }, {
    key: "warn",
    value: function warn(message) {
      this.logging.showWarn(message);
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(value) {
      if (value.length < 4) {
        console.log('Имя слишком короткое.');
        return;
      }

      this._name = value;
    }
  }], [{
    key: "exampleStaticLog",
    value: function exampleStaticLog(message) {
      Utils.exampleStaticLog('exampleStaticLog');
      console.log(message);
    }
  }]);

  return Utils;
}();



/***/ }),

/***/ "./src/js/libs/utils/logging.js":
/*!**************************************!*\
  !*** ./src/js/libs/utils/logging.js ***!
  \**************************************/
/*! exports provided: Logging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logging", function() { return Logging; });
/* harmony import */ var _check_datatype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-datatype.js */ "./src/js/libs/utils/check-datatype.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Logging = /*#__PURE__*/function () {
  function Logging() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Logging);

    this.title = title;
    this.type = type;
    this.styleBlueBg = 'color: white; background-color: #2274A5';
    this.styleGreenBg = 'color: white; background-color: #95B46A';
    this.styleOrangeBg = 'color: white; background-color: #e47220';
    this.styleRedBg = 'color: white; background-color: #D33F49';
  }

  _createClass(Logging, [{
    key: "getCurrentTimestamp",
    value: function getCurrentTimestamp() {
      var currentdate = new Date();
      return "".concat(currentdate.getHours(), ":").concat(currentdate.getMinutes(), ":").concat(currentdate.getSeconds());
    }
  }, {
    key: "showMessage",
    value: function showMessage(message) {
      console.log("%c ".concat(this.getCurrentTimestamp(), " Notice: "), this.styleBlueBg, "(".concat(_check_datatype_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTypeOf(message), ")"));
      console.log('%c > ', this.styleBlueBg, message);
    }
  }, {
    key: "showOk",
    value: function showOk(message) {
      console.log("%c ".concat(this.getCurrentTimestamp(), " Ok: "), this.styleGreenBg, "(".concat(_check_datatype_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTypeOf(message), ")"));
      console.log('%c > ', this.styleGreenBg, message);
    }
  }, {
    key: "showError",
    value: function showError(message) {
      console.log("%c ".concat(this.getCurrentTimestamp(), " Error: "), this.styleRedBg, "(".concat(_check_datatype_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTypeOf(message), ")"));
      console.log('%c > ', this.styleRedBg, message);
    }
  }, {
    key: "showWarn",
    value: function showWarn(message) {
      console.log("%c ".concat(this.getCurrentTimestamp(), " Warning: "), this.styleOrangeBg, "(".concat(_check_datatype_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTypeOf(message), ")"));
      console.log('%c > ', this.styleOrangeBg, message);
    }
  }]);

  return Logging;
}();



/***/ })

/******/ });
//# sourceMappingURL=index.js.map