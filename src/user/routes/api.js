'use strict'

const express = require('express')
const api = express.Router()

const authControllers = require('../controllers/auth')


api.post('/user/sign-up', (req, res) => authControllers.signUp(req, res))


module.exports = api

