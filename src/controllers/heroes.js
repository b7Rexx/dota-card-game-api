import HttpStatus from 'http-status-codes';

import heroRepository from '../repositories/heroRepository';
import heroImageRepository from '../repositories/heroImageRepository';

/**
 * Get all heros.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchAll(req, res, next) {
  heroRepository
    .getAll()
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

/**
 * Get a hero by its id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchById(req, res, next) {
  heroRepository
    .getById(req.params.id)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

/**
 * Create a new hero.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function create(req, res, next) {
  const heroObj = {
    name: req.body.name,
    hero_type_id: req.body.hero_type_id,
  };

  heroRepository
    .create(heroObj)
    .then((data) => {
      // req.body.option {boolean} from multer funtion
      if (req.body.option) {
        const imageObj = {
          hero_id: data.id,
          image: req.body.image,
          thumbnail: req.body.thumbnail,
          original: req.body.original,
        };

        heroImageRepository
          .create(imageObj)
          .then((imgData) => res.status(HttpStatus.CREATED).json({ hero: data, image: imgData }));
      } else res.status(HttpStatus.CREATED).json({ hero: data });
    })
    .catch((err) => next(err));
}

/**
 * Update a hero.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function update(req, res, next) {
  const heroObj = {
    name: req.body.name,
    hero_type_id: req.body.hero_type_id,
  };

  heroRepository
    .update(req.params.id, heroObj)
    .then((data) => {
      if (req.body.option) {
        heroImageRepository
          .getByWhere({ hero_id: req.params.id })
          .then((result) => {
            if (result.model.length > 0) {
              // remove hero images by user id
              return new Promise((res) => {
                result.model.models.forEach((item, index) => {
                  heroImageRepository
                    .removeImagebyId(item.id)
                    .then(() => {
                      if (index === result.model.length - 1) {
                        res();
                      }
                    })
                    .catch(() => {
                      if (index === result.model.length - 1) {
                        res();
                      }
                    });
                });
              });
            }
          })
          .then(() => {
            const imageObj = {
              hero_id: data.id,
              image: req.body.image,
              thumbnail: req.body.thumbnail,
              original: req.body.original,
            };

            heroImageRepository
              .create(imageObj)
              .then((imgData) => res.status(HttpStatus.CREATED).json({ hero: data, image: imgData }));
          });
      } else res.status(HttpStatus.CREATED).json({ hero: data });
    })
    .catch((err) => next(err));
}

/**
 * Delete a hero.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function remove(req, res, next) {
  heroImageRepository
    .getByWhere({ hero_id: req.params.id })
    .then((result) => {
      if (result.model.length > 0) {
        // remove hero images by user id
        return new Promise((res) => {
          result.model.models.forEach((item, index) => {
            heroImageRepository
              .removeImagebyId(item.id)
              .then(() => {
                if (index === result.model.length - 1) {
                  res();
                }
              })
              .catch(() => {
                if (index === result.model.length - 1) {
                  res();
                }
              });
          });
        });
      }
    })
    .then(() => {
      heroRepository
        .remove(req.params.id)
        .then((data) => res.status(HttpStatus.NO_CONTENT).json({ data }))
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
}

/**
 * Get Paginated heroes.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function paginate(req, res, next) {
  heroRepository
    .paginate(req.query.page, req.query.pagesize)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}
