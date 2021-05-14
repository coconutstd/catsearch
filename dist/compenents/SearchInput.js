"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TEMPLATE = '<input type="text">';

var SearchInput = /*#__PURE__*/function () {
  function SearchInput(_ref) {
    var $target = _ref.$target,
        onSearch = _ref.onSearch;

    _classCallCheck(this, SearchInput);

    var $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";
    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);
    $searchInput.addEventListener("keyup", function (e) {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });
    console.log("SearchInput created.", this);
  }

  _createClass(SearchInput, [{
    key: "render",
    value: function render() {}
  }]);

  return SearchInput;
}();

exports["default"] = SearchInput;