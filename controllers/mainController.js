const VideoGame = require('../models/gameModel.js')

module.exports = {
    noentry: (req, res) => {
        return res.status(400).send('You will have to enter the correct secret to enter')
    }
}