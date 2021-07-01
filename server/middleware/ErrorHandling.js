const ServerError = require("../error_handler/serverError");

module.exports = (err, req, res, next) => {
  if (err instanceof ServerError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: "Unexpected error" });
};
