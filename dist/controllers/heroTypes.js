"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAll = fetchAll;
exports.fetchById = fetchById;
exports.create = create;
exports.update = update;
exports.remove = remove;

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

var _heroTypeRepository = _interopRequireDefault(require("../repositories/heroTypeRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get all heroType.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
function fetchAll(req, res, next) {
  _heroTypeRepository.default.getAll().then(data => res.json({
    data
  })).catch(err => next(err));
}
/**
 * Get a heroType by its id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function fetchById(req, res, next) {
  _heroTypeRepository.default.getById(req.params.id).then(data => res.json({
    data
  })).catch(err => next(err));
}
/**
 * Create a new heroType.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function create(req, res, next) {
  _heroTypeRepository.default.create(req.body).then(data => res.status(_httpStatusCodes.default.CREATED).json({
    data
  })).catch(err => next(err));
}
/**
 * Update a heroType.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function update(req, res, next) {
  _heroTypeRepository.default.update(req.params.id, req.body).then(data => res.json({
    data
  })).catch(err => next(err));
}
/**
 * Delete a heroType.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function remove(req, res, next) {
  _heroTypeRepository.default.remove(req.params.id).then(data => res.status(_httpStatusCodes.default.NO_CONTENT).json({
    data
  })).catch(err => next(err));
}
//# sourceMappingURL=heroTypes.js.map