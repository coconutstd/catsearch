"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = require("./api/api.js");

var _SearchInput = _interopRequireDefault(require("./compenents/SearchInput.js"));

var _SearchResult = _interopRequireDefault(require("./compenents/SearchResult.js"));

var _ImageInfo = _interopRequireDefault(require("./compenents/ImageInfo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var App = /*#__PURE__*/function () {
  function App($target) {
    var _this = this;

    _classCallCheck(this, App);

    _defineProperty(this, "$target", null);

    _defineProperty(this, "data", []);

    this.$target = $target;
    this.searchInput = new _SearchInput["default"]({
      $target: $target,
      onSearch: function onSearch(keyword) {
        _api.api.fetchCats(keyword).then(function (_ref) {
          var data = _ref.data;
          return _this.setState(data);
        });
      }
    });
    this.searchResult = new _SearchResult["default"]({
      $target: $target,
      initialData: this.data,
      onClick: function onClick(image) {
        _this.imageInfo.setState({
          visible: true,
          image: image
        });
      }
    });
    this.imageInfo = new _ImageInfo["default"]({
      $target: $target,
      data: {
        visible: false,
        image: null
      }
    });
  }

  _createClass(App, [{
    key: "setState",
    value: function setState(nextData) {
      console.log(this);
      this.data = nextData;
      this.searchResult.setState(nextData);
    }
  }]);

  return App;
}();

exports["default"] = App;