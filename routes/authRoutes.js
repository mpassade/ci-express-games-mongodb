const express = require('express')
const router = express.Router()
const {enter} = require('../controllers/authController.js')

router.get('/enter/:name', enter)

module.exports = router