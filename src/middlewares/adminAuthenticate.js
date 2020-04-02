import Boom from '@hapi/boom';
import { verifyJwtToken } from '../utils/jwtAuth';
import userRepository from '../repositories/userRepository';

/**
 * Middleware to handle admin authentication.
 * Checks if id has true for isAdmin.
 * Adds user_id to request body.
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */
export default function adminAuthenticate(req, res, next) {
  let token = '';

  if (req.header('Authorization')) token = req.header('Authorization');
  else if (req.header('Token')) token = req.header('Token');
  else if (req.token) token = req.token;
  else throw Boom.unauthorized('Missing Auth');

  verifyJwtToken(token)
    .then((decoded) => {
      req.AuthID = decoded.id;
      userRepository
        .getById(decoded.id)
        .then((data) => {
          const user = JSON.parse(JSON.stringify(data)).model;

          if (user.isAdmin) next();
          else return next(Boom.unauthorized('Not Admin'));
        })
        .catch(() => {
          return next(Boom.unauthorized('Invalid Auth'));
        });
    })
    .catch((err) => {
      return next(Boom.unauthorized(err.name));
    });
}
