import Boom from '@hapi/boom';
import HttpStatus from 'http-status-codes';

import { comparePass } from '../utils/bcrypt';
import userRepository from '../repositories/userRepository';

/**
 * Get all users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function login(req, res, next) {
  userRepository
    .where({ email: req.body.email })
    .then((data) => {
      const user = JSON.parse(JSON.stringify(data));

      if (comparePass(req.body.password, user.password)) {
        return res.status(HttpStatus.ACCEPTED).json(userRepository.accessToken(user.id));
      } else {
        throw Boom.unauthorized('invalid password');
      }
    })
    .catch((err) => next(err));
}
