class ServerError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(message) {
    return new ServerError(404, message);
  }
  static ForbiddenAccess(message) {
    return new ServerError(403, message);
  }
  static InternalError(message) {
    return new ServerError(500, message);
  }
}

module.exports = ServerError;
