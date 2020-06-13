const express = require('express')
const router = express.Router()
const {noentry} = require('../controllers/mainController.js')

router.get('/noentry', noentry)

module.exports = router