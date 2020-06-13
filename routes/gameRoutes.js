const express = require('express')
const router = express.Router()
const {
    allgames, singlegame, creategame, updategame, deletegame, enter
} = require('../controllers/gameController.js')

router.get('/allgames', allgames)

router.get('/singlegame/:name', singlegame)

router.post('/creategame', creategame)

router.put('/updategame/:name', updategame)

router.delete('/deletegame/:name', deletegame)

router.post('/enter/:name', enter)

module.exports = router
