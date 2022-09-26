const { query, validationResult } = require("express-validator");

module.exports = {
  // validate the req to check for request query params.
  validateRequestQuery() {
    return [query("bbox").not().isEmpty(), this.applyValidationMiddleware()];
  },

  applyValidationMiddleware() {
    return (req, res, next) => {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        return next();
      } else {
        const error = errors.array().map((error) => {
          return {
            param: error.param,
            issue: error.msg,
            location: error.location,
          };
        });
        return next(Error(JSON.stringify(error)));
      }
    };
  }
};
