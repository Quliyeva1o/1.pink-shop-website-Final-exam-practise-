const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const RouterItem = require('./router/Card.router.js')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use('/cards', RouterItem)
const PORT = process.env.PORT || 3020


mongoose.connect("mongodb+srv://Reiyna:Rena123@pinkshop.9tf46bd.mongodb.net/").then(res => {
    console.log('Connect to db')
})

app.listen(PORT, () => {
    console.log(`App runnin on port ${PORT}`)
})


