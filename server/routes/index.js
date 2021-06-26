const Router = require('express')
const router = new Router()

const deviceRoute = require('./deviceRoute')
const userRoute = require('./userRoute')
const brandRoute = require('./brandRoute')
const typeRoute = require('./typeRoute')

router.use('/user', userRoute)
router.use('/device', deviceRoute)
router.use('/type', typeRoute)
router.use('/brand', brandRoute)

module.exports = router