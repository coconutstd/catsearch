"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ImageInfo = /*#__PURE__*/function () {
  function ImageInfo(_ref) {
    var $target = _ref.$target,
        data = _ref.data;

    _classCallCheck(this, ImageInfo);

    _defineProperty(this, "$imageInfo", null);

    _defineProperty(this, "data", null);

    var $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);
    this.data = data;
    this.render();
  }

  _createClass(ImageInfo, [{
    key: "setState",
    value: function setState(nextData) {
      this.data = nextData;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.data.visible) {
        var _this$data$image = this.data.image,
            name = _this$data$image.name,
            url = _this$data$image.url,
            temperament = _this$data$image.temperament,
            origin = _this$data$image.origin;
        this.$imageInfo.innerHTML = "\n        <div class=\"content-wrapper\">\n          <div class=\"title\">\n            <span>".concat(name, "</span>\n            <div class=\"close\">x</div>\n          </div>\n          <img src=\"").concat(url, "\" alt=\"").concat(name, "\"/>        \n          <div class=\"description\">\n            <div>\uC131\uACA9: ").concat(temperament, "</div>\n            <div>\uD0DC\uC0DD: ").concat(origin, "</div>\n          </div>\n        </div>");
        this.$imageInfo.style.display = "block";
      } else {
        this.$imageInfo.style.display = "none";
      }
    }
  }]);

  return ImageInfo;
}();

exports["default"] = ImageInfo;