"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const multer = require('multer');

const upload = multer({
  limits: {
    fileSize: 8 * 1024 * 1024
  }
});
var _default = upload;
exports.default = _default;
//# sourceMappingURL=upload.js.map