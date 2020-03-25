import Boom from '@hapi/boom';

/**
 * return CRUD repository by Modal
 */
class baseRepository {
  /**
   * @param {*} modal
   */
  constructor(modal) {
    this.modal = modal;
  }

  /**
   * Get all rows.
   *
   * @returns {Promise}
   */
  getAll() {
    return this.modal.fetchAll();
  }

  /**
   * Get a row.
   *
   * @param   {Number|String}  id
   * @returns {Promise}
   */
  getById(id) {
    return new this.modal({ id })
      .fetch()
      .then((row) => row)
      .catch(this.modal.NotFoundError, () => {
        throw Boom.notFound('Not found');
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
   * @param   {Object}         row
   * @returns {Promise}
   */
  update(id, row) {
    return new this.modal({ id }).save(row);
  }

  /**
   * Delete a row.
   *
   * @param   {Number|String}  id
   * @returns {Promise}
   */
  remove(id) {
    return new this.modal({ id }).fetch().then((row) => row.destroy());
  }
}
export default baseRepository;
