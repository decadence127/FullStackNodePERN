const ServerError = require("../error_handler/serverError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Cart } = require("../entities/entities");

const JWTGenerator = (id, email, role) => {
  return jwt.sign(
    {
      id,
      email,
      role,
    },
    process.env.SECRET_KEY,
    { expiresIn: "24h" }
  );
};

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ServerError.badRequest("Incorrect email or password"));
    }
    const potentialUser = await User.findOne({ where: { email } });
    if (potentialUser) {
      return next(ServerError.badRequest("This user already exists."));
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const user = await User.create({ email, role, password: hashPassword });
    const cart = await Cart.create({ userId: user.id });
    const token = JWTGenerator(user.id, user.email, user.role);
    return res.json({ token });
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      let comparePasswords = bcrypt.compareSync(password, user.password);
      if (!comparePasswords) {
        throw new Error();
      }
      const token = JWTGenerator(user.id, user.email, user.role);
      return res.json({ token });
    } catch (e) {
      if (e instanceof TypeError) {
        return next(ServerError.badRequest("User not found"));
      } else return next(ServerError.badRequest("Invalid password"));
    }
  }

  async validate(req, res, next) {
    const token = JWTGenerator(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  }
}

module.exports = new UserController();
