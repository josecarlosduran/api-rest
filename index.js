'use strict'

const app = require('./src/app')
const mongoose = require('mongoose')
const config = require('./config')


mongoose.connect(config.dbUrl, (err, res) => {
    if(err) {
        return console.log(`Error conectando a BD: ${err}`)
    }
    
    console.log ('Conexion a la BD establecida')
    app.listen(config.port, () => {
        console.log(`Api Rest corriendo en http://localhost:${config.port}`)
    })

})
