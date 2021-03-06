import Record from '../models/record';
import baseRepository from './baseRepository';

/**
 * returns user repo
 */
class RecordRepository extends baseRepository {
  /**
   * Init Record Modal.
   */
  constructor() {
    super(Record);
    this.withRelated = ['relateUser'];
  }
}
export default new RecordRepository();
