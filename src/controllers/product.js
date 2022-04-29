'use strict'

const Product = require('../models/product')

function getAllProducts(req, res) {
    Product.find({}, (err, products) => {
        if (err) {
            return res.status(500).send({message: `Error al realizar la peticion a la BD: ${err}`})
        }

        if(!products) {
            return res.status(200).send([])
        }

        res.status(200).send({products})
    })    
}

function getProductById(req, res) {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) {
            return res.status(500).send({message: `Error al realizar la peticion a la BD: ${err}`})
        }
        if(!product) {
            return res.status(404).send({message: `Product with Id ${productId} no existe`})
        }
        res.status(200).send({product})
    })    
}

function createProduct(req, res) {
    console.log('POST /api/product')
    console.log(req.body)

    let product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, productStored) => {
        if (err) {
            res.status(500).send({message:`Error al salvar en BD: ${err}`})
        }
        
        res.status(201).send({product: productStored})
    })
}

function updateProduct(req, res) {
    let productId = req.params.productId
    let body = req.body

    Product.findByIdAndUpdate(productId, body, (err, productUpdated) => {
        if (err) {
            return res.status(500).send({message: `Error al realizar la peticion a la BD: ${err}`})
        }

        res.status(200).send({product: productUpdated})
      
    })
}

function deleteProduct(req, res) {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) {
            return res.status(500).send({message: `Error al realizar la peticion a la BD: ${err}`})
        }
        if(!product) {
            return res.status(404).send({message: `Product with Id ${productId} no existe`})
        }
        product.remove(err => {
            if(err) {
                return res.status(500).send({message: `Error al borrar producto con id ${productId}`})    
            }
            res.status(200).send(`Producto con id ${productId} borrado`)    
        })
    })    
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}



