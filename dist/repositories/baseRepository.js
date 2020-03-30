"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _boom = _interopRequireDefault(require("@hapi/boom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * return CRUD repository by Modal
 */
class baseRepository {
  /**
   * @param {*} modal
   */
  constructor(modal) {
    this.modal = modal;
    this.defaultOrder = 'id'; // order by in paginate function

    this.withRelated = [];
  }
  /**
   * Get all rows.
   *
   * @returns {Promise}
   */


  getAll() {
    return new this.modal().fetchAll().then(data => {
      return {
        model: [...data.models]
      };
    });
  }
  /**
   * Get a row.
   *
   * @param   {Number|String}  id
   * @returns {Promise}
   */


  getById(id) {
    return new this.modal({
      id
    }).fetch({
      withRelated: this.withRelated
    }).then(data => {
      return {
        model: data
      };
    }).catch(this.modal.NotFoundError, () => {
      throw _boom.default.notFound('Not found');
    });
  }
  /**
   * Create new row.
   *
   * @param   {Object}  row
   * @returns {Promise}
   */


  create(row) {
    return new this.modal(row).save();
  }
  /**
   * Update a row.
   *
   * @param   {Number|String}  id
   * @param   {Object} row
   * @returns {Promise}
   */


  update(id, row) {
    return new this.modal({
      id
    }).save(row);
  }
  /**
   * Delete a row.
   *
   * @param   {Number|String}  id
   * @returns {Promise}
   */


  remove(id) {
    return new this.modal({
      id
    }).fetch().then(row => row.destroy());
  }
  /**
   * Where query.
   *
   * @param {*} whereQuery
   * @returns {Promise}
   */


  where(whereQuery) {
    return new this.modal(whereQuery).fetch().then(data => {
      return {
        model: data
      };
    }).catch(this.modal.NotFoundError, () => {
      throw _boom.default.notFound('Not found');
    });
  }
  /**
   * Paginate rows.
   * Default page = 1, no of rows per page = 10.
   *
   * @param {*} page
   * @param {*} pageSize
   */


  paginate(page = 1, pageSize = 10) {
    return this.modal.query(function () {}).orderBy(`-${this.defaultOrder}`).fetchPage({
      pageSize: parseInt(pageSize) || 10,
      page: parseInt(page) || 1,
      withRelated: this.withRelated
    }).then(data => {
      return {
        model: [...data.models],
        pagination: { ...data.pagination
        }
      };
    });
  }

}

var _default = baseRepository;
exports.default = _default;
//# sourceMappingURL=baseRepository.js.map