'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const productControllers = require('./product/controllers/api')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/api/product', (req, res) => productControllers.getAllProducts(req, res))
app.get('/api/product/:productId', (req, res) => productControllers.getProductById(req,res))
app.post('/api/product', (req, res) => productControllers.createProduct(req, res))
app.put('/api/product/:productId', (req, res) => productControllers.updateProduct(req, res))
app.delete('/api/product/:productId', (req, res) => productControllers.deleteProduct(req, res))

module.exports = app
