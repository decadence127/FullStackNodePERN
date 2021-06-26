const Router = require('express')
const deviceController = require('../controllers/deviceController')
const router = new Router()

router.post('/',deviceController.create)
router.get('/',deviceController.getAllDevices)
router.get('/:id',deviceController.getDevice)

module.exports = router