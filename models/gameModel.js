const mongoose = require('mongoose')

const VideoGameSchema = mongoose.Schema({
    name: {
        unique: true,
        lowercase: true,
        required: true,
        type: String
    },
    description: {
        type: String,
        required: true
    },
    released: {
        type: String
    },
    playtime: {
        type: Number
    },
    secret: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('videogame', VideoGameSchema)