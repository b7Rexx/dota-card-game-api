"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findRecord = findRecord;
exports.recordValidator = recordValidator;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _validate = _interopRequireDefault(require("../utils/validate"));

var _recordRepository = _interopRequireDefault(require("../repositories/recordRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Validation schema
const schema = _joi.default.object({
  game_id: _joi.default.number().label('GameId').required(),
  user_id: _joi.default.number().label('UserId').required(),
  points: _joi.default.number().label('Points').required(),
  winner: _joi.default.boolean().label('Winner').default(0)
});
/**
 * Validate create/update record request.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */


function recordValidator(req, res, next) {
  return (0, _validate.default)(req.body, schema).then(() => next()).catch(err => next(err));
}
/**
 * Validate records existence.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */


function findRecord(req, res, next) {
  return _recordRepository.default.getById(req.params.id).then(() => next()).catch(err => next(err));
}
//# sourceMappingURL=recordValidator.js.map