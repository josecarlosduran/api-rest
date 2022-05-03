'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const apiProductRoutes = require('./product/routes/api')
const apiUserRoutes = require('./user/routes/api')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api', apiProductRoutes)
app.use('/api', apiUserRoutes)


module.exports = app
