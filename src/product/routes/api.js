'use strict'

const express = require('express')
const api = express.Router()

const productControllers = require('../controllers/api')
const authMiddleWare = require('../../middlewares/auth')

api.get('/product', (req, res) => productControllers.getAllProducts(req, res))
api.get('/product/:productId', (req, res) => productControllers.getProductById(req,res))
api.post('/product', (req, res) => productControllers.createProduct(req, res))
api.put('/product/:productId', (req, res) => productControllers.updateProduct(req, res))
api.delete('/product/:productId', (req, res) => productControllers.deleteProduct(req, res))
api.get('/private', authMiddleWare, function(req,res) {
    res.status(200).send({user: req.user})
})

module.exports = api

