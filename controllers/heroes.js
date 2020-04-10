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

var _heroImageRepository = _interopRequireDefault(require("../repositories/heroImageRepository"));

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
  const heroObj = {
    name: req.body.name,
    hero_type_id: req.body.hero_type_id
  };

  _heroRepository.default.create(heroObj).then(data => {
    // req.body.option {boolean} from multer funtion
    if (req.body.option) {
      const imageObj = {
        hero_id: data.id,
        image: req.body.image,
        thumbnail: req.body.thumbnail,
        original: req.body.original
      };

      _heroImageRepository.default.create(imageObj).then(imgData => res.status(_httpStatusCodes.default.CREATED).json({
        hero: data,
        image: imgData
      }));
    } else res.status(_httpStatusCodes.default.CREATED).json({
      hero: data
    });
  }).catch(err => next(err));
}
/**
 * Update a hero.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function update(req, res, next) {
  const heroObj = {
    name: req.body.name,
    hero_type_id: req.body.hero_type_id
  };

  _heroRepository.default.update(req.params.id, heroObj).then(data => {
    if (req.body.option) {
      _heroImageRepository.default.getByWhere({
        hero_id: req.params.id
      }).then(result => {
        if (result.model.length > 0) {
          // remove hero images by user id
          return new Promise(res => {
            result.model.models.forEach((item, index) => {
              _heroImageRepository.default.removeImagebyId(item.id).then(() => {
                if (index === result.model.length - 1) {
                  res();
                }
              }).catch(() => {
                if (index === result.model.length - 1) {
                  res();
                }
              });
            });
          });
        }
      }).then(() => {
        const imageObj = {
          hero_id: data.id,
          image: req.body.image,
          thumbnail: req.body.thumbnail,
          original: req.body.original
        };

        _heroImageRepository.default.create(imageObj).then(imgData => res.status(_httpStatusCodes.default.CREATED).json({
          hero: data,
          image: imgData
        }));
      });
    } else res.status(_httpStatusCodes.default.CREATED).json({
      hero: data
    });
  }).catch(err => next(err));
}
/**
 * Delete a hero.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function remove(req, res, next) {
  _heroImageRepository.default.getByWhere({
    hero_id: req.params.id
  }).then(result => {
    if (result.model.length > 0) {
      // remove hero images by user id
      return new Promise(res => {
        result.model.models.forEach((item, index) => {
          _heroImageRepository.default.removeImagebyId(item.id).then(() => {
            if (index === result.model.length - 1) {
              res();
            }
          }).catch(() => {
            if (index === result.model.length - 1) {
              res();
            }
          });
        });
      });
    }
  }).then(() => {
    _heroRepository.default.remove(req.params.id).then(data => res.status(_httpStatusCodes.default.NO_CONTENT).json({
      data
    })).catch(err => next(err));
  }).catch(err => next(err));
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