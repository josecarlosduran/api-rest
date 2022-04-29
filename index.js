'use strict'

const app = require('./src/app')
const mongoose = require('mongoose')



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
