"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _knex = _interopRequireDefault(require("knex"));

var _bookshelf = _interopRequireDefault(require("bookshelf"));

var _knexfile = _interopRequireDefault(require("./knexfile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Database connection.
 */
const knex = (0, _knex.default)(_knexfile.default);
const bookshelf = (0, _bookshelf.default)(knex);
bookshelf.plugin(['bookshelf-virtuals-plugin']); // bookshelf.plugin('pagination');
// bookshelf.plugin('bookshelf-page');

var _default = bookshelf;
exports.default = _default;
//# sourceMappingURL=db.js.map