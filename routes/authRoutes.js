const express = require('express')
const router = express.Router()
const {enter} = require('../controllers/authController.js')
const logger = require('../middleware/middleware.js')

router.get('/enter/:name', logger, enter)

module.exports = router