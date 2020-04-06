import Boom from '@hapi/boom';
import { verifyJwtToken } from '../utils/jwtAuth';

/**
 * Middleware to handle authentication.
 * Adds user_id to request body.
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */
export default function authenticate(req, res, next) {
  let token = '';

  if (req.header('Authorization')) token = req.header('Authorization');
  else if (req.header('Token')) token = req.header('Token');
  else if (req.token) token = req.token;
  else throw Boom.unauthorized('Missing Auth');

  verifyJwtToken(token)
    .then((decoded) => {
      req.AuthID = decoded.id;
      // req.body.user_id = decoded.id;
      next();
    })
    .catch((err) => {
      return next(Boom.unauthorized(err.name));
    });
}
