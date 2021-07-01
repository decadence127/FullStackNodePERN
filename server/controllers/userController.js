const ServerError = require("../error_handler/serverError");
class UserController {
  async registration(req, res) {}

  async login(req, res) {}

  async validate(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ServerError.badRequest("Id was not found"));
    }
    res.json(id);
  }
}

module.exports = new UserController();
