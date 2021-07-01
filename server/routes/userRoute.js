const Router = require("express");
const router = new Router();
const authMiddleware = require("../middleware/authTokenValidation");
const userController = require("../controllers/userController");

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", authMiddleware, userController.validate);

module.exports = router;
