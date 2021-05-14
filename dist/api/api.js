"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = void 0;
var API_ENDPOINT = "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";
var api = {
  fetchCats: function fetchCats(keyword) {
    return fetch("".concat(API_ENDPOINT, "/api/cats/search?q=").concat(keyword)).then(function (res) {
      return res.json();
    });
  }
};
exports.api = api;