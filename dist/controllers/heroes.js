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

var _heroRepository = _interopRequireDefault(require("../repositories/heroRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get all heros.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
function fetchAll(req, res, next) {
  _heroRepository.default.getAll().then(data => res.json({
    data
  })).catch(err => next(err));
}
/**
 * Get a hero by its id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function fetchById(req, res, next) {
  _heroRepository.default.getById(req.params.id).then(data => res.json({
    data
  })).catch(err => next(err));
}
/**
 * Create a new hero.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function create(req, res, next) {
  _heroRepository.default.create(req.body).then(data => res.status(_httpStatusCodes.default.CREATED).json({
    data
  })).catch(err => next(err));
}
/**
 * Update a hero.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function update(req, res, next) {
  _heroRepository.default.update(req.params.id, req.body).then(data => res.json({
    data
  })).catch(err => next(err));
}
/**
 * Delete a hero.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function remove(req, res, next) {
  _heroRepository.default.remove(req.params.id).then(data => res.status(_httpStatusCodes.default.NO_CONTENT).json({
    data
  })).catch(err => next(err));
}
/**
 * Get Paginated heroes.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */


function paginate(req, res, next) {
  _heroRepository.default.paginate(req.query.page, req.query.pagesize).then(data => res.json({
    data
  })).catch(err => next(err));
}
//# sourceMappingURL=heroes.js.map