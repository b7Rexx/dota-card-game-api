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

var _recordRepository = _interopRequireDefault(require("../repositories/recordRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get all records.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
function fetchAll(req, res, next) {
  _recordRepository.default.getAll().then(data => res.json({
    data
  })).catch(err => next(err));
}
/**
 * Get a record by its id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function fetchById(req, res, next) {
  _recordRepository.default.getById(req.params.id).then(data => res.json({
    data
  })).catch(err => next(err));
}
/**
 * Create a new record.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function create(req, res, next) {
  _recordRepository.default.create(req.body).then(data => res.status(_httpStatusCodes.default.CREATED).json({
    data
  })).catch(err => next(err));
}
/**
 * Update a record.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function update(req, res, next) {
  _recordRepository.default.update(req.params.id, req.body).then(data => res.json({
    data
  })).catch(err => next(err));
}
/**
 * Delete a record.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function remove(req, res, next) {
  _recordRepository.default.remove(req.params.id).then(data => res.status(_httpStatusCodes.default.NO_CONTENT).json({
    data
  })).catch(err => next(err));
}
/**
 * Get Paginated records.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */


function paginate(req, res, next) {
  _recordRepository.default.paginate(req.query.page, req.query.pagesize).then(data => res.json({
    data
  })).catch(err => next(err));
}
//# sourceMappingURL=records.js.map