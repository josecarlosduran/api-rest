'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../../config')

function isAuth(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send({message: 'No tienes autorizacion'})
    }

    const autorizationHeaderParts = req.headers.authorization.split(' ')

    if (autorizationHeaderParts[0] != 'Bearer') {
        return res.status(401).send({message: 'Autorizacion incorrecta'})
    }

    const token = autorizationHeaderParts[1]
    const payload = jwt.decode(token, config.jwtSecret)
    console.log
    if (payload.exp <= moment().unix()){
        return res.status(401).send({message: 'El Token ha expirado'})
    }
    
    req.user = payload.sub
    next()
}

module.exports = isAuth