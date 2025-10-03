import sanitize from 'mongo-sanitize';

export const sanitizeRequest = (req, res, next)=> {
   // Sanitize req.body
  if (req.body) {
    req.body = sanitize(req.body);
  }

  //  Sanitize req.params (overwrite allowed)
  if (req.params) {
    req.params = sanitize(req.params);
  }

  //  Sanitize req.query (overwrite not allowed)
  if (req.query) {
    for (const key in req.query) {
      req.query[key] = sanitize(req.query[key]);
    }
  }

  next();
}