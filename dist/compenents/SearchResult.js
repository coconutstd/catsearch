"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SearchResult = /*#__PURE__*/function () {
  function SearchResult(_ref) {
    var $target = _ref.$target,
        initialData = _ref.initialData,
        onClick = _ref.onClick;

    _classCallCheck(this, SearchResult);

    _defineProperty(this, "$searchResult", null);

    _defineProperty(this, "data", null);

    _defineProperty(this, "onClick", null);

    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);
    this.data = initialData;
    this.onClick = onClick;
    this.render();
  }

  _createClass(SearchResult, [{
    key: "setState",
    value: function setState(nextData) {
      this.data = nextData;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      this.$searchResult.innerHTML = this.data.map(function (cat) {
        return "\n          <div class=\"item\">\n            <img src=".concat(cat.url, " alt=").concat(cat.name, " />\n          </div>\n        ");
      }).join("");
      this.$searchResult.querySelectorAll(".item").forEach(function ($item, index) {
        $item.addEventListener("click", function () {
          _this.onClick(_this.data[index]);
        });
      });
    }
  }]);

  return SearchResult;
}();

exports["default"] = SearchResult;