"use strict";

var validator = require('../utils/validator');

describe('validator.js', function () {
  describe('isNumber(a: any)', function () {
    test('should return true when received number type argument.', function () {
      expect(validator.isNumber(1)).toBe(true);
    });
    test('should return false when received other type argument.', function () {
      expect(validator.isNumber('1')).toBe(false);
      expect(validator.isNumber([])).toBe(false);
    });
  });
});