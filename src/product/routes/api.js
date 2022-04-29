'use strict'

const express = require('express')
const api = express.Router()

const productControllers = require('../controllers/api')

api.get('/product', (req, res) => productControllers.getAllProducts(req, res))
api.get('/product/:productId', (req, res) => productControllers.getProductById(req,res))
api.post('/product', (req, res) => productControllers.createProduct(req, res))
api.put('/product/:productId', (req, res) => productControllers.updateProduct(req, res))
api.delete('/product/:productId', (req, res) => productControllers.deleteProduct(req, res))

module.exports = api

