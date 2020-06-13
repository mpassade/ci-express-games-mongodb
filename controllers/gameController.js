const VideoGame = require('../models/gameModel.js')

module.exports = {
    allgames: (req, res) => {
        VideoGame
        .find()
        .then(games => {
            if (games.length === 0){
                return res.status(400).send('No Games Found')
            }
            return res.status(200).json(games)
        }).catch(() => {
            return res.status(400).send('Server Error')
        })
    },

    singlegame: (req, res) => {
        VideoGame
        .findOne({name: req.params.name})
        .then(game => {
            if (game === null){
                return res.status(400).send('Game Not Found')
            }
            return res.status(200).json(game)
        }).catch(() => {
            return res.status(400).send('Server Error')
        })
    },

    creategame: (req, res) => {
        const {
            name, description, released, playtime, secret, timestamp
        } = req.body

        if (!name || !description || !secret){
            return res.status(400).send(
                'Please enter values for all required fields')
        }
    
        VideoGame
        .find({name})
        .then(games => {
            if (games.length !== 0){
                return res.status(400).send('This game already exists')
            }
            VideoGame
            .insertMany(req.body)
            .then(() => {
                return res.status(200).send('Game Created')
            }).catch(() => {
            return res.status(400).send('Server Error')
        })
        }).catch(() => {
            return res.status(400).send('Server Error')
        })
    },

    updategame: (req, res) => {
        VideoGame
        .findOne({name: req.params.name})
        .then(game => {
            if (game === null){
                return res.status(400).send('Game Not Found')
            }
            game.name = req.body.name ? req.body.name : game.name
            game.description = req.body.description ? req.body.description : game.description
            game.released = req.body.released ? req.body.released : game.released
            game.playtime = req.body.playtime ? req.body.playtime : game.playtime
            game.secret = req.body.secret ? req.body.secret : game.secret

            game.save().then(() => {
                return res.status(200).send('Game has been updated')
            }).catch(() => {
                return res.status(400).send('Server Error')
            })
        }).catch(() => {
            return res.status(400).send('Server Error')
        })
    },

    deletegame: (req, res) => {
        VideoGame
        .findOne({name: req.params.name})
        .then(game => {
            if (game === null){
                return res.status(400).send('Game Not Found')
            }
            VideoGame
            .deleteOne(game)
            .then(() => {
                return res.status(200).send('Game has been deleted')
            }).catch(() => {
                return res.status(400).send('Server Error')
            })
        }).catch(() => {
            return res.status(400).send('Server Error')
        })
    },

    enter: (req, res) => {
        VideoGame
        .findOne({name: req.params.name})
        .then(game => {
            if (game === null){
                return res.status(400).send('The game entered does not exist')
            }
            if (game.secret === req.body.secret){
                return res.redirect(`/api/v1/auth/enter/${req.params.name}`)
            }
            return res.redirect('/api/v1/main/noentry')

        }).catch(() => {
            return res.status(400).send('Server Error')
        })
    }
}