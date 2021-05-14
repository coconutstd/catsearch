"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// For load validator and require in test file.
// NOTE: Comment below lines, if you using es6 module.
(function (root, factory) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
    module.exports = factory();
  } else {
    root.validator = factory();
  }
})(void 0, function () {
  // implement code here
  var validator = {
    isNumber: function isNumber(a) {
      return typeof a === 'number';
    }
  };
  return validator;
}); // NOTE: Uncomment below lines, if you using es6 module.
// export default {
//   isNumber(a) {
//     return typeof a === 'number'
//   }
// }