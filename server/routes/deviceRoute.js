const Router = require('express')
const deviceController = require('../controllers/deviceController')
const router = new Router()
const checkRole = require("../middleware/roleChecker");


router.post('/', checkRole("ADMIN"),deviceController.create)
router.get('/',deviceController.getAllDevices)
router.get('/:id',deviceController.getDevice)

module.exports = router