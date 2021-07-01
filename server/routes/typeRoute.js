const Router = require("express");
const typeController = require("../controllers/typeController");
const router = new Router();
const checkRole = require("../middleware/roleChecker");

router.post("/", checkRole("ADMIN"), typeController.create);

router.get("/", typeController.getTypes);

module.exports = router;
