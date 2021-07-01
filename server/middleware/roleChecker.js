const jwt = require("jsonwebtoken");

module.exports = function (role) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }
      const token = req.headers.authorization.substr(8);
      if (!token) {
        return res.status(401).json({ message: "User is unauthorized" });
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded.role !== role) {
        return res.status(403).json({ message: "You have no access." });
      }
      req.user = decoded;
      next();
}
};

