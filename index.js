const express = require('express')
const app = express()
const morgan = require('morgan')
const gameRouter = require('./routes/gameRoutes.js')
const mainRouter = require('./routes/mainRoutes.js')
const authRouter = require('./routes/authRoutes.js')
const mongoose = require('mongoose')
require('dotenv').config()

const port = process.env.PORT || 8000

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/v1/games', gameRouter)
app.use('/api/v1/main', mainRouter)
app.use('/api/v1/auth', authRouter)

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('MongoDB Connected')
}).catch(() => {
    console.log('Error: MongoDB Not Connected')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})