'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const apiProductRoutes = require('./product/routes/api')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api', apiProductRoutes)


module.exports = app
