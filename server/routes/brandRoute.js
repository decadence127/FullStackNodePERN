const Router = require('express')
const brandController = require('../controllers/brandController')
const router = new Router()
const checkRole = require("../middleware/roleChecker");

router.post('/', checkRole("ADMIN"), brandController.create)
router.get('/', brandController.getBrands)



module.exports = router