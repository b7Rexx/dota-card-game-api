"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAll = fetchAll;
exports.fetchById = fetchById;
exports.create = create;
exports.update = update;
exports.remove = remove;
exports.paginate = paginate;

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

var _userRepository = _interopRequireDefault(require("../repositories/userRepository"));

var _bcrypt = require("../utils/bcrypt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get all users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
function fetchAll(req, res, next) {
  _userRepository.default.getAll().then(data => res.json({
    data
  })).catch(err => next(err));
}
/**
 * Get a user by its id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function fetchById(req, res, next) {
  _userRepository.default.getById(req.params.id).then(data => res.json({
    data
  })).catch(err => next(err));
}
/**
 * Create a new user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function create(req, res, next) {
  req.body.password = (0, _bcrypt.hashPass)(req.body.password);

  _userRepository.default.create(req.body).then(data => res.status(_httpStatusCodes.default.CREATED).json({
    data
  })).catch(err => next(err));
}
/**
 * Update a user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function update(req, res, next) {
  req.body.password = (0, _bcrypt.hashPass)(req.body.password);

  _userRepository.default.update(req.params.id, req.body).then(data => res.json({
    data
  })).catch(err => next(err));
}
/**
 * Delete a user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function remove(req, res, next) {
  _userRepository.default.remove(req.params.id).then(data => res.status(_httpStatusCodes.default.NO_CONTENT).json({
    data
  })).catch(err => next(err));
}
/**
 * Get Paginated users.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */


function paginate(req, res, next) {
  _userRepository.default.paginate(req.query.page, req.query.pagesize).then(data => res.json({
    data
  })).catch(err => next(err));
}
//# sourceMappingURL=users.js.map