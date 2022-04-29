'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Product = require('./models/product')
const productControllers = require('./src/controllers/product')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/api/product', (req, res) => productControllers.getAllProducts(req, res))

app.get('/api/product/:productId', (req, res) => productControllers.getProductById(req,res))

app.post('/api/product', (req, res) => productControllers.createProduct(req, res))

app.put('/api/product/:productId', (req, res) => productControllers.updateProduct(req, res))

app.delete('/api/product/:productId', (req, res) => productControllers.deleteProduct(req, res))

const port = process.env.PORT || 3000

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if(err) {
        return console.log(`Error conectando a BD: ${err}`)
    }
    
    console.log ('Conexion a la BD establecida')
    app.listen(port, () => {
        console.log(`Api Rest corriendo en http://localhost:${port}`)
    })

})
